'use client';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import Navbar from './Navbar';

type Props = {
   children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
   return (
      <SidebarProvider>
         <AppSidebar side='right' variant='floating' collapsible='offcanvas' />
         <SidebarInset>
            <Navbar />
            <main className='sm:px-2 mt-10  md:px-4 xl:px-6 2xl:px-8'>{children}</main>
         </SidebarInset>
      </SidebarProvider>
   );
};

export default Layout;
