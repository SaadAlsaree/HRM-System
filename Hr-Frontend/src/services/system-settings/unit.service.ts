/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


export interface UnitPayload {
    directorateId?: number | string | null;
    subDirectorateId?: number | string | null;
    departmentId?: number | string | null;
    sectionId?: number | string | null;
    name?: string;
    shortKey?: string;
}

interface patchUnitPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

class UnitService extends ApiClient {

    public async getUnit(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Unit',
            params
        });
    }

    public async createUnit(payload: UnitPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Unit',
            data: payload
        });
    }

    public async patchUnit(payload: patchUnitPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Unit',
            data: payload
        });
    }

    public async getUnitById(UnitId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Unit/${UnitId}`,
        });
    }

    // updateUnit
    public async updateUnit(UnitId: number, payload: UnitPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Unit/${UnitId}`,
            data: payload
        });
    }

    // deleteUnit
    public async deleteUnit(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Unit/${id}`,
        });
    }

    // Get /Unit/GetList with params { Id?: number, NameTerm?: string }
    public async getUnitList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Unit/GetList',
            params
        });
    }
}

export const unitService: UnitService = new UnitService();
