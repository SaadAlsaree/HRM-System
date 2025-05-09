'use client';
import { useQuery } from '@tanstack/react-query';
import { directorateService } from '@/services/system-settings/directorate.service';

const useDirector = (id: number) => {
   useQuery({
      queryKey: ['subDirectorates'],
      queryFn: async () => await directorateService.getDirectorateById(id),
      staleTime: 1000 * 60,
      retry: 3
   });
};

export default useDirector;
