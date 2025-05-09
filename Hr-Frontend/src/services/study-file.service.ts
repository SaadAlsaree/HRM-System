/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status, TableNames } from '@/types/enums';
import { IPagination } from '@/types'

export interface StudyFilePayload {
    employeeId?: string;
    documentNo?: string;
    documentDate?: string;
    notes?: string;
}

interface patchSicknessTypePayload {
    id: string | number | null,
    statusId?: number | string | null,
    tableName?: TableNames
}

interface StudyFileParams extends IPagination {
    employeeId?: string;
    DocumentNo?: string;
    DocumentDateFrom?: string;
    DocumentDateTo?: string;
    status?: Status;
}

class StudyFileService extends ApiClient {

    public async getStudyFiles(params: StudyFileParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyFile',
            params,
        })
    }

    public async createStudyFile(payload: StudyFilePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyFile',
            data: payload
        });
    }

    public async patchStudyFile(payload: patchSicknessTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/StudyFile',
            data: payload
        });
    }

    public async getStudyFileById(studyFileId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyFile/${studyFileId}`,
        });
    }

    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyFile/uploadAttachment',
            data: payload
        });
    }

    public async updateStudyFile(studyFileId: string, payload: StudyFilePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/StudyFile/${studyFileId}`,
            data: payload
        });
    }

    public async deleteStudyFile(studyFileId: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/StudyFile/${studyFileId}`,
        });
    }

    // Get /StudyFile/ExportFile
    public async exportFile(params: { EmployeeId?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyFile/ExportFile',
            params,
        })
    }
}


export const studyFileService: StudyFileService = new StudyFileService();
