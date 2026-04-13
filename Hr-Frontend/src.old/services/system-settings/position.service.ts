/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination, UploadAttachmentPayload } from '@/types';
import { Status } from '@/types/enums';

export interface PositionPayload {
    name: string;
}

interface patchPositionPayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}


class PositionService extends ApiClient {

    public async getPositions(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Position',
            params
        });
    }

    public async createPosition(payload: PositionPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Position',
            data: payload
        });
    }

    public async updatePosition(PositionId: number, payload: PositionPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Position/${PositionId}`,
            data: payload
        });
    }

    public async deletePosition(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Position/${id}`
        });
    }

    public async patchPosition(payload: patchPositionPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Position',
            data: payload
        });
    }

    // get position by id
    public async getPositionById(PositionId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Position/${PositionId}`
        });
    }

    // Get /Position/GetList with params {id: string, NameTerm: string}
    public async getPositionsList(id?: string, NameTerm?: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Position/GetList',
            params: { id, NameTerm }
        });
    }

    // Post /Position/UploadAttachment
    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Position/UploadAttachment',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

}

export const positionService: PositionService = new PositionService();
