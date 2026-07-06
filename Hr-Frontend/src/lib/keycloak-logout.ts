'use client';

import { buildKeycloakSignInUrl } from '@/lib/auth-redirect';

export async function keycloakSignOut(): Promise<void> {
  let logoutUrl: string | undefined;

  try {
    const response = await fetch('/api/auth/keycloak-logout?format=json', {
      credentials: 'same-origin',
      cache: 'no-store'
    });
    if (response.ok) {
      ({ logoutUrl } = (await response.json()) as { logoutUrl?: string });
    }
  } catch {
  }

  window.location.replace(logoutUrl ?? buildKeycloakSignInUrl());
}
