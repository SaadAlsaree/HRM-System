import { countryService } from '@/services/system-settings/country.service';
import React from 'react';
import CountryToolbar from './_components/country-toolbar';
import { Separator } from '@/components/ui/separator';
import { columnsCountry } from './_components/columns';
import CountryTable from './_components/country-table';
import Pagination from '@/components/Pagination';

export interface ICountry {
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

const CountryPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await countryService.getCountries({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <CountryToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <CountryTable columns={columnsCountry} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default CountryPage;
