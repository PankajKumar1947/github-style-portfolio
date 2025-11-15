"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { OverviewContent } from './tab-contents/overview'
import { ProjectsContent } from './tab-contents/projects'
import { RepositoriesContent } from './tab-contents/repositories'
import { SkillsContent } from './tab-contents/skills'
import { ExperienceContent } from './tab-contents/experience'
import { EducationContent } from './tab-contents/education'
import type { Tab, Overview, Project, Repository, SkillCategory, Experience, Education } from '@/lib/types'

interface TabsUnderlinedProps {
  tabs: Tab[]
  defaultTab?: string
  overview?: Overview
  projects?: Project[]
  repositories?: Repository[]
  skills?: SkillCategory[]
  experience?: Experience[]
  education?: Education[]
}

const TabsUnderlined = ({ 
  tabs, 
  defaultTab = 'overview',
  overview,
  projects = [],
  repositories = [],
  skills = [],
  experience = [],
  education = []
}: TabsUnderlinedProps) => {
  return (
    <Tabs defaultValue={defaultTab} className='w-full overflow-x-hidden'>
      <div className='border-b border-border overflow-x-auto -mb-px bg-background *:'>
        <TabsList className='h-auto p-0 gap-0 bg-transparent border-0 w-fit overflow-x-auto'>
          {tabs.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className='px-4 py-3 text-sm font-medium rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap'
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      <div className='mt-6'>
        {tabs.map(tab => {
          if (tab.value === 'overview' && overview) {
            return (
              <TabsContent key={tab.value} value={tab.value} className='mt-0'>
                <OverviewContent overview={overview} />
              </TabsContent>
            )
          }
          if (tab.value === 'projects' && projects.length > 0) {
            return (
              <TabsContent key={tab.value} value={tab.value} className='mt-0'>
                <ProjectsContent projects={projects} />
              </TabsContent>
            )
          }
          if (tab.value === 'repositories' && repositories.length > 0) {
            return (
              <TabsContent key={tab.value} value={tab.value} className='mt-0'>
                <RepositoriesContent repositories={repositories} />
              </TabsContent>
            )
          }
          if (tab.value === 'skills' && skills.length > 0) {
            return (
              <TabsContent key={tab.value} value={tab.value} className='mt-0'>
                <SkillsContent skills={skills} />
              </TabsContent>
            )
          }
          if (tab.value === 'experience' && experience.length > 0) {
            return (
              <TabsContent key={tab.value} value={tab.value} className='mt-0'>
                <ExperienceContent experience={experience} />
              </TabsContent>
            )
          }
          if (tab.value === 'education' && education && education.length > 0) {
            return (
              <TabsContent key={tab.value} value={tab.value} className='mt-0'>
                <EducationContent education={education} />
              </TabsContent>
            )
          }
          return (
            <TabsContent key={tab.value} value={tab.value} className='mt-0'>
              <div className='py-8 text-center text-muted-foreground'>
                {tab.name} content coming soon...
              </div>
            </TabsContent>
          )
        })}
      </div>
    </Tabs>
  )
}

export default TabsUnderlined
