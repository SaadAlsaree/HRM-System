'use client';
import { useQuery } from '@tanstack/react-query';
import { administrativeOrderService } from '@/services/administrative-order.service';
import { Status } from '@/types';
import { IAdministrativeOrder } from '@/app/(routes)/employees/profile/_components/administrative-order';

type QueryParams = {
   employeeId?: string;
   status?: Status;
   Page?: number | 1;
   PageSize?: number | 10;
};

interface ApiResponse {
   succeeded?: boolean;
   data?: IAdministrativeOrder[];
   message?: string;
   errors?: string[];
   code?: string;
}
const useGetAdministrativeOrder = ({ Page, PageSize, employeeId, status }: QueryParams) => {
   useQuery<ApiResponse, Error>({
      queryKey: ['administrativeOrder', { Page, PageSize, employeeId, status }],
      queryFn: async () => await administrativeOrderService.getAdministrativeOrder({ Page, PageSize, employeeId, status }),
      staleTime: 1000 * 60,
      retry: 3
   });
};

export default useGetAdministrativeOrder;
