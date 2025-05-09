/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types';


export interface ThanksSeniorityPayload {
    employeeId?: string[];
    createType?: number;
    directorateId?: number;
    subDirectorateId?: number;
    typeOfBook?: number;
    typeOfSeniority?: number;
    bookNo?: string;
    dateOfBook?: string;
    bookIssueName?: string;
    reason?: string;
    countOfMonths?: number;
    isDocumentVerify?: boolean;
    calculationDate?: string;
    note?: string;
}

interface patchThanksSeniorityPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: TableNames;
}

interface ThanksSeniorityParams extends IPagination {
    employeeId?: string;
    status?: number;
}

class ThanksSeniorityService extends ApiClient {
    public async getThanksSeniorities(params: ThanksSeniorityParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ThanksSeniority',
            params,
        });
    }

    public async createThanksSeniority(payload: ThanksSeniorityPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ThanksAndSeniority',
            data: payload
        });
    }

    public async patchThanksSeniority(payload: patchThanksSeniorityPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/ThanksAndSeniority',
            data: payload
        });
    }

    public async getThanksSeniorityById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ThanksAndSeniority/${id}`,
        });
    }

    public async updateThanksSeniority(id: string, payload: ThanksSeniorityPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/ThanksAndSeniority/${id}`,
            data: payload
        });
    }

    public async deleteThanksSeniority(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/ThanksAndSeniority/${id}`,
        });
    }

    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ThanksAndSeniority/UploadAttachment',
            data: payload
        });
    }

    // Get /ThanksAndSeniority/ExportFile with params {EmployeeId?:string}
    public async exportFile(params: { EmployeeId?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ThanksAndSeniority/ExportFile',
            params
        });
    }
}

export const thanksSeniorityService: ThanksSeniorityService = new ThanksSeniorityService();
