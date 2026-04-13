import { Suspense } from 'react';
import Layout from '@/components/layout';



export default async function Home() {
   // const response = await dashboardServiceServer.getCompletedOrdersList();
   // console.log(response);

   return (
      <Layout>
         <Suspense fallback={<>Loading ...</>}>
            <div className='p-4 flex gap-4 flex-col md:flex-row items-center justify-center  text-2xl font-bold text-gray-700'>
               أدارة الموارد البشرية
            </div>
         </Suspense>
      </Layout>
   );
}
