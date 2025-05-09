/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types';


export interface DocumentVerificationPayload {
    employeeId?: string;
    documentNumber?: string;
    documentDate?: string;
    recipient?: string;
    answered?: boolean;
    sendingDate?: string;
    note?: string;
    createBy?: string;
    lastUpdateBy?: string;
}

interface DocumentVerificationParams extends IPagination {
    id?: string;
    status?: Status;
}

interface patchDocumentVerificationPayload {
    id: string;
    statusId: number;
    tableName: Status;
}


class DocumentVerificationService extends ApiClient {

    public async getDocumentVerification(params: DocumentVerificationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/DocumentVerification',
            params
        });
    }

    public async createDocumentVerification(payload: DocumentVerificationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/DocumentVerification',
            data: payload
        });
    }

    public async getDocumentVerificationById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/DocumentVerification/${id}`
        });
    }

    public async updateDocumentVerification(id: string, payload: DocumentVerificationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/DocumentVerification/${id}`,
            data: payload
        });
    }

    public async patchDocumentVerification(payload: patchDocumentVerificationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/DocumentVerification',
            data: payload
        });
    }

    // deleteDocumentVerification
    public async deleteDocumentVerification(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/DocumentVerification/${id}`
        });
    }

    // Get /DocumentVerification/GetEmployeeDocVerification/{id} 
    public async getEmployeeDocVerification(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/DocumentVerification/GetEmployeeDocVerification/${id}`
        });
    }

    // Post /DocumentVerification/UploadAttachment
    public async uploadDocumentVerificationAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/DocumentVerification/UploadAttachment',
            data: payload
        });
    }

    // Get DocumentVerification/ExportFile with params {employeeId: string, status: Status}
    public async exportDocumentVerification(employeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/DocumentVerification/ExportFile',
            params: { employeeId, status }
        });
    }
}



export const documentVerificationService: DocumentVerificationService = new DocumentVerificationService();
