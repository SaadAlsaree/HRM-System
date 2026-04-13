/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status, TableNames } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types';


export interface StudyLeavePayload {
    employeeId?: string;
    studyFileId?: string;
    academicCertificateTypeId?: number;
    academicAchievementId?: number;
    academicFieldId?: number;
    studyPeriodTime?: number;
    acceptanceYear?: string;
    nameOfIssuingCertificate?: string;
    financialInsuranceNo?: string;
    financialInsuranceDate?: string;
    releaseOrderDate?: string;
    releaseOrderNo?: string;
    releaseDate?: string;
    hireOrderNo?: string;
    hireOrderDate?: string;
    hireDate?: string;
    countryId?: number;
    studyStatusId?: number;
    studyResultId?: number;
    notes?: string;
}

interface patchStudyLeavePayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: TableNames;
}


interface StudyLeaveParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

class StudyLeaveService extends ApiClient {

    public async getStudyLeaves(params: StudyLeaveParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyLeave',
            params,
        });
    }

    public async createStudyLeave(payload: StudyLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyLeave',
            data: payload
        });
    }

    public async patchStudyLeave(payload: patchStudyLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/StudyLeave',
            data: payload
        });
    }

    public async getStudyLeaveById(studyLeaveId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyLeave/${studyLeaveId}`,
        });
    }

    //Get /StudyLeave/Statistics
    public async getStudyLeaveStatistics(): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyLeave/Statistics',
        });
    }

    //Get /StudyLeave/Notifications
    public async getStudyLeaveNotifications(): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyLeave/Notifications',
        });
    }

    //update StudyLeave
    public async updateStudyLeave(studyLeaveId: string, payload: StudyLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/StudyLeave/${studyLeaveId}`,
            data: payload
        });
    }

    // deleteStudyLeave
    public async deleteStudyLeave(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/StudyLeave/${id}`,
        });
    }

    // Post /StudyLeave/UploadAttachment
    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyLeave/uploadAttachment',
            data: payload
        });
    }

    // Get /StudyLeave/ExportFile
    public async exportFile(params: { EmployeeId?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyLeave/ExportFile',
            params,
        });
    }
}

export const studyLeaveService: StudyLeaveService = new StudyLeaveService();

