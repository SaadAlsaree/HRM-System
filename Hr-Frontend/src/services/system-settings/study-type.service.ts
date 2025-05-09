/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';

interface patchStudyTypePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

class StudyTypeService extends ApiClient {

    public async getStudyTypes(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyType',
            params
        });
    }

    public async createStudyType(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyType',
            data: payload
        });
    }

    public async patchStudyType(payload: patchStudyTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/StudyType',
            data: payload
        });
    }

    public async getStudyTypeById(studyTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyType/${studyTypeId}`,
        });
    }

    // updateStudyType
    public async updateStudyType(studyTypeId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/StudyType/${studyTypeId}`,
            data: payload
        });
    }

    // deleteStudyType
    public async deleteStudyType(studyTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/StudyType/${studyTypeId}`,
        });
    }

    // Get /StudyStatus/GetList with params {Id?:number, NameTerm?: string } 
    public async getStudyTypeList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyType/GetList',
            params
        });
    }
}

export const studyTypeService: StudyTypeService = new StudyTypeService();
