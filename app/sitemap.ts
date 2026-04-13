import { MetadataRoute } from "next";
import { getAllContent } from "@/src/lib/mdx";

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://abdallemo.dev";

  const projects = await getAllContent("projects");
  const tools = await getAllContent("tools");
  const blog = await getAllContent("blog");

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(p.meta.date),
  }));

  const toolUrls = tools.map((t) => ({
    url: `${baseUrl}/tools/${t.slug}`,
    lastModified: new Date(t.meta.date),
  }));

  const blogUrls = blog.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.meta.date),
  }));

  const routes = ["", "/projects", "/tools", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectUrls, ...toolUrls, ...blogUrls];
}
