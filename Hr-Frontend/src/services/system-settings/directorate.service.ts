/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';



interface patchDirectorate {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

export interface directoratePayload {
    name: string;
    shortKey: string;
}


class DirectorateService extends ApiClient {


    public async getDirectorates(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Directorate',
            params
        });
    }

    // create directorate service
    public async createDirectorate(payload: directoratePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Directorate',
            data: payload
        });
    }

    // patch directorate service
    public async patchDirectorate(payload: patchDirectorate): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Directorate',
            data: payload
        });
    }

    // get directorate by directorateId
    public async getDirectorateById(directorateId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Directorate/${directorateId}`
        });
    }

    // update directorate service by directorateId
    public async updateDirectorate(directorateId: number, payload: directoratePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Directorate/${directorateId}`,
            data: payload
        });
    }

    // delete directorate by id
    public async deleteDirectorate(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Directorate/${id}`
        });
    }

    // get directorateList id and nameTerm
    public async getDirectorateList(id: number, nameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Directorate/GetList',
            params: { id, nameTerm }
        });
    }

}

export const directorateService: DirectorateService = new DirectorateService();
