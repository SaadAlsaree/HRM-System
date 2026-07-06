import { AxiosRequestConfig } from 'axios';
import { fetchClientRequest } from '@/lib/fetchClientCore';

class ApiClient {
    private normalizeHeaders(headers?: AxiosRequestConfig['headers']): HeadersInit | undefined {
        if (!headers) return undefined;
        if (headers instanceof Headers) return headers;
        if (typeof (headers as { toJSON?: () => unknown }).toJSON === 'function') {
            return (headers as { toJSON: () => HeadersInit }).toJSON();
        }

        return headers as HeadersInit;
    }

    private async parseRawResponse<T>(response: Response, responseType?: AxiosRequestConfig['responseType']): Promise<T> {
        switch (responseType) {
            case 'arraybuffer':
                return (await response.arrayBuffer()) as T;
            case 'blob':
                return (await response.blob()) as T;
            case 'text':
                return (await response.text()) as T;
            default:
                return response as unknown as T;
        }
    }

    async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const method = config.method ?? 'GET';
            const url = config.url ?? '';
            const isRawResponse = Boolean(config.responseType);
            const requestOptions = {
                body: config.data,
                headers: this.normalizeHeaders(config.headers),
                params: config.params as Record<string, string | number | boolean | undefined | null> | undefined,
                raw: isRawResponse
            };

            if (typeof window === 'undefined') {
                throw new Error('ApiClient cannot be used during server rendering. Use fetchServer directly in Server Components.');
            }

            if (isRawResponse) {
                const response = await fetchClientRequest<Response>(url, method, requestOptions);
                return this.parseRawResponse<T>(response, config.responseType);
            }

            return await fetchClientRequest<T>(url, method, requestOptions);
        } catch {
            return {} as T;
        }
    }
}

export default ApiClient;
