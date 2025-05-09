/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'


export interface NormalLeaveTypePayload {
    name: string;
}

interface patchNormalLeaveTypePayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}

class NormalLeaveTypeService extends ApiClient {


    public async getNormalLeaveType(params: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/NormalLeaveType',
            params
        });
    }

    public async createNormalLeaveType(payload: NormalLeaveTypePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/NormalLeaveType',
            data: payload
        });
    }

    public async patchNormalLeaveType(payload: patchNormalLeaveTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/NormalLeaveType',
            data: payload
        });
    }

    public async getNormalLeaveTypeById(NormalLeaveTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/NormalLeaveType/${NormalLeaveTypeId}`
        });
    }

    // update NormalLeaveType by NormalLeaveTypeId
    public async updateNormalLeaveType(NormalLeaveTypeId: number, payload: NormalLeaveTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/NormalLeaveType/${NormalLeaveTypeId}`,
            data: payload
        });
    }

    // delete NormalLeaveType by id
    public async deleteNormalLeaveType(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/NormalLeaveType/${id}`
        });
    }

    public async getNormalLeaveTypeList(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/NormalLeaveType/GetList',
            params: {
                id,
                NameTerm
            }
        });
    }
}

export const normalLeaveTypeService: NormalLeaveTypeService = new NormalLeaveTypeService();
