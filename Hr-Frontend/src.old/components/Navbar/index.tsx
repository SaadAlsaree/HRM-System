import React from 'react';
import { DarkModeToggle } from './darkmode-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import { Bell, CircleUser, Mail } from 'lucide-react';
import { Button } from '../ui/button';

//icons

const Navbar = () => {
   const pathname = usePathname();

   const parts = pathname.split('/').filter(Boolean);
   return (
      <header className='top-0 sticky border rounded-lg my-2 ml-2 z-50  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
         <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 px-4'>
               <SidebarTrigger className='-ml-1 text-muted-foreground' />
               <Separator orientation='vertical' className='mr-2 h-4' />
               <Breadcrumb>
                  <BreadcrumbList>
                     <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                     </BreadcrumbItem>

                     {parts.map((part, index) => (
                        <BreadcrumbItem key={index}>
                           <BreadcrumbSeparator />
                           <BreadcrumbLink href={`/${part}`}>{part}</BreadcrumbLink>
                        </BreadcrumbItem>
                     ))}
                  </BreadcrumbList>
               </Breadcrumb>
            </div>
            <div className='flex items-center gap-1 text-muted-foreground'>
               <DarkModeToggle />
               <Button variant='ghost' size='icon'>
                  <Mail className='w-5 h-5' />
               </Button>
               <Button variant='ghost' size='icon'>
                  <Bell className='w-5 h-5' />
               </Button>
               <Button variant='ghost' size='icon'>
                  <CircleUser className='w-5 h-5' />
               </Button>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
