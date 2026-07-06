import NextAuth, { type DefaultSession } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Keycloak from '@auth/core/providers/keycloak';
import { authConfig } from '@/lib/config';

declare module 'next-auth' {
  interface Session {
    error?: 'RefreshAccessTokenError';
    user?: DefaultSession['user'];
    accessToken?: string;
    idToken?: string;
  }
}

interface AugmentedJWT extends JWT {
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  accessTokenExpires?: number;
  error?: 'RefreshAccessTokenError';
}

const REFRESH_THRESHOLD_SECONDS = 30;

async function refreshAccessToken(refreshToken: string) {
  const response = await fetch(
    `${authConfig.kcInternal}/protocol/openid-connect/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: authConfig.kcClientId,
        client_secret: authConfig.kcSecret,
        refresh_token: refreshToken
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Keycloak token refresh failed: ${response.status}`);
  }

  return (await response.json()) as {
    access_token: string;
    refresh_token?: string;
    id_token?: string;
    expires_in?: number;
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  secret: authConfig.secret || undefined,
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
  providers: [
    Keycloak({
      clientId: authConfig.kcClientId,
      clientSecret: authConfig.kcSecret,
      issuer: authConfig.kcIssuer,
      authorization: {
        params: { scope: 'openid profile email' },
        url: `${authConfig.kcIssuer}/protocol/openid-connect/auth`
      },
      token: `${authConfig.kcInternal}/protocol/openid-connect/token`,
      userinfo: `${authConfig.kcInternal}/protocol/openid-connect/userinfo`
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      const t = token as AugmentedJWT;
      const now = Math.floor(Date.now() / 1000);

      if (account?.access_token && account.refresh_token) {
        t.accessToken = account.access_token;
        t.refreshToken = account.refresh_token;
        t.idToken = account.id_token;
        const expiresIn =
          account.expires_in !== undefined && account.expires_in !== null
            ? Number(account.expires_in)
            : 0;
        t.accessTokenExpires = expiresIn > 0 ? now + expiresIn : now;
        t.error = undefined;
        return token;
      }

      if (
        t.accessTokenExpires &&
        now < t.accessTokenExpires - REFRESH_THRESHOLD_SECONDS
      ) {
        return token;
      }

      if (!t.refreshToken) {
        t.error = 'RefreshAccessTokenError';
        return token;
      }

      try {
        const refreshed = await refreshAccessToken(t.refreshToken);
        t.accessToken = refreshed.access_token;
        t.refreshToken = refreshed.refresh_token ?? t.refreshToken;
        t.idToken = refreshed.id_token ?? t.idToken;
        const expiresIn = refreshed.expires_in ?? 300;
        t.accessTokenExpires = now + expiresIn;
        t.error = undefined;
      } catch {
        t.error = 'RefreshAccessTokenError';
        t.accessToken = undefined;
        t.refreshToken = undefined;
        t.idToken = undefined;
      }

      return token;
    },
    async session({ session, token }) {
      const t = token as AugmentedJWT;
      session.error = t.error;
      session.accessToken = t.accessToken;
      session.idToken = t.idToken;
      return session;
    }
  }
});
