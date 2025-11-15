import { RepositoriesContent } from "@/components/layout/tab-contents/repositories";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";
import type { Metadata } from 'next';

const portfolio = portfolioData as PortfolioData;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Repositories | ${portfolio.profile.name}`,
    description: `Explore the repositories by ${portfolio.profile.name}.`,
  };
}

export default function RepositoriesPage() {
  return (
    <RepositoriesContent repositories={portfolio.repositories} />
  );
}
