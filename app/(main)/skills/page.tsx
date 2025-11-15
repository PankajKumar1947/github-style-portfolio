import { SkillsContent } from "@/components/layout/tab-contents/skills";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";
import type { Metadata } from 'next';

const portfolio = portfolioData as PortfolioData;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Skills | ${portfolio.profile.name}`,
    description: `Explore the skills of ${portfolio.profile.name}.`,
  };
}

export default function SkillsPage() {
  return (
    <SkillsContent skills={portfolio.skills} />
  );
}
