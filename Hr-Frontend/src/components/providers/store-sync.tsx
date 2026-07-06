'use client';

import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { keycloakSignOut } from '@/lib/keycloak-logout';

export function StoreSync() {
  const { data: session } = useSession();
  const handledRef = useRef(false);

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError' && !handledRef.current) {
      handledRef.current = true;
      void keycloakSignOut();
    }
  }, [session?.error]);

  return null;
}
