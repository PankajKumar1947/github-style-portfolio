import { OverviewContent } from "@/components/layout/tab-contents/overview";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";
import type { Metadata } from 'next';

const portfolio = portfolioData as PortfolioData;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Overview | ${portfolio.profile.name}`,
    description: portfolio.profile.bio,
  };
}

export default function Home() {
  return (
    <OverviewContent overview={portfolio.overview} />
  );
}

