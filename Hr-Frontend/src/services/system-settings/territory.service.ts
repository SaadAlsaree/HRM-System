/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';

interface patchTerritoryPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

class TerritoryService extends ApiClient {

    public async getTerritories(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Territory',
            params
        });
    }

    public async createTerritory(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Territory',
            data: payload
        });
    }

    public async patchTerritory(payload: patchTerritoryPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Territory',
            data: payload
        });
    }

    public async getTerritoryById(territoryId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Territory/${territoryId}`,
        });
    }

    // updateTerritory
    public async updateTerritory(territoryId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Territory/${territoryId}`,
            data: payload
        });
    }

    // deleteTerritory
    public async deleteTerritory(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Territory/${id}`,
        });
    }

    //Get /Territory/GetList with params {Id?:number, NameTerm?: string }
    public async getTerritoryList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Territory/GetList',
            params
        });
    }
}

export const territoryService: TerritoryService = new TerritoryService();
