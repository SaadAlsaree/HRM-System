'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useFetchClient } from '@/lib/fetchClient';

export interface CurrentUser {
  id?: string;
  userName?: string;
  email?: string;
  roles?: string[];
}

export function useCurrentUser() {
  const { status } = useSession();
  const fetchClient = useFetchClient();

  return useQuery<CurrentUser>({
    queryKey: ['current-user'],
    queryFn: () => fetchClient<CurrentUser>('/Profile/Me', 'GET'),
    enabled: status === 'authenticated',
    staleTime: 5 * 60 * 1000,
    retry: false
  });
}

export function useHasRole(...roles: string[]): boolean {
  const { data } = useCurrentUser();
  const userRoles = data?.roles ?? [];
  if (roles.length === 0) return true;
  return roles.some((role) => userRoles.includes(role));
}
