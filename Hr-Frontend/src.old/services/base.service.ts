import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


export class BaseService {
    protected axiosInstance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.axiosInstance = instance;
    }

    protected async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.request(config);
            return response.data;
        } catch (error: unknown) {
            console.error('API Request Error:', error);
            throw error;
        }
    }
}
