/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


export interface SubDirectoratesPayload {
    name: string;
    directorateId: number | string | null | undefined;
    shortKey: string;
}

interface patchSubDirectoratesPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class SubDirectorService extends ApiClient {

    public async getSubDirectorates(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/SubDirectorate',
            params
        });
    }

    public async createSubDirectorates(payload: SubDirectoratesPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/SubDirectorate',
            data: payload
        });
    }

    public async patchSubDirectorates(payload: patchSubDirectoratesPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/SubDirectorate',
            data: payload
        });
    }

    public async getSubDirectoratesById(subDirectoratesId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/SubDirectorate/${subDirectoratesId}`,
        });
    }

    // updateSubDirectorates
    public async updateSubDirectorates(subDirectoratesId: number, payload: SubDirectoratesPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/SubDirectorate/${subDirectoratesId}`,
            data: payload
        });
    }

    // deleteSubDirectorates
    public async deleteSubDirectorates(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/SubDirectorate/${id}`,
        });
    }
    // Get /StudyStatus/GetList with params {Id?:number, NameTerm?: string } 
    public async getSubDirectoratesList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/SubDirectorate/GetList',
            params
        });
    }

}

export const subDirectorService: SubDirectorService = new SubDirectorService();
