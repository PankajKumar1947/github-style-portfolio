import { ProjectsContent } from "@/components/layout/tab-contents/projects";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";
import type { Metadata } from 'next';

const portfolio = portfolioData as PortfolioData;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Projects | ${portfolio.profile.name}`,
    description: `Explore the projects by ${portfolio.profile.name}.`,
  };
}

export default function ProjectsPage() {
  return (
    <ProjectsContent projects={portfolio.projects} />
  );
}
