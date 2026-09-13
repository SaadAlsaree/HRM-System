'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCw, AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If it's a chunk loading failure after deployment, auto-reload once
    const errorMsg = error?.message || '';
    if (
      errorMsg.includes('Loading chunk') ||
      errorMsg.includes('ChunkLoadError') ||
      error?.name === 'ChunkLoadError'
    ) {
      const lastReload = sessionStorage.getItem('last_chunk_reload');
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem('last_chunk_reload', String(now));
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className='flex min-h-[60vh] flex-col items-center justify-center p-4 text-center'>
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 mb-4'>
        <AlertTriangle className='h-8 w-8' />
      </div>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2'>
        حدث خطأ أثناء تحميل الصفحة
      </h2>
      <p className='text-muted-foreground text-sm max-w-md mb-6'>
        قد يكون هناك تحديث جديد في النظام. يرجى إعادة تحميل الصفحة للمتابعة.
      </p>
      <div className='flex items-center gap-3'>
        <Button
          onClick={() => window.location.reload()}
          className='flex items-center gap-2'
        >
          <RotateCw className='h-4 w-4' />
          إعادة تحميل الصفحة
        </Button>
        <Button variant='outline' onClick={() => reset()}>
          إعادة المحاولة
        </Button>
      </div>
    </div>
  );
}
