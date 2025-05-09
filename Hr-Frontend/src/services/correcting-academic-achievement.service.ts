/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface CorrectingAcademicAchievementPayload {
    id?: string;
    employeeId?: string;
    degreeFromId?: number;
    degreeToId?: number;
    jobCategoryFromId?: number;
    jobCategoryToId?: number;
    jobTitleFromId?: number;
    jobDescriptionFromId?: number;
    jobTitleToId?: number;
    jobDescriptionToId?: number;
    dueDateDegree?: string;
    dueDateCategory?: string;
    isCertificateCalculation?: boolean;
    bookNo?: string;
    bookDate?: string;
    note?: string;
    createBy?: string;
    lastUpdateBy?: string;
}

interface CorrectingAcademicAchievementParams extends IPagination {
    employeeId?: string;
    status?: Status;
    IsCertificateCalculationTerm?: boolean;
}

interface patchCorrectingAcademicAchievementPayload {
    id: string;
    statusId: number;
    tableName: Status;
}


class CorrectingAcademicAchievementService extends ApiClient {

    public async getCorrectingAcademicAchievement(params: CorrectingAcademicAchievementParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/CorrectingAcademicAchievement',
            params
        });
    }

    public async createCorrectingAcademicAchievement(payload: CorrectingAcademicAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/CorrectingAcademicAchievement',
            data: payload
        });
    }

    public async getCorrectingAcademicAchievementById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/CorrectingAcademicAchievement/${id}`
        });
    }

    public async patchCorrectingAcademicAchievement(payload: patchCorrectingAcademicAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/CorrectingAcademicAchievement',
            data: payload
        });
    }

    // update CorrectingAcademicAchievement
    public async updateCorrectingAcademicAchievement(id: string, payload: CorrectingAcademicAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/CorrectingAcademicAchievement/${id}`,
            data: payload
        });
    }

    // delete CorrectingAcademicAchievement/{id}
    public async deleteCorrectingAcademicAchievement(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/CorrectingAcademicAchievement/${id}`
        });

    }

    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/CorrectingAcademicAchievement/uploadAttachment',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: payload
        });
    }

    // Get /CorrectingAcademicAchievement/ExportFile with params {employeeId: string, status: Status, IsCertificateCalculationTerm: boolean}
    public async exportCorrectingAcademicAchievement(employeeId: string, status: Status, IsCertificateCalculationTerm: boolean): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/CorrectingAcademicAchievement/ExportFile',
            params: { employeeId, status, IsCertificateCalculationTerm }
        });
    }
}

export const correctingAcademicAchievementService: CorrectingAcademicAchievementService = new CorrectingAcademicAchievementService();