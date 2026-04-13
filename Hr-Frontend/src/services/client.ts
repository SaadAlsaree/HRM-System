import axios, { AxiosInstance } from 'axios';

export class Client {
    protected instance: AxiosInstance;
    protected baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/hub/hrm/v1/api/";

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
    }

    getInstance(): AxiosInstance {
        return this.instance;
    }
}