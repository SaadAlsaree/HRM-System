/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'


export interface LawPayload {
    name: string;
}

interface patchLawPayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}

class LawService extends ApiClient {


    public async getLaw(params: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Law',
            params
        });
    }

    public async createLaw(payload: LawPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Law',
            data: payload
        });
    }

    public async patchLaw(payload: patchLawPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Law',
            data: payload
        });
    }

    public async getLawById(LawId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Law/${LawId}`
        });
    }

    // update Law by LawId
    public async updateLaw(LawId: number, payload: LawPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Law/${LawId}`,
            data: payload
        });
    }

    // delete Law by id
    public async deleteLaw(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Law/${id}`
        });
    }

    // GetList Law by id, NameTerm
    public async getLawByTerm(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Law/GetList`,
            params: { id, NameTerm }
        });
    }
}

export const lawService: LawService = new LawService();
