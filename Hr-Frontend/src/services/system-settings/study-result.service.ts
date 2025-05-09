
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchSicknessTypePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class StudyResultService extends ApiClient {

    public async getStudyResults(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyResult',
            params
        });
    }

    public async createStudyResult(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyResult',
            data: payload
        });
    }

    public async patchStudyResult(payload: patchSicknessTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/StudyResult',
            data: payload
        });
    }

    public async getStudyResultById(studyResultId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyResult/${studyResultId}`,
        });
    }

    // updateStudyResult
    public async updateStudyResult(studyResultId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/StudyResult/${studyResultId}`,
            data: payload
        });
    }

    public async deleteStudyResult(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/StudyResult/${id}`,
        });
    }

    //Get /StudyResult/GetList
    public async getStudyResultList(Id?: number, NameTerm?: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyResult/GetList',
            params: { Id, NameTerm }
        });
    }
}

export const studyResultService: StudyResultService = new StudyResultService();