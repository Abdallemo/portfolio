import fs from "fs";
import path from "path";
import matter from "gray-matter";

const logsDirectory = path.join(process.cwd(), "content/logs");

export async function getLogSlugs() {
  return fs.readdirSync(logsDirectory);
}

export async function getLogBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(logsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export async function getAllLogs() {
  const slugs = await getLogSlugs();
  const logs = await Promise.all(
    slugs.map((slug) => getLogBySlug(slug))
  );

  return logs.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
}
