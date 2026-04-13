/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status, TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchDepartment {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

export interface DepartmentPayload {
    directorateId?: number | string | null;
    subDirectorateId?: number | string | null;
    name: string;
    shortKey: string;
    status?: Status;
}


class DepartmentService extends ApiClient {

    public async getDepartments(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Department',
            params
        });
    }

    // create department service
    public async createDepartment(payload: DepartmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Department',
            data: payload
        });
    }

    // patch department service
    public async patchDepartment(payload: patchDepartment): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Department',
            data: payload
        });
    }

    // get department by departmentId
    public async getDepartmentById(departmentId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Department/${departmentId}`
        });
    }

    // update department service by departmentId
    public async updateDepartment(departmentId: number, payload: DepartmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Department/${departmentId}`,
            data: payload
        });
    }

    // delete department by id
    public async deleteDepartment(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Department/${id}`
        });
    }

    // get directorateList by id nameTerm
    public async getDirectorateList(id: number, nameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Department/GetList',
            params: { id, nameTerm }
        });
    }
}

export const departmentService: DepartmentService = new DepartmentService();
