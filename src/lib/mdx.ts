import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentType = "projects" | "logs" | "blog";

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
