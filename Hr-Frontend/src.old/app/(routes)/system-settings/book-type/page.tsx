import { typeOfBookService } from '@/services/system-settings/type-of-book.service';
import React from 'react';
import BookTypeToolbar from './_components/book-type-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import BookTypeTable from './_components/book-type-table';
import { columnsBookType } from './_components/columns';

export interface ITypeOfBook {
   id: number;
   name?: string;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const BookTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await typeOfBookService.getTypeOfBooks({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <BookTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <BookTypeTable columns={columnsBookType} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default BookTypePage;
