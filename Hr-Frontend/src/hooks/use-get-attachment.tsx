import { useState, useEffect, useMemo } from 'react';
import { attachmentService } from '@/services/system-settings/attachment.service';
import { Status } from '@/types';

interface attachmentParams {
   employeeId?: string | null;
   PrimaryTableId?: string | null;
   status?: Status;
}

const useGetAttachments = (params: attachmentParams) => {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [attachments, setAttachments] = useState<any[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error | null>(null);

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const memoizedParams = useMemo(() => params, [params.employeeId, params.PrimaryTableId, params.status]);

   useEffect(() => {
      if (!memoizedParams.PrimaryTableId || !memoizedParams.employeeId) {
         setLoading(false);
         return;
      }

      const fetchAttachments = async () => {
         try {
            const response = await attachmentService.getAttachments(memoizedParams);
            setAttachments(response.data || []);
         } catch (err) {
            setError(err as Error);
         } finally {
            setLoading(false);
         }
      };

      fetchAttachments();
   }, [memoizedParams]);

   return { attachments, loading, error };
};

export default useGetAttachments;
