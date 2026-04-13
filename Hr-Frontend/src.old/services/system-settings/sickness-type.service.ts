/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types'

interface patchSicknessTypePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class SicknessTypeService extends ApiClient {


    public async getSicknessTypes(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/SicknessType',
            params,
        })
    }

    public async createSicknessType(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/SicknessType',
            data: payload
        });
    }

    public async patchSicknessType(payload: patchSicknessTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/SicknessType',
            data: payload
        });
    }

    public async getSicknessTypeById(sicknessTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/SicknessType/${sicknessTypeId}`,
        });
    }

    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/SicknessType/uploadAttachment',
            data: payload
        });
    }

    // updateSicknessType
    public async updateSicknessType(sicknessTypeId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/SicknessType/${sicknessTypeId}`,
            data: payload
        });
    }

    public async deleteSicknessType(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/SicknessType/${id}`
        });
    }

    // Get /SicknessType/GetList
    public async getSicknessTypeList(params: { id?: number, nameTerm?: string } = {}): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/SicknessType/GetList',
            params
        });
    }
}


export const sicknessTypeService: SicknessTypeService = new SicknessTypeService();
