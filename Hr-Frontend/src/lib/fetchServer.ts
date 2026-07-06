import { apiConfig, proxyConfig } from '@/lib/config';
import { getServerAuthToken } from '@/lib/auth-token';
import { buildKeycloakSignInUrl } from '@/lib/auth-redirect';
import { buildQueryString, parseJsonResponse, shouldUseJsonBody, type FetchParams, toRequestBody } from '@/lib/fetch-core';
import { redirect } from 'next/navigation';

export interface FetchServerOptions {
  body?: unknown;
  headers?: HeadersInit;
  formData?: FormData;
  params?: FetchParams;
  raw?: boolean;
  cache?: RequestCache;
  next?: { revalidate?: number; tags?: string[] };
}

export async function fetchServer<T = unknown>(
  url: string,
  method: RequestInit['method'] = 'GET',
  options: FetchServerOptions = {}
): Promise<T> {
  const { accessToken, error } = await getServerAuthToken();

  if (error === 'RefreshAccessTokenError') {
    redirect(buildKeycloakSignInUrl());
  }

  const headers = new Headers(options.headers);
  if (options.formData) {
    headers.delete('Content-Type');
  } else if (shouldUseJsonBody(options.body) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
  if (proxyConfig.internalKey) {
    headers.set('X-Internal-Proxy-Key', proxyConfig.internalKey);
  }

  const response = await fetch(`${apiConfig.baseUrl}${url}${buildQueryString(options.params)}`, {
    method,
    headers,
    body: options.formData ?? toRequestBody(options.body),
    cache: options.cache,
    next: options.next
  });

  if (response.status === 429) {
    redirect('/too-many-requests');
  }
  if (response.status === 401) {
    redirect(buildKeycloakSignInUrl());
  }

  if (options.raw) {
    return response as unknown as T;
  }

  return parseJsonResponse<T>(await response.text());
}
