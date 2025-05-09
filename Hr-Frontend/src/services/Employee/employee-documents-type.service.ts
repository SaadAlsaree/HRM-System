/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';


export interface EmployeeDocumentsTypePayload {
    name: string;
}

export interface patchEmployeeDocumentsTypePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: number
}

class EmployeeDocumentsTypeService extends ApiClient {

    public async getEmployeeDocumentsType(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeDocumentsType',
            params,
        });
    }

    public async createEmployeeDocumentsType(payload: EmployeeDocumentsTypePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeDocumentsType',
            data: payload
        });
    }

    public async patchEmployeeDocumentsType(payload: patchEmployeeDocumentsTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/EmployeeDocumentsType',
            data: payload
        });
    }

    // update EmployeeDocumentsType service by EmployeeDocumentsTypeId
    public async updateEmployeeDocumentsTypeById(EmployeeDocumentsTypeId: number, payload: EmployeeDocumentsTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EmployeeDocumentsType/${EmployeeDocumentsTypeId}`,
            data: payload
        });
    }

    // get EmployeeDocumentsType service by EmployeeDocumentsTypeId
    public async getEmployeeDocumentsTypeById(EmployeeDocumentsTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeDocumentsType/${EmployeeDocumentsTypeId}`,
        });
    }

    public async deleteEmployeeDocumentsType(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/EmployeeDocumentsType/${id}`,
        });
    }

    // GetList of EmployeeDocumentsType by (id, NameTerm)
    public async getEmployeeDocumentsTypeList(id?: string, NameTerm?: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeDocumentsType',
            params: { id, NameTerm }
        });
    }



}

export const employeeDocumentsTypeService: EmployeeDocumentsTypeService = new EmployeeDocumentsTypeService();
