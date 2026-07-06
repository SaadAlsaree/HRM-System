export const metadata = { title: 'طلبات كثيرة' };

export default function TooManyRequestsPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-muted/30'>
      <div className='max-w-sm space-y-2 rounded-lg border bg-background p-8 text-center shadow-sm'>
        <h1 className='text-2xl font-semibold'>429</h1>
        <p className='text-sm text-muted-foreground'>
          لقد تجاوزت عدد الطلبات المسموح به. يرجى المحاولة مرة أخرى لاحقاً.
        </p>
      </div>
    </div>
  );
}
