// app/page.tsx
'use client';

import React, { useState } from 'react';
import EmployeeForm from "./_components/document-validation-form";
import DocumentToolbar from "./_components/document-validation-toolbar";

interface ISearchResult {
    id: number | string;
    employeeName: string;
    fileNumber: string;
    jobNumber: string;
    statisticalNumber: string;
}

export default function Home() {
    const [selectedResult, setSelectedResult] = useState<ISearchResult | null>(null);

    const handleSelectResult = (result: ISearchResult) => {
        setSelectedResult(result);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <DocumentToolbar onSelectResult={handleSelectResult} />
            <EmployeeForm selectedResult={selectedResult} />
        </div>
    );
}