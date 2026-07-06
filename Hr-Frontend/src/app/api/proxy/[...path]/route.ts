import { NextRequest, NextResponse } from 'next/server';
import { apiConfig } from '@/lib/config';
import { getServerAuthTokenFromRequest } from '@/lib/auth-token';

const LOGIN_PATH_FRAGMENTS = ['/login', '/sign-in', '/sign-up', '/auth'];

function isLoginPath(path: string): boolean {
  const lower = path.toLowerCase();
  return LOGIN_PATH_FRAGMENTS.some((fragment) => lower.includes(fragment));
}

async function handleProxy(
  req: NextRequest,
  context: { params: { path?: string[] } }
) {
  const segments = context.params.path ?? [];
  const targetPath = '/' + segments.join('/');

  const { accessToken, error } = await getServerAuthTokenFromRequest(req);

  if (error === 'RefreshAccessTokenError' && !isLoginPath(targetPath)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const headers = new Headers();
  if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
  if (process.env.INTERNAL_PROXY_KEY) {
    headers.set('X-Internal-Proxy-Key', process.env.INTERNAL_PROXY_KEY);
  }

  const contentType = req.headers.get('content-type');
  if (contentType && !isLoginPath(targetPath)) {
    headers.set('Content-Type', contentType);
  }

  const isFormData = contentType?.toLowerCase().startsWith('multipart/form-data');
  const hasBody = req.method !== 'GET' && req.method !== 'HEAD';
  const body = hasBody
    ? isFormData
      ? ((await req.formData()) as BodyInit)
      : ((await req.text()) as BodyInit)
    : undefined;

  const targetUrl = `${apiConfig.baseUrl}${targetPath}${req.nextUrl.search}`;

  const apiResponse = await fetch(targetUrl, {
    method: req.method,
    headers,
    body,
    cache: 'no-store',
    redirect: 'manual'
  });

  const responseHeaders = new Headers(apiResponse.headers);
  responseHeaders.delete('content-encoding');

  return new NextResponse(apiResponse.body, {
    status: apiResponse.status,
    statusText: apiResponse.statusText,
    headers: responseHeaders
  });
}

export const GET = (req: NextRequest, ctx: { params: { path?: string[] } }) =>
  handleProxy(req, ctx);
export const POST = (req: NextRequest, ctx: { params: { path?: string[] } }) =>
  handleProxy(req, ctx);
export const PUT = (req: NextRequest, ctx: { params: { path?: string[] } }) =>
  handleProxy(req, ctx);
export const PATCH = (req: NextRequest, ctx: { params: { path?: string[] } }) =>
  handleProxy(req, ctx);
export const DELETE = (req: NextRequest, ctx: { params: { path?: string[] } }) =>
  handleProxy(req, ctx);
