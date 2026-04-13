/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';

interface patchGovernorate {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

export interface GovernoratePayload {
    name: string;
}

class GovernorateService extends ApiClient {

    public async getGovernorate(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Governorate',
            params
        });
    }

    // create Governorate service
    public async createGovernorate(name: string): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Governorate',
            data: { name }
        });
    }

    // patch Governorate service
    public async patchGovernorate(payload: patchGovernorate): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Governorate',
            data: payload
        });
    }

    // get Governorate by GovernorateId
    public async getGovernorateById(governorateId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Governorate/${governorateId}`
        });
    }

    // update Governorate service by GovernorateId
    public async updateGovernorate(governorateId: number, name: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Governorate/${governorateId}`,
            data: { name }
        });
    }

    // delete Governorate by id
    public async deleteGovernorate(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Governorate/${id}`
        });
    }

    // get GetList by id and NameTerm
    public async getGovernorateList(id?: number, NameTerm?: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Governorate',
            params: { id, NameTerm }
        });
    }
}


export const governorateService: GovernorateService = new GovernorateService();
