'use client';
import React, { useState, useCallback } from 'react';
import AffiliatesFromOrgForm from './from-org-form';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter, useSearchParams } from 'next/navigation';

const statusTabs = [
   { label: 'الكل', value: '' },
   { label: 'نشط', value: '1' },
   { label: 'غير نشط', value: '2' },
];

const AffiliatesFromOrgToolbar = () => {
    const [searchText, setSearchText] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentStatus = searchParams.get('status') || '';

    const updateParams = useCallback((updates: Record<string, string>) => {
       const params = new URLSearchParams(searchParams);
       Object.entries(updates).forEach(([key, value]) => {
          if (value) params.set(key, value);
          else params.delete(key);
       });
       params.delete('page');
       router.push(`?${params.toString()}`);
    }, [searchParams, router]);

    const handleUserSelect = (user: IEmployeeSearch | null) => {
       if (user?.employeeId) {
          updateParams({ employeeId: user.employeeId });
       }
    };

    const handleSearch = () => {
       updateParams({ searchTerm: searchText });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
       if (e.key === 'Enter') handleSearch();
    };

    return (
        <div className='flex flex-col w-full'>
           <div className='flex items-center justify-between w-full p-2'>
              <div className='text-xl text-muted-foreground'>المنسبين من الجهاز</div>
              <AffiliatesFromOrgForm title='إضافة' />
           </div>

           <div className='flex items-center gap-2 p-2'>
              {statusTabs.map((tab) => (
                 <button
                    key={tab.value}
                    onClick={() => updateParams({ status: tab.value })}
                    className={`px-3 py-1 rounded-md text-sm ${
                       currentStatus === tab.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80'
                    }`}
                 >
                    {tab.label}
                 </button>
              ))}
           </div>

           <div className='flex items-center gap-2 p-2'>
              <EmployeeSearch onSelectUser={handleUserSelect} />
              <input
                 type='text'
                 placeholder='بحث...'
                 value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}
                 onKeyDown={handleKeyDown}
                 className='px-3 py-1 border rounded-md text-sm'
              />
              <button
                 onClick={handleSearch}
                 className='px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm'
              >
                 بحث
              </button>
           </div>
        </div>
    );
};

export default AffiliatesFromOrgToolbar;