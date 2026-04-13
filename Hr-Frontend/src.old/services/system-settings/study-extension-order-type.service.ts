/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types'


interface patchStudyExtensionOrderTypePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

class StudyExtensionOrderTypeService extends ApiClient {

    public async getStudyExtensionOrderTypes(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyExtensionOrderType',
            params,
        })
    }

    public async createStudyExtensionOrderType(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/StudyExtensionOrderType',
            data: payload
        });
    }

    public async patchStudyExtensionOrderType(payload: patchStudyExtensionOrderTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/StudyExtensionOrderType',
            data: payload
        });
    }

    public async getStudyExtensionOrderTypeById(studyExtensionOrderTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/StudyExtensionOrderType/${studyExtensionOrderTypeId}`,
        });
    }

    // update StudyExtensionOrderType
    public async updateStudyExtensionOrderType(studyExtensionOrderTypeId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/StudyExtensionOrderType/${studyExtensionOrderTypeId}`,
            data: payload
        });
    }

    // deleteStudyExtensionOrderType
    public async deleteStudyExtensionOrderType(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/StudyExtensionOrderType/${id}`,
        });
    }

    // Get /StudyExtensionOrderType/GetList
    public async getStudyExtensionOrderTypeList(params: { id?: number, nameTerm?: string } = {}): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/StudyExtensionOrderType/GetList',
            params,
        })
    }


}

export const studyExtensionOrderTypeService: StudyExtensionOrderTypeService = new StudyExtensionOrderTypeService();
