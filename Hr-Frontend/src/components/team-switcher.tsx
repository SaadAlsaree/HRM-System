'use client';
import * as React from 'react';

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';

type Props = {
   team: {
      name: string;
      logo: React.ElementType;
      plan: string;
   };
};

export function TeamSwitcher({ team }: Props) {
   return (
      <SidebarMenu>
         <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
               <a href='/'>
                  <div className='grid flex-1 text-right text-sm leading-tight'>
                     <span className='truncate font-semibold'>{team.name}</span>
                     <span className='truncate text-xs'>{team.plan}</span>
                  </div>

                  <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-cyan-600 text-sidebar-primary-foreground'>
                     <team.logo className='size-4 ' />
                  </div>
               </a>
            </SidebarMenuButton>
         </SidebarMenuItem>
      </SidebarMenu>
   );
}
