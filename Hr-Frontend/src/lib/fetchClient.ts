'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { fetchClientRequest, type FetchClientCoreOptions } from '@/lib/fetchClientCore';

export type FetchClientOptions = FetchClientCoreOptions;

export function useFetchClient() {
  const router = useRouter();

  return useCallback(
    async function fetchClient<T = unknown>(
      url: string,
      method: RequestInit['method'] = 'GET',
      options: FetchClientOptions = {}
    ): Promise<T> {
      return fetchClientRequest<T>(url, method, options, router.replace);
    },
    [router]
  );
}
