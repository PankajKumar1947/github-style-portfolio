"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Tab {
  name: string;
  value: string;
  href: string;
}

interface TabsUnderlinedProps {
  tabs: Tab[];
  className?: string;
}

const TabsUnderlined = ({ tabs, className }: TabsUnderlinedProps) => {
  const pathname = usePathname();

  return (
    <div className={cn('border-b border-border overflow-x-auto -mb-px bg-background', className)}>
      <div className='h-auto p-0 gap-0 bg-transparent border-0 w-fit overflow-x-auto'>
        {tabs.map(tab => {
          const isActive = (pathname === '/' && tab.href === '/') || (tab.href !== '/' && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.value}
              href={tab.href}
              className={cn(
                'inline-block px-4 py-3 text-sm font-medium rounded-none border-0 border-b-2 border-transparent transition-colors whitespace-nowrap',
                isActive
                  ? 'border-primary text-foreground bg-transparent shadow-none'
                  : 'text-muted-foreground hover:text-foreground hover:border-muted-foreground/30'
              )}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TabsUnderlined;
