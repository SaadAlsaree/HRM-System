'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';

export default function UserGuidePage() {
   const [content, setContent] = useState<string>('');
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      let cancelled = false;
      (async () => {
         try {
            // The guide lives in /public/docs/ so it is statically served and works
            // in dev, production, and any host (no filesystem access needed).
            // encodeURIComponent ensures the Arabic filename is safe across all servers.
            const res = await fetch(`/docs/${encodeURIComponent('دليل-الترقيات-والعلاوات.md')}`);
            if (!res.ok) throw new Error('تعذر تحميل ملف الدليل');
            const text = await res.text();
            if (!cancelled) {
               setContent(text);
               setLoading(false);
            }
         } catch (err) {
            if (!cancelled) {
               setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
               setLoading(false);
            }
         }
      })();
      return () => {
         cancelled = true;
      };
   }, []);

   return (
      <div className='flex-1 space-y-4 p-4 pt-6 md:p-8' dir='rtl'>
         <div>
            <h2 className='text-3xl font-bold tracking-tight'>دليل المستخدم</h2>
            <p className='text-muted-foreground'>
               مرجع شامل لاستخدام نظام الموارد البشرية — الترقيات، العلاوات، والإجراءات المرتبطة بها.
            </p>
         </div>
         <Separator />

         {loading ? (
            <div className='flex items-center justify-center py-20'>
               <Spinner />
            </div>
         ) : error ? (
            <div className='rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center text-destructive'>
               {error}
            </div>
         ) : (
            // RTL-aware prose: text/headings aligned right, but code blocks kept LTR
            // (handled via .rtl-prose rules in globals.css).
            <article className='rtl-prose prose prose-lg max-w-none dark:prose-invert'>
               <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </article>
         )}
      </div>
   );
}
