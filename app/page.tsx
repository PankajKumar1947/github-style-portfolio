import Navbar from "@/components/layout/navbar";
import ProfileCard from "@/components/layout/profile-card";
import TabsUnderlined from "@/components/layout/tabs-underlined";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";

const portfolio = portfolioData as PortfolioData;

const tabs = [
  {
    name: 'Overview',
    value: 'overview',
  },
  {
    name: 'Projects',
    value: 'projects',
  },
  {
    name: 'Repositories',
    value: 'repositories',
  },
  {
    name: 'Skills',
    value: 'skills',
  },
  {
    name: 'Experience',
    value: 'experience',
  },
  {
    name: 'Education',
    value: 'education',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-app-background">
      <Navbar profile={portfolio.profile} />
      
      {/* Profile Header Section */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Sidebar - Profile Card */}
            <aside className="w-full md:w-72 py-8">
              <ProfileCard 
                profile={portfolio.profile}
                socialLinks={portfolio.socialLinks}
              />
            </aside>
            
            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              <TabsUnderlined 
                tabs={tabs}
                defaultTab="overview"
                overview={portfolio.overview}
                projects={portfolio.projects}
                repositories={portfolio.repositories}
                skills={portfolio.skills}
                experience={portfolio.experience}
                education={portfolio.education}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
