import { ProjectDetail } from "@/components/project-detail"
import { projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"


export async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Abdullahi Mohamed`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
