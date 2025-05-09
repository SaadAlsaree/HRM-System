
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface ChangeJobTitlesPayload {
    id?: string;
    employeeId?: string;
    newJobTitleId?: number;
    newJobDescriptionId?: number;
    oldJobTitleId?: number;
    oldJobDescriptionId?: number;
    orderNo?: string;
    orderDate?: string;
    note?: string;
    createBy?: string;
    lastUpdateBy?: string;
}

interface ChangeJobTitlesParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

interface patchChangeJobTitlesPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: Status;
}


class ChangeJobTitlesService extends ApiClient {


    public async getChangeJobTitles(params: ChangeJobTitlesParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ChangeJobTitles',
            params
        });
    }

    public async createChangeJobTitles(payload: ChangeJobTitlesPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ChangeJobTitles',
            data: payload
        });
    }

    public async getChangeJobTitlesById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ChangeJobTitles/${id}`
        });
    }

    public async updateChangeJobTitles(id: string, payload: ChangeJobTitlesPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/ChangeJobTitles/${id}`,
            data: payload
        });
    }

    public async patchChangeJobTitles(payload: patchChangeJobTitlesPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: `/ChangeJobTitles`,
            data: payload
        });
    }
    // delete ChangeJobTitles/{id}
    public async deleteChangeJobTitles(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/ChangeJobTitles/${id}`
        });
    }


    public async uploadChangeJobTitlesAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ChangeJobTitles/UploadAttachment',
            data: payload
        });
    }

    //Get  /ChangeJobTitles/ExportFile with params {employeeId: string, status: Status}
    public async exportChangeJobTitles(employeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ChangeJobTitles/ExportFile',
            params: { employeeId, status }
        });
    }
}


export const changeJobTitlesService: ChangeJobTitlesService = new ChangeJobTitlesService();
