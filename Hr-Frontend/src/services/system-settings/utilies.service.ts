/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { SearchBy } from '@/types/enums';




class UtiliesService extends ApiClient {

    public async getTypeOfService(params: { Search?: string, SearchBy?: SearchBy }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Utilies/FindEmployee',
            params
        });
    }

    public async createTypeOfService(): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Utilies/GetStatus'
        });
    }

}

export const utiliesService: UtiliesService = new UtiliesService();