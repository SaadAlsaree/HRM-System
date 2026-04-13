/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '../base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { Status, TableNames } from '@/types/enums';
import { IPagination } from '@/types';
import { UploadAttachmentPayload } from '@/types';

interface patchEducationInfo {
    id: string,
    statusId: number,
    tableName: TableNames
}

export interface EducationInfoPayload {
    employeeId: string;
    originalDocument: string;
    documentNo: string;
    documentDate: string;
    documentSender: string;
    documentSendDate: string;
    academicAchievementId: number;
    academicFieldId: number;
    preciseAcademicFieldId: number;
    nameOfIssuingCertificate: string;
    startDate: string;
    endDate: string;
    graduationYear: string;
    isDuringRecruitment: boolean;
    isDocumentVerify: boolean;
    countryId: number;
    studyTypeId: number;
    notes: string;
    isInHiring: boolean;
}


interface EducationInfoParams extends IPagination {
    EmployeeId?: string;
    TypeOfJobId?: number;
    status?: Status;
}

class EducationInfoService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }

    public async getEducationInfo(params: EducationInfoParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EducationInformation',
            params
        });
    }

    // create education info service
    public async createEducationInfo(payload: EducationInfoPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EducationInformation',
            data: payload
        });
    }

    // patch education info service
    public async patchEducationInfo(payload: patchEducationInfo): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/EducationInformation',
            data: payload
        });
    }

    // get education info by educationInfoId
    public async getEducationInfoById(educationInfoId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EducationInformation/${educationInfoId}`
        });
    }

    // update education info service by educationInfoId
    public async updateEducationInfo(educationInfoId: string, notes?: string, status?: Status): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EducationInformation/${educationInfoId}`,
            data: { notes, status }
        });
    }


    // post EducationInformation UploadAttachment
    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EducationInformation/UploadAttachment',
            data: payload
        });
    }

    // delete education info service by id
    public async deleteEducationInfoById(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/EducationInformation/${id}`
        });
    }

    // export education info service
    public async exportEducationInfo(EmployeeId?: string, status?: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EducationInformation/ExportFile',
            params: {
                EmployeeId,
                status
            }
        });
    }


}

export const educationInfoServiceClient: EducationInfoService = new EducationInfoService(false);
export const educationInfoServiceServer: EducationInfoService = new EducationInfoService(true);
