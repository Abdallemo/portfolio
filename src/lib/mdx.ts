import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentType = "projects" | "blog" | "tools";

export function getDirectory(type: ContentType) {
  return path.join(process.cwd(), `content/${type}`);
}

export async function getSlugs(type: ContentType) {
  const dir = getDirectory(type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
}

export async function getContentBySlug(type: ContentType, slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(getDirectory(type), `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) throw new Error(`File not found: ${fullPath}`);
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export async function getAllContent(type: ContentType) {
  const slugs = await getSlugs(type);
  const items = await Promise.all(
    slugs.map((slug) => getContentBySlug(type, slug))
  );

  return items.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
}

export async function getAllContentFromAllTypes() {
  const types: ContentType[] = ["projects", "blog", "tools"];
  const allContent = await Promise.all(types.map((type) => getAllContent(type)));
  return allContent.flat().map((item, index) => ({
    ...item,
    type: types[Math.floor(index / (allContent.flat().length / types.length))] // This logic is slightly flawed if lengths differ, better map them individually
  }));
}

// Improved version of getAllContentFromAllTypes
export async function getAllCombinedContent() {
  const blog = (await getAllContent("blog")).map(p => ({ ...p, contentType: "blog" as const }));
  const projects = (await getAllContent("projects")).map(p => ({ ...p, contentType: "projects" as const }));
  const tools = (await getAllContent("tools")).map(p => ({ ...p, contentType: "tools" as const }));
  
  return [...blog, ...projects, ...tools].sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
}

export async function getAllTags() {
  const allContent = await getAllCombinedContent();
  const tags = new Set<string>();
  
  allContent.forEach(item => {
    const itemTags = item.meta.tags || item.meta.tech || [];
    if (Array.isArray(itemTags)) {
      itemTags.forEach(tag => tags.add(tag.toLowerCase()));
    }
  });
  
  return Array.from(tags).sort();
}

export async function getContentByTag(tag: string) {
  const allContent = await getAllCombinedContent();
  const normalizedTag = tag.toLowerCase();
  
  return allContent.filter(item => {
    const itemTags = (item.meta.tags || item.meta.tech || []).map((t: string) => t.toLowerCase());
    return itemTags.includes(normalizedTag);
  });
}
