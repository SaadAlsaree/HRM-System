function getEnvOr(key: string, fallback: string): string {
  const value = process.env[key];
  return value && value.trim().length > 0 ? value : fallback;
}

export const authConfig = {
  kcIssuer: getEnvOr('AUTH_KEYCLOAK_ISSUER', 'http://localhost:8080/realms/hrm'),
  kcInternal: getEnvOr(
    'AUTH_KEYCLOAK_ISSUER_INTERNAL',
    getEnvOr('AUTH_KEYCLOAK_ISSUER', 'http://localhost:8080/realms/hrm')
  ),
  kcClientId: getEnvOr('AUTH_KEYCLOAK_ID', 'hrm-app'),
  kcSecret: process.env.AUTH_KEYCLOAK_SECRET ?? '',
  secret: process.env.AUTH_SECRET ?? '',
  appUrl: getEnvOr('NEXT_PUBLIC_APP_URL', 'http://localhost:3000')
};

export const apiConfig = {
  baseUrl: getEnvOr('API_URL', 'http://localhost:5214/hub/hrm/v1/api')
};

export const proxyConfig = {
  internalKey: process.env.INTERNAL_PROXY_KEY ?? ''
};
