'use server';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

export class Server {
    protected instance: AxiosInstance;
    protected baseUrl: string = process.env.BASE_URL ?? "http://localhost:5000/hub/hrm/v1/api/";

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        // Add request interceptor
        this.instance.interceptors.request.use(
            (config) => {
                config.headers['Cookie'] = `ERM-Session=${cookies().get('ERM-Session')?.value}; ERM-Session.sig=${cookies().get('ERM-Session.sig')?.value}`;
                return config;
            },
            (error) => {
                console.error('Request Interceptor Error:', error);
                return Promise.reject(error);
            }
        );

        // Add response interceptor
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error) => {
                console.error('Response Interceptor Error:', error);
                return Promise.reject(error);
            }
        );
    }

    getInstance(): AxiosInstance {
        return this.instance;
    }
}
