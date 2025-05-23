'use client';

import { BadgeCheck, Bell, ChevronsUpDown, LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import Link from 'next/link';

export function NavUser({
   user
}: {
   user: {
      name: string;
      email: string;
      avatar: string;
   };
}) {
   const { isMobile } = useSidebar();

   return (
      <SidebarMenu>
         <SidebarMenuItem>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                     size='lg'
                     className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                  >
                     <ChevronsUpDown className='mr-auto size-4' />
                     <div className='grid flex-1 text-right text-sm leading-tight'>
                        <span className='truncate font-semibold'>{user.name}</span>
                        <span className='truncate text-xs'>{user.email}</span>
                     </div>

                     <Avatar className='h-8 w-8 rounded-lg'>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                     </Avatar>
                  </SidebarMenuButton>
               </DropdownMenuTrigger>
               <DropdownMenuContent
                  className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                  side={isMobile ? 'bottom' : 'right'}
                  align='end'
                  sideOffset={4}
               >
                  <DropdownMenuLabel className='p-0 font-normal'>
                     <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                        <Avatar className='h-8 w-8 rounded-lg'>
                           <AvatarImage src={user.avatar} alt={user.name} />
                           <AvatarFallback className='rounded-lg'>S.A</AvatarFallback>
                        </Avatar>
                        <div className='grid flex-1 text-right text-sm leading-tight'>
                           <span className='truncate font-semibold'>{user.name}</span>
                           <span className='truncate text-xs'>{user.email}</span>
                        </div>
                     </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                     <DropdownMenuItem>
                        <Link className='flex gap-2' href='/profile'>
                           <BadgeCheck />
                           الحساب
                        </Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                        <Bell />
                        الإشعارات
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                     <LogOut />
                     تسجيل الخروج
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </SidebarMenuItem>
      </SidebarMenu>
   );
}
