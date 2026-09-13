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

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const errorMsg = event?.message || event?.error?.message || '';
      const isChunkError =
        errorMsg.includes('Loading chunk') ||
        errorMsg.includes('ChunkLoadError') ||
        event?.error?.name === 'ChunkLoadError';

      if (isChunkError) {
        const lastReload = sessionStorage.getItem('last_chunk_reload');
        const now = Date.now();
        if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
          sessionStorage.setItem('last_chunk_reload', String(now));
          window.location.reload();
        }
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return null;
}
