'use client';
import React, { useEffect, useState } from 'react';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter, useSearchParams } from 'next/navigation';
import WithholdingFormDialog from './withholding-form-dialog';

const WithholdingToolbar = () => {
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleUserSelect = (user: IEmployeeSearch | null) => {
        setSelectedUser(user);
    };

    useEffect(() => {
        if (selectedUser?.employeeId) {
            const params = new URLSearchParams(searchParams);
            params.set('employeeId', selectedUser.employeeId);
            router.push(`?${params.toString()}`);
        } else {
            const params = new URLSearchParams(searchParams);
            params.delete('employeeId');
            router.push(`?${params.toString()}`);
        }
    }, [selectedUser, searchParams, router]);

    return (
        <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full p-2'>
                <div className='text-xl text-muted-foreground'>إدارة حجب الترقيات.</div>

                <div>
                    <WithholdingFormDialog title="إضافة حجب ترقية" />
                </div>
            </div>

            <div className='flex items-center justify-between w-full p-2'>
                <EmployeeSearch onSelectUser={handleUserSelect} />
            </div>
        </div>
    );
};

export default WithholdingToolbar;
