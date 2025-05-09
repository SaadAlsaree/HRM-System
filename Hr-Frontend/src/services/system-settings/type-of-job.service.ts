/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfJobPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class TypeOfJobService extends ApiClient {

    public async getTypeOfJob(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfJob',
            params
        });
    }

    public async createTypeOfJob(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfJob',
            data: payload
        });
    }

    public async patchTypeOfJob(payload: patchTypeOfJobPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfJob',
            data: payload
        });
    }

    public async getTypeOfJobById(TypeOfJobId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfJob/${TypeOfJobId}`,
        });
    }

    // updateTypeOfJob
    public async updateTypeOfJob(TypeOfJobId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfJob/${TypeOfJobId}`,
            data: payload
        });
    }

    public async deleteTypeOfJob(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfJob/${id}`,
        });
    }

    //Get /TypeOfJob/GetList with params {Id?:number, NameTerm?: string }
    public async getTypeOfJobList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfJob/GetList',
            params
        });
    }
}

export const typeOfJobService: TypeOfJobService = new TypeOfJobService();
