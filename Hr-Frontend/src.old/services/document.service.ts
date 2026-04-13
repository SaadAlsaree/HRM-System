/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface DocumentPayload {
    employeeId?: string;
    employeeDocumentTypeId?: number;
    documentAttributes?: { key: string; value: string }[];
    notes?: string;
}

interface DocumentParams extends IPagination {
    employeeId?: string;
    status?: Status;
    id?: string;
    NameTerm?: string;
}

interface patchDocumentPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: Status;
}


class DocumentService extends ApiClient {

    public async getDocument(params: DocumentParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Document',
            params
        });
    }

    public async createDocument(payload: DocumentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Document',
            data: payload
        });
    }

    public async getDocumentById(DocumentId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Document/${DocumentId}`
        });
    }

    // put updateDocument 
    public async updateDocument(DocumentId: string, payload: DocumentPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: `/Document/${DocumentId}`,
            data: payload
        });
    }

    public async patchDocument(payload: patchDocumentPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Document',
            data: payload
        });
    }

    public async uploadDocumentAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Document/UploadAttachment',
            data: payload
        });
    }


}


export const documentService: DocumentService = new DocumentService();
