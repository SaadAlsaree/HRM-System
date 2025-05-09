/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status } from '@/types/enums';
import { IPagination } from '@/types'




export interface IAcademicAchievementParams extends IPagination {
    Id?: number;
    NameTerm?: string;
    Status?: Status;
}

export interface CreateAchievementPayload {
    name: string;
    jobDegreeId?: number | string | null;
}

export interface patchAchievementPayload {
    id: number | string | null,
    statusId: number | string | null,
    // tableName: TableNames
}

class AcademicAchievementService extends ApiClient {


    public async getAcademicAchievements(params?: IAcademicAchievementParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AcademicAchievement',
            params,
        })
    }

    public async createAcademicAchievement(payload: CreateAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/AcademicAchievement',
            data: payload
        });
    }

    public async patchAcademicAchievement(payload: patchAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/AcademicAchievement',
            data: payload
        });
    }

    public async getAcademicAchievementById(academicAchievementId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/AcademicAchievement/${academicAchievementId}`,
        });
    }

    public async putAcademicAchievementById(academicAchievementId: number, payload: CreateAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/AcademicAchievement/${academicAchievementId}`,
            data: payload
        });
    }

    public async deleteAcademicAchievementById(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/AcademicAchievement/${id}`,
        });
    }

    public async getAcademicAchievementList(params: { id?: number, nameTerm?: string } = {}): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AcademicAchievement/GetList',
            params
        });
    }


}

export const academicAchievementService: AcademicAchievementService = new AcademicAchievementService();
