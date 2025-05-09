import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';



class ApiClient {
    private axiosInstance: AxiosInstance;

    constructor(context?: GetServerSidePropsContext) {
        let baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/hub/hrm/v1/api/'; // Default if env var is not set
        const headers: AxiosRequestConfig['headers'] = {};

        if (context) {
            // Server-side: Get cookies from the request
            const cookies = parseCookies(context);
            if (cookies['auth-token']) {
                headers.Authorization = `Bearer ${cookies['auth-token']}`;
            }
            // For server side requests, use the internal URL to your backend
            baseURL = process.env.API_INTERNAL_URL || 'http://localhost:5000/hub/hrm/v1/api/'; // Important for Docker/internal networks
        } else if (typeof window !== 'undefined') {
            // Client-side: Get cookies from the browser
            const cookies = parseCookies();
            if (cookies['auth-token']) {
                headers.Authorization = `Bearer ${cookies['auth-token']}`;
            }
        }

        this.axiosInstance = axios.create({
            baseURL,
            withCredentials: true, // Important for sending cookies
            headers: headers,
        });

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response?.status === 401 && !originalRequest._retry) { // Check for 401 and prevent infinite retry loop
                    originalRequest._retry = true;
                    try {
                        // Logic to refresh token. Example with a refresh token endpoint:
                        // const refreshResponse = await axios.post('/api/refresh_token', {}, { withCredentials: true });
                        // const newToken = refreshResponse.data.access_token;
                        // nookies.set(null, 'auth-token', newToken, { // Set the new token in cookies
                        //     path: '/',
                        // });
                        // originalRequest.headers.Authorization = `Bearer ${newToken}`; // Update the header of the original request
                        // return axiosInstance(originalRequest); // Retry the original request
                        console.log("Token expired")
                        return Promise.reject(error);
                    } catch (refreshError) {
                        // Handle refresh token error (e.g., redirect to login)
                        console.error("Token refresh failed:", refreshError);
                        return Promise.reject(error);
                    }
                }
                return Promise.reject(error);
            }
        );
    }

    async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.request(config);
            return response.data;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: unknown) {
            // console.error('Server Request Error:', error);
            // Return a default value or handle the error as needed
            return {} as T;
        }
    }
}

export default ApiClient;