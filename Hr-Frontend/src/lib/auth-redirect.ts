const KEYCLOAK_SIGN_IN_PATH = '/auth/sign-in';

export function sanitizeCallbackUrl(callbackUrl?: string | null): string {
  if (!callbackUrl || !callbackUrl.startsWith('/') || callbackUrl.startsWith('//')) {
    return '/';
  }

  return callbackUrl;
}

export function buildKeycloakSignInUrl(callbackUrl?: string | null): string {
  const params = new URLSearchParams({
    callbackUrl: sanitizeCallbackUrl(callbackUrl)
  });

  return `${KEYCLOAK_SIGN_IN_PATH}?${params.toString()}`;
}
