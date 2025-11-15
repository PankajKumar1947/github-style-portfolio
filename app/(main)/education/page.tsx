import { EducationContent } from "@/components/layout/tab-contents/education";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";
import type { Metadata } from 'next';

const portfolio = portfolioData as PortfolioData;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Education | ${portfolio.profile.name}`,
    description: `Explore the educational background of ${portfolio.profile.name}.`,
  };
}

export default function EducationPage() {
  return (
    <EducationContent education={portfolio.education} />
  );
}
