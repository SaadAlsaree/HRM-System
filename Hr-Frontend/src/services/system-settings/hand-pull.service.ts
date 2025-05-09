/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status, TableNames } from '@/types/enums';
import { IPagination } from '@/types'


interface patchHandPull {
    id?: string | number | null,
    statusId?: number | string | null,
    tableName?: TableNames
}

export interface HandPullPayload {
    id?: string;
    employeeId?: string;
    withdrawHandPullOrderNo?: string;
    withdrawHandPullOrderDate?: string;
    raiseHandPullOrderNo?: string;
    raiseHandPullOrderDate?: string;
    note?: string;
}

interface HandPullParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

class HandPullService extends ApiClient {

    public async getHandPull(params: HandPullParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/HandPull',
            params
        });
    }

    public async createHandPull(payload: HandPullPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/HandPull',
            data: payload
        });
    }

    public async patchHandPull(payload: patchHandPull): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/HandPull',
            data: payload
        });
    }

    public async getHandPullById(id: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/HandPull/${id}`,
            params: { status }
        });
    }

    public async updateHandPull(id: string, payload: HandPullPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: `/HandPull/${id}`,
            data: payload
        });
    }

    // delete HandPull by id
    public async deleteHandPull(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/HandPull/${id}`
        });
    }

    // upload attachment
    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/HandPull/UploadAttachment',
            data: payload
        });
    }

    // ExportFile service
    public async exportFile(EmployeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/HandPull/ExportFile',
            params: { EmployeeId, status }
        });
    }
}


export const handPullService: HandPullService = new HandPullService();
