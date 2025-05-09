/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfAssignmentPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class TypeOfAssignmentService extends ApiClient {


    public async getTypeOfAssignments(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfAssignment',
            params
        });
    }

    public async createTypeOfAssignment(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfAssignment',
            data: payload
        });
    }

    public async patchTypeOfAssignment(payload: patchTypeOfAssignmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfAssignment',
            data: payload
        });
    }

    public async getTypeOfAssignmentById(typeOfAssignmentId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfAssignment/${typeOfAssignmentId}`,
        });
    }

    // updateTypeOfAssignment
    public async updateTypeOfAssignment(typeOfAssignmentId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfAssignment/${typeOfAssignmentId}`,
            data: payload
        });
    }

    // deleteTypeOfAssignment
    public async deleteTypeOfAssignment(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfAssignment/${id}`,
        });
    }

    //Get /TypeOfAssignment/GetList with params {Id?:number, NameTerm?: string }
    public async getTypeOfAssignmentList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfAssignment/GetList',
            params
        });
    }
}

export const typeOfAssignmentService: TypeOfAssignmentService = new TypeOfAssignmentService();
