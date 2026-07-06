'use client';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface EmployeeProfileRefreshContextValue {
   refreshKey: number;
   refresh: () => void;
}

const EmployeeProfileRefreshContext = createContext<EmployeeProfileRefreshContextValue>({
   refreshKey: 0,
   refresh: () => {}
});

export function EmployeeProfileRefreshProvider({ children }: { children: React.ReactNode }) {
   const [refreshKey, setRefreshKey] = useState(0);

   const refresh = useCallback(() => {
      setRefreshKey((prev) => prev + 1);
   }, []);

   const value = useMemo(() => ({ refreshKey, refresh }), [refreshKey, refresh]);

   return (
      <EmployeeProfileRefreshContext.Provider value={value}>
         {children}
      </EmployeeProfileRefreshContext.Provider>
   );
}

export function useEmployeeProfileRefresh() {
   return useContext(EmployeeProfileRefreshContext);
}
