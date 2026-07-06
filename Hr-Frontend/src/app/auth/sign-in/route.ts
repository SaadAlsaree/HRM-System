import { signIn } from '@/lib/auth';
import { sanitizeCallbackUrl } from '@/lib/auth-redirect';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const callbackUrl = sanitizeCallbackUrl(
    request.nextUrl.searchParams.get('callbackUrl')
  );

  const redirectUrl = await signIn('keycloak', {
    redirect: false,
    redirectTo: callbackUrl
  });

  return NextResponse.redirect(new URL(redirectUrl, request.url));
}
