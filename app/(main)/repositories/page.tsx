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

export default async function RepositoriesPage() {
  const username = portfolio.profile.username;
  let repositories: any[] = [];
  let error = null;

  if (username) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=10`, {
        next: { revalidate: 3600 }
      });

      console.log("repositories", res);

      if (!res.ok) {
        // If the username from portfolio.json (pankajkumar) is not found or rate limited, 
        // we might want to try the one from social links or just fail gracefully.
        // For now, let's just log it and show empty/error.
        console.error("Failed to fetch repositories:", res.statusText);
        error = "Failed to fetch repositories";
      } else {
        const data = await res.json();
        console.log("repositories", data);
        // Limit to 4 repositories
        repositories = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          languageColor: "#3178c6", // Placeholder, would need a map for real colors
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          isPrivate: repo.private,
          updatedAt: repo.updated_at,
          url: repo.html_url
        }));
      }
    } catch (e) {
      console.error("Error fetching repositories:", e);
      error = "Error fetching repositories";
    }
  }

  return (
    <RepositoriesContent repositories={repositories} error={error} username={username} />
  );
}
