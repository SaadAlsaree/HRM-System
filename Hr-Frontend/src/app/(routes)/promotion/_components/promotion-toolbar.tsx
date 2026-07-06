'use client';
import React, { useEffect, useState } from 'react';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import InitializationFormDialog from './initialization-form-dialog';

const PromotionToolbar = () => {
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleUserSelect = (user: IEmployeeSearch | null) => {
        setSelectedUser(user);
        const params = new URLSearchParams(searchParams);
        if (user?.employeeId) {
            params.set('employeeId', user.employeeId);
        } else {
            params.delete('employeeId');
        }
        router.push(`?${params.toString()}`);
    };

    return (
        <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full p-2'>
                <div className='text-xl text-muted-foreground'>الترقيات والعلاوات.</div>

                <div className='flex items-center gap-2'>
                    <InitializationFormDialog />
                    <Button asChild>
                        <Link href="/promotion/create">إضافة ترقية جديدة</Link>
                    </Button>
                </div>
            </div>

            <div className='flex items-center justify-between w-full p-2'>
                <EmployeeSearch onSelectUser={handleUserSelect} />
            </div>
        </div>
    );
};

export default PromotionToolbar;
