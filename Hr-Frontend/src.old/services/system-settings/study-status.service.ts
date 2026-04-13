/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';

interface patchSicknessTypePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class StudyStatusService extends ApiClient {


    public async getStudyStatuses(params: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyStatus',
            params
        });
    }

    public async createStudyStatus(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyStatus',
            data: payload
        });
    }

    public async patchStudyStatus(payload: patchSicknessTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/StudyStatus',
            data: payload
        });
    }

    public async getStudyStatusById(studyStatusId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyStatus/${studyStatusId}`,
        });
    }

    // updateStudyStatus
    public async updateStudyStatus(studyStatusId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/StudyStatus/${studyStatusId}`,
            data: payload
        });
    }

    // deleteStudyStatus
    public async deleteStudyStatus(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/StudyStatus/${id}`,
        });
    }

    // Get /StudyStatus/GetList with params {Id?:number, NameTerm?: string } 
    public async getStudyStatusList(Id?: number, NameTerm?: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyStatus/GetList',
            params: { Id, NameTerm }
        });
    }

}

export const studyStatusService: StudyStatusService = new StudyStatusService();