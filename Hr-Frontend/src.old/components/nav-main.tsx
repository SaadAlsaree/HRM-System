'use client';
import { useMemo } from 'react';
import { ChevronLeft, type LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem
} from '@/components/ui/sidebar';

type Props = {
   routes: {
      title: string;
      url: string;
      icon?: LucideIcon;
      isActive?: boolean;
      items?: {
         title: string;
         url: string;
      }[];
   }[];
};
export function NavMain({ routes }: Props) {
   const pathname = usePathname();

   const items = useMemo(() => {
      return routes.map((route) => {
         const isActive = route.url === pathname || route.items?.some((item) => item.url === pathname);
         return {
            ...route,
            isActive
         };
      });
   }, [routes, pathname]);

   return (
      <SidebarGroup>
         <SidebarGroupLabel>المنصة</SidebarGroupLabel>
         <SidebarMenu>
            {items.map((item) => (
               <Collapsible key={item.title} asChild defaultOpen={item.isActive} className='group/collapsible'>
                  <SidebarMenuItem>
                     <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                           {item.icon && <item.icon />}
                           <span>{item.title}</span>
                           <ChevronLeft className='mr-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90' />
                        </SidebarMenuButton>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                        <SidebarMenuSub>
                           {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                 <SidebarMenuSubButton asChild url={subItem.url} isActive={subItem.url === pathname}>
                                    <a href={subItem.url}>
                                       <span>{subItem.title}</span>
                                    </a>
                                 </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                           ))}
                        </SidebarMenuSub>
                     </CollapsibleContent>
                  </SidebarMenuItem>
               </Collapsible>
            ))}
         </SidebarMenu>
      </SidebarGroup>
   );
}
