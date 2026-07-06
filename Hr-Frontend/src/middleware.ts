import { auth } from '@/lib/auth';
import { buildKeycloakSignInUrl } from '@/lib/auth-redirect';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl } = req;

  const refreshError = (req.auth as { error?: string } | null)?.error === 'RefreshAccessTokenError';
  const isLoggedIn = !!req.auth && !refreshError;

  const isPublicAuthRoute =
    nextUrl.pathname.startsWith('/auth/sign-in') ||
    nextUrl.pathname.startsWith('/auth/sign-up') ||
    nextUrl.pathname === '/auth';

  const isApiRoute = nextUrl.pathname.startsWith('/api');

  if (isApiRoute) return NextResponse.next();

  if (!isLoggedIn && !isPublicAuthRoute) {
    return NextResponse.redirect(
      new URL(buildKeycloakSignInUrl(nextUrl.pathname + nextUrl.search), nextUrl)
    );
  }

  if (isLoggedIn && isPublicAuthRoute) {
    return NextResponse.redirect(new URL('/', nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)'
  ]
};
