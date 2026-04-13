import { Suspense } from 'react';
import Layout from '@/components/layout';
import ProjectCard from './_components/ProjectCard';
import TaskCard from './_components/TaskCard';
import EventCard from './_components/EventCard';
import NotificationCard from './_components/NotificationCard';
import NotificationList from './_components/NotificationList';
import EventsList from './_components/EventsList';
import { Calendar } from '@/components/ui/calendar';
import CaseTaskChart from './_components/CaseTaskChart';
import CaseCompletedChart from './_components/CaseCompletedChart';
import TasksOverview from './_components/TasksOverview';
import TicketStatus from './_components/TicketStatus';
import OpenCase from './_components/OpenCase';
import TodoList from './_components/TodoList';

const todoData = [
   {
      id: 1,
      title: 'إعادة ترتيب أدوات لوحة التحكم الخاصة بي',
      date: '31-10-2024',
      completed: false
   },
   {
      id: 2,
      title: 'إعداد تقييد IP لسجلات الوقت',
      date: '31-10-2024',
      completed: true
   },
   {
      id: 3,
      title: 'ناقش مع أعضاء الفريق',
      date: '',
      completed: false
   },
   {
      id: 4,
      title: 'ناقش مع أعضاء الفريق',
      date: '31-10-2024',
      completed: false
   },
   {
      id: 5,
      title: 'ناقش مع أعضاء الفريق',
      date: '',
      completed: false
   },
   {
      id: 6,
      title: 'ناقش مع أعضاء الفريق',
      date: '',
      completed: false
   },
   {
      id: 7,
      title: 'ناقش مع أعضاء الفريق',
      date: '',
      completed: false
   }
];
export default async function Home() {
   // const response = await dashboardServiceServer.getCompletedOrdersList();
   // console.log(response);

   return (
      <Layout>
         <Suspense fallback={<>Loading ...</>}>
            <div className='p-4 flex gap-4 flex-col md:flex-row'>
               {/* lift */}
               <div className='w-full lg:w-3/4 flex flex-col gap-6'>
                  {/* User Card */}
                  <div className='flex justify-between gap-4 flex-wrap'>
                     <ProjectCard title='القضايا' description='320' />

                     <TaskCard title='المهام' description='6' />
                     <EventCard title='المواعيد' description='0' />
                     <NotificationCard title='الإشعارات' description='4' />
                  </div>
                  {/* Middle Charts */}
                  <div className=' flex gap-4 flex-col lg:flex-row'>
                     {/* Count Chart */}
                     <div className='w-full lg:w-1/3 h-[450px]'>
                        <CaseCompletedChart />
                     </div>

                     {/* Attendance Chart */}
                     <div className='w-full lg:w-2/3 h-[450px]'>
                        <CaseTaskChart />
                     </div>
                  </div>
                  {/* Bottom Charts */}
                  <div className='flex gap-4 flex-col lg:flex-row'>
                     <div className='w-full xl:w-1/3'>
                        <TasksOverview />
                     </div>
                     <div className='w-full xl:w-1/3'>
                        <TicketStatus />
                     </div>
                     <div className='w-full lg:w-1/3'>
                        <OpenCase />
                     </div>
                  </div>

                  <div className='flex gap-4 flex-col lg:flex-row'>
                     <div className='w-full lg:w-1/3'></div>
                     <div className='w-full lg:w-2/3 border rounded-lg'>
                        <TodoList todoData={todoData} />
                     </div>
                  </div>
               </div>

               {/* right */}
               <div className='w-full lg:w-1/4 flex flex-col gap-4'>
                  {/* <EventCalender />
                  
            <Announcements /> */}
                  <div className='flex items-center justify-center border rounded-lg  bg-white dark:bg-gray-900'>
                     <Calendar />
                  </div>
                  <NotificationList />
                  <EventsList />
               </div>
            </div>
         </Suspense>
      </Layout>
   );
}
