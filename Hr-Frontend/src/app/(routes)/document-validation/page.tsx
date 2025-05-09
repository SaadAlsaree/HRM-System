// app/page.tsx
'use client';

import React, { useState } from 'react';
import EmployeeForm from "./_components/document-validation-form";
import DocumentToolbar from "./_components/document-validation-toolbar";

export default function Home() {
    const [selectedResult, setSelectedResult] = useState(null);

    const handleSelectResult = (result) => {
        setSelectedResult(result);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <DocumentToolbar onSelectResult={handleSelectResult} />
            <EmployeeForm selectedResult={selectedResult} />
        </div>
    );
}