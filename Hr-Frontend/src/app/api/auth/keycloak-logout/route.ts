import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { signOut } from '@/lib/auth';
import { authConfig } from '@/lib/config';

export async function GET(req: NextRequest) {
  const format = req.nextUrl.searchParams.get('format');

  const token = await getToken({
    req,
    secret: authConfig.secret || undefined
  });
  const idTokenHint = token?.idToken as string | undefined;

  await signOut({ redirect: false });

  const params = new URLSearchParams({
    client_id: authConfig.kcClientId,
    post_logout_redirect_uri: `${authConfig.appUrl}/`
  });
  if (idTokenHint) params.set('id_token_hint', idTokenHint);

  const logoutUrl = `${authConfig.kcIssuer}/protocol/openid-connect/logout?${params.toString()}`;

  if (format === 'json') {
    return NextResponse.json({ logoutUrl });
  }

  return NextResponse.redirect(logoutUrl);
}
