import { auth } from '@/lib/auth';

export interface ServerTokenResult {
  accessToken?: string;
  idToken?: string;
  error?: 'RefreshAccessTokenError';
}

export async function getServerAuthToken(): Promise<ServerTokenResult> {
  const session = await auth();

  if (!session) return {};
  if (session.error === 'RefreshAccessTokenError') {
    return { error: 'RefreshAccessTokenError' };
  }

  return {
    accessToken: session.accessToken,
    idToken: session.idToken
  };
}

export async function getServerAuthTokenFromRequest(
  _request: Request
): Promise<ServerTokenResult> {
  return getServerAuthToken();
}
