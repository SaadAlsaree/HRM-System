/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types';

export interface EducationInfoPayload {
    employeeId?: string;
    originalDocument?: string;
    documentNo?: string;
    documentDate?: string;
    documentSender?: string;
    documentSendDate?: string;
    academicAchievementId?: number;
    academicFieldId?: number;
    preciseAcademicFieldId?: number;
    nameOfIssuingCertificate?: string;
    startDate?: string;
    endDate?: string;
    graduationYear?: string;
    isDuringRecruitment?: boolean;
    isDocumentVerify?: boolean;
    countryId?: number;
    studyTypeId?: number;
    notes?: string;
    isInHiring?: boolean;
}

export interface UpdateEducationInfoPayload {
    notes?: string;
    status?: Status;
}

interface EducationInfoParams extends IPagination {
    employeeId?: string;
    status?: Status;
    NameTerm?: string;
}

interface patchEducationInfoPayload {
    id: string;
    statusId: number;
    tableName: Status;
}


class EducationInfoService extends ApiClient {

    public async getEducationInfo(params: EducationInfoParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EducationInformation',
            params
        });
    }

    public async createEducationInfo(payload: EducationInfoPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EducationInformation',
            data: payload
        });
    }

    public async getEducationInfoById(EducationInfoId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EducationInformation/${EducationInfoId}`
        });
    }

    // put updateEducationInfo 
    public async updateEducationInfo(EducationInfoId: string, payload: UpdateEducationInfoPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EducationInformation/${EducationInfoId}`,
            data: payload
        });
    }

    public async patchEducationInfo(payload: patchEducationInfoPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/EducationInformation',
            data: payload
        });
    }

    // delete EducationInformation/{id}
    public async deleteEducationInfo(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/EducationInformation/${id}`
        });
    }

    public async uploadEducationInfoAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EducationInformation/UploadAttachment',
            data: payload
        });
    }

    // Get /EducationInformation/ExportFile with params {employeeId: string, status: Status}
    public async exportEducationInfo(employeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EducationInformation/ExportFile',
            params: { employeeId, status }
        });
    }
}



export const educationInfoService: EducationInfoService = new EducationInfoService();
