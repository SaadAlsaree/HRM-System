'use client';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { PropsWithChildren } from 'react';

export default function SessionProviderWrapper({
  children,
  session
}: PropsWithChildren<{ session: Session | null }>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
