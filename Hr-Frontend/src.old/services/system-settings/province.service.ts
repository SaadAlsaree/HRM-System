/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';
import { Status } from '@/types/enums';

export interface ProvincePayload {
    name?: string;
}

interface patchProvincePayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}


class ProvinceService extends ApiClient {


    public async getProvinces(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Province',
            params
        });
    }

    public async createProvince(payload: ProvincePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Province',
            data: payload
        });
    }

    public async updateProvince(ProvinceId: number, payload: ProvincePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Province/${ProvinceId}`,
            data: payload
        });
    }

    public async deleteProvince(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Province/${id}`
        });
    }

    public async patchProvince(payload: patchProvincePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Province',
            data: payload
        });
    }

    // Get /Province/GetList with params {id: string, NameTerm: string}
    public async getProvinceList(params: { id: string, NameTerm: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Province/GetList',
            params
        });
    }
}

export const provinceService: ProvinceService = new ProvinceService();


