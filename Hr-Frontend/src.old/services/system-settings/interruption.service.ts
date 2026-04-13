/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status, TableNames } from '@/types/enums';
import { IPagination } from '@/types'

export interface InterruptionParams extends IPagination {
    id?: string;
    employeeId?: string;
    nameTerm?: string;
    status?: Status;
}

export interface CreateInterruptionPayload {
    id?: string;
    employeeId?: string;
    notificationDate?: string;
    reason?: string;
    note?: string;
    status?: Status;
    createBy?: string;
    lastUpdateBy?: string;
}

export interface patchInterruptionPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: TableNames;
}

class InterruptionService extends ApiClient {

    public async getInterruption(params: InterruptionParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Interruption',
            params
        });
    }

    public async createInterruption(payload: CreateInterruptionPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Interruption',
            data: payload
        });
    }

    public async patchInterruption(payload: patchInterruptionPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Interruption',
            data: payload
        });
    }

    public async getInterruptionById(id: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Interruption/${id}`,
            params: { status }
        });
    }

    public async updateInterruption(id: string, payload: CreateInterruptionPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Interruption/${id}`,
            data: payload
        });
    }

    // delete Interruption by id
    public async deleteInterruption(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Interruption/${id}`
        });
    }

    // upload attachment
    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Interruption/UploadAttachment',
            data: payload
        });
    }

    // ExportFile service
    public async exportFile(employeeId?: string, status?: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Interruption/ExportFile',
            params: { employeeId, status }
        });
    }
}

export const interruptionService: InterruptionService = new InterruptionService();
