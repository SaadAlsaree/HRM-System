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
import { useSession } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-current-user';
import { keycloakSignOut } from '@/lib/keycloak-logout';

function initials(name?: string) {
   if (!name) return '';
   const parts = name.trim().split(/\s+/);
   return (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '');
}

export function NavUser() {
   const { isMobile } = useSidebar();
   const { data: session } = useSession();
   const { data: currentUser } = useCurrentUser();

   const name = currentUser?.userName || session?.user?.name || '';
   const email = currentUser?.email || session?.user?.email || '';
   const avatar = session?.user?.image || '';

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
                        <span className='truncate font-semibold'>{name}</span>
                        <span className='truncate text-xs'>{email}</span>
                     </div>

                     <Avatar className='h-8 w-8 rounded-lg'>
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback className='rounded-lg'>{initials(name) || '؟'}</AvatarFallback>
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
                           <AvatarImage src={avatar} alt={name} />
                           <AvatarFallback className='rounded-lg'>{initials(name) || '؟'}</AvatarFallback>
                        </Avatar>
                        <div className='grid flex-1 text-right text-sm leading-tight'>
                           <span className='truncate font-semibold'>{name}</span>
                           <span className='truncate text-xs'>{email}</span>
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
                  <DropdownMenuItem onClick={() => void keycloakSignOut()}>
                     <LogOut />
                     تسجيل الخروج
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </SidebarMenuItem>
      </SidebarMenu>
   );
}
