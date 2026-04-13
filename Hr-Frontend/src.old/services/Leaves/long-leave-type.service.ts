/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'

interface LongLeaveTypePayload {
    name: string;
}

interface patchLongLeaveTypePayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}

class LongLeaveTypeService extends ApiClient {


    public async getLongLeaveType(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/LongLeaveType',
            params
        });
    }

    public async createLongLeaveType(payload: LongLeaveTypePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/LongLeaveType',
            data: payload
        });
    }

    public async patchLongLeaveType(payload: patchLongLeaveTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/LongLeaveType',
            data: payload
        });
    }

    public async getLongLeaveTypeById(LongLeaveTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/LongLeaveType/${LongLeaveTypeId}`
        });
    }

    // update LongLeaveType by LongLeaveTypeId
    public async updateLongLeaveType(LongLeaveTypeId: number, payload: LongLeaveTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/LongLeaveType/${LongLeaveTypeId}`,
            data: payload
        });
    }
}

export const longLeaveTypeService: LongLeaveTypeService = new LongLeaveTypeService();
