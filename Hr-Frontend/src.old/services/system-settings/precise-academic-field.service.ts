/* eslint-disable @typescript-eslint/no-explicit-any */
import APiClient from '@/services/axios.service';

import { IPagination, Status } from '@/types'

export interface PreciseAcademicFieldPayload {
    name: string;
}

interface patchPreciseAcademicFieldPayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}


class PreciseAcademicFieldService extends APiClient {

    public async getPreciseAcademicField(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/PreciseAcademicField',
            params
        });
    }

    public async createPreciseAcademicField(payload: PreciseAcademicFieldPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/PreciseAcademicField',
            data: payload
        });
    }

    public async patchPreciseAcademicField(payload: patchPreciseAcademicFieldPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/PreciseAcademicField',
            data: payload
        });
    }

    public async getPreciseAcademicFieldById(PreciseAcademicFieldId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/PreciseAcademicField/${PreciseAcademicFieldId}`
        });
    }

    // update PreciseAcademicField by PreciseAcademicFieldId
    public async updatePreciseAcademicField(PreciseAcademicFieldId: number, payload: PreciseAcademicFieldPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/PreciseAcademicField/${PreciseAcademicFieldId}`,
            data: payload
        });
    }

    // delete PreciseAcademicField by id
    public async deletePreciseAcademicField(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/PreciseAcademicField/${id}`
        });
    }

    // Get PreciseAcademicField/GetList by id, NameTerm
    public async getPreciseAcademicFieldList(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/PreciseAcademicField/GetList',
            params: {
                id,
                NameTerm
            }
        });
    }
}

export const preciseAcademicFieldService: PreciseAcademicFieldService = new PreciseAcademicFieldService();
