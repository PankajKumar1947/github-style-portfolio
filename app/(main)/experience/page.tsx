import { ExperienceContent } from "@/components/layout/tab-contents/experience";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";
import type { Metadata } from 'next';

const portfolio = portfolioData as PortfolioData;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Experience | ${portfolio.profile.name}`,
    description: `Explore the professional experience of ${portfolio.profile.name}.`,
  };
}

export default function ExperiencePage() {
  return (
    <ExperienceContent experience={portfolio.experience} />
  );
}
