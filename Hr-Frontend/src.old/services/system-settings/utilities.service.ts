/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '@/services/base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfService {
    id: number,
    statusId: number,
    tableName: TableNames
}

class UtilitiesService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }

    public async getUtilities(params: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Utilities/GetAcademicAchievement',
            params
        });
    }

    public async createUtilities(payload: { name: string, jobDegreeId: number }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Utilities/CreateAcademicAchievement',
            data: payload
        });
    }

    public async patchUtilities(payload: patchTypeOfService): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Utilities/ChangeStatus',
            data: payload
        });
    }

    // updateUtilities
    public async updateUtilities(payload: { name: string, jobDegreeId: number }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: '/Utilities/UpdateAcademicAchievement',
            data: payload
        });
    }

    // delete Utilities
    public async deleteUtilities(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Utilities/ChangeStatus/${id}`,
        });
    }

}

export const utilitiesServiceClient: UtilitiesService = new UtilitiesService();
export const utilitiesServiceServer: UtilitiesService = new UtilitiesService(true);