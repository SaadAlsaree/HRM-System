import { buildKeycloakSignInUrl } from '@/lib/auth-redirect';
import { buildQueryString, parseJsonResponse, shouldUseJsonBody, type FetchParams, toRequestBody } from '@/lib/fetch-core';

export interface FetchClientCoreOptions {
  body?: unknown;
  headers?: HeadersInit;
  formData?: FormData;
  params?: FetchParams;
  raw?: boolean;
  cache?: RequestCache;
}

function redirectClient(href: string, navigate?: (href: string) => void) {
  if (navigate) {
    navigate(href);
    return;
  }

  if (typeof window !== 'undefined') {
    window.location.replace(href);
  }
}

function getCurrentPath() {
  if (typeof window === 'undefined') return '/';
  return `${window.location.pathname}${window.location.search}`;
}

export async function fetchClientRequest<T = unknown>(
  url: string,
  method: RequestInit['method'] = 'GET',
  options: FetchClientCoreOptions = {},
  navigate?: (href: string) => void
): Promise<T> {
  const headers = new Headers(options.headers);
  const body = options.formData ?? options.body;

  if (options.formData) {
    headers.delete('Content-Type');
  } else if (shouldUseJsonBody(options.body) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`/api/proxy${url}${buildQueryString(options.params)}`, {
    method,
    headers,
    body: options.formData ?? toRequestBody(body),
    credentials: 'same-origin',
    cache: options.cache
  });

  if (response.status === 401) {
    redirectClient(buildKeycloakSignInUrl(getCurrentPath()), navigate);
    throw new Error('Unauthorized');
  }

  if (response.status === 429) {
    redirectClient('/too-many-requests', navigate);
    throw new Error('Too many requests');
  }

  if (options.raw) {
    return response as unknown as T;
  }

  return parseJsonResponse<T>(await response.text());
}
