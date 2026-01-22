import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "../../../components/ProjectDetail";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug!,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Zak's Blueprint`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
