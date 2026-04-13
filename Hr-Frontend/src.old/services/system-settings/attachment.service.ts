/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status, TableNames } from '@/types/enums';


export interface attachmentParams {
    employeeId?: string | null;
    PrimaryTableId?: string | null;
    status?: Status
}
interface patchAssignment {
    id: string,
    statusId: number,
    tableName: TableNames
}

interface updateAttachmentPayload {
    id: string;
    tableName: TableNames;
    notes: string;
    lastUpdateBy: string;
}

class AttachmentService extends ApiClient {

    public async getAttachments(params: attachmentParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Attachment',
            params
        })
    }

    // patch attachment service
    public async patchAttachment(payload: patchAssignment): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Attachment',
            data: payload
        })
    }

    // get attachment by attachmentId, employeeId
    public async getAttachmentById(attachmentId: string, employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Attachment/${attachmentId}/${employeeId}`
        })
    }

    // update attachment service by attachmentId
    public async updateAttachment(attachmentId: string, payload: updateAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Attachment/${attachmentId}`,
            data: payload
        })
    }
    // delete attachment service by id
    public async deleteAttachmentById(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Attachment/${id}`
        })
    }
}



export const attachmentService: AttachmentService = new AttachmentService();


