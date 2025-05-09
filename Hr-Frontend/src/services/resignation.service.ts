/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';
import { Status } from '@/types/enums';


export interface ResignationPayload {
    employeeId?: string;
    reason?: string;
    requestDate?: string;
    requestNo?: string;
    resignationOrderNo?: string;
    resignationOrderDate?: string;
    separationOrderNo?: string;
    separationOrderDate?: string;
    note?: string;
}

interface ResignationParams extends IPagination {
    employeeId?: string;
    status?: Status;
    NameTerm?: string;
}

interface patchResignationPayload {
    id: string | number | null;
    statusId: number | null | string;
    tableName?: Status;
}

class ResignationService extends ApiClient {

    public async getResignations(params: ResignationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Resignation',
            params
        });
    }

    public async createResignation(payload: ResignationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Resignation',
            data: payload
        });
    }

    public async updateResignation(resignationId: string, payload: ResignationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Resignation/${resignationId}`,
            data: payload
        });
    }

    public async patchResignation(payload: patchResignationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Resignation',
            data: payload
        });
    }

    public async deleteResignation(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Resignation/${id}`
        });
    }

    public async uploadResignationAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Resignation/UploadAttachment',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // Get /Resignation/ExportFile with params { employeeId: string }
    public async exportResignation(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Resignation/ExportFile',
            params: { employeeId }
        });
    }

}

export const resignationService: ResignationService = new ResignationService();
