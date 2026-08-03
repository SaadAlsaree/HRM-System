export type FetchParams = Record<string, string | number | boolean | undefined | null>;

function isFormData(value: unknown): value is FormData {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}

function isUrlSearchParams(value: unknown): value is URLSearchParams {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}

function isBlob(value: unknown): value is Blob {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}

function isArrayBufferView(value: unknown): value is ArrayBufferView {
  return ArrayBuffer.isView(value);
}

export function buildQueryString(params?: FetchParams): string {
  if (!params) return '';

  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, String(value));
    }
  }

  const qs = search.toString();
  return qs ? `?${qs}` : '';
}

export function shouldUseJsonBody(body: unknown): boolean {
  if (body === undefined || body === null) return false;
  if (typeof body === 'string') return false;
  if (body instanceof ArrayBuffer) return false;
  if (isArrayBufferView(body)) return false;
  if (isBlob(body)) return false;
  if (isFormData(body)) return false;
  if (isUrlSearchParams(body)) return false;

  return true;
}

export function toRequestBody(body: unknown): BodyInit | undefined {
  if (body === undefined || body === null) return undefined;
  if (shouldUseJsonBody(body)) {
    return JSON.stringify(body);
  }

  return body as BodyInit;
}

export function parseJsonResponse<T>(text: string): T {
  if (!text) return null as T;
  const parsedData = JSON.parse(text);
  
  if (parsedData && typeof parsedData === 'object' && !Array.isArray(parsedData)) {
     // Case 1: Backend returns { items: [...], totalCount: ... } instead of { data: { items: [...], totalCount: ... } }
     if ('items' in parsedData && !('data' in parsedData)) {
         return { data: parsedData, ...parsedData } as unknown as T;
     }
     
     // Case 2: Backend returns { data: [...] } where data is an array
     if ('data' in parsedData && Array.isArray(parsedData.data)) {
         return { 
             ...parsedData, 
             data: { 
                 items: parsedData.data, 
                 totalCount: parsedData.totalCount ?? parsedData.data.length 
             } 
         } as unknown as T;
     }
  }
  
  return parsedData as T;
}
