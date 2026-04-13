
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status, TableNames } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types';

export interface StudyLeaveExtensionPayload {
    employeeId?: string;
    studyExtensionOrderTypeId?: number;
    studyFileId?: string;
    orderNo?: string;
    countOfDay?: number;
    orderDate?: string;
    fromDate?: string;
    toDate?: string;
    notes?: string;
}

interface patchStudyLeaveExtensionPayload {
    id: string;
    statusId: number;
    tableName: TableNames;
}

interface StudyLeaveExtensionParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

class StudyLeaveExtensionService extends ApiClient {


    public async getStudyLeaveExtensions(params: StudyLeaveExtensionParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyLeaveExtension',
            params,
        });
    }

    public async createStudyLeaveExtension(payload: StudyLeaveExtensionPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyLeaveExtension',
            data: payload
        });
    }

    public async patchStudyLeaveExtension(payload: patchStudyLeaveExtensionPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/StudyLeaveExtension',
            data: payload
        });
    }

    public async getStudyLeaveExtensionById(studyLeaveExtensionId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyLeaveExtension/${studyLeaveExtensionId}`,
        });
    }

    //Get /StudyLeaveExtension/GetStudyLeaveByFileId/{StudyLeaveExtensionId}
    public async getStudyLeaveByFileId(studyLeaveExtensionId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyLeaveExtension/GetStudyLeaveByFileId/${studyLeaveExtensionId}`,
        });
    }

    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyLeaveExtension/uploadAttachment',
            data: payload
        });
    }

    public async updateStudyLeaveExtension(studyLeaveExtensionId: string, payload: StudyLeaveExtensionPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/StudyLeaveExtension/${studyLeaveExtensionId}`,
            data: payload
        });
    }

    // deleteStudyLeaveExtension
    public async deleteStudyLeaveExtension(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/StudyLeaveExtension/${id}`
        });
    }

    // Get /StudyLeaveExtension/ExportFile
    public async exportFile(params: { EmployeeId?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyLeaveExtension/ExportFile',
            params,
        });
    }
}


export const studyLeaveExtensionService: StudyLeaveExtensionService = new StudyLeaveExtensionService();
