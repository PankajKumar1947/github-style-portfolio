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
    href: '/'
  },
  {
    name: 'Projects',
    value: 'projects',
    href: '/projects'
  },
  {
    name: 'Repositories',
    value: 'repositories',
    href: '/repositories'
  },
  {
    name: 'Skills',
    value: 'skills',
    href: '/skills'
  },
  {
    name: 'Experience',
    value: 'experience',
    href: '/experience'
  },
  {
    name: 'Education',
    value: 'education',
    href: '/education'
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-app-background">
      <Navbar profile={portfolio.profile} />
      
      {/* Profile Header Section */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Sidebar - Profile Card */}
            <aside className="w-full md:w-72 py-10 pt-20">
              <ProfileCard 
                profile={portfolio.profile}
                socialLinks={portfolio.socialLinks}
              />
            </aside>
            
            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              <TabsUnderlined 
                tabs={tabs}
              />
              <div className="py-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
