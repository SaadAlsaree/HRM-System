/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfLeavePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class TypeOfLeaveService extends ApiClient {

    public async getTypeOfLeave(params: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfLeave',
            params
        });
    }

    public async createTypeOfLeave(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfLeave',
            data: payload
        });
    }

    public async patchTypeOfLeave(payload: patchTypeOfLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfLeave',
            data: payload
        });
    }

    public async getTypeOfLeaveById(TypeOfLeaveId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfLeave/${TypeOfLeaveId}`,
        });
    }

    // updateTypeOfLeave
    public async updateTypeOfLeave(TypeOfLeaveId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfLeave/${TypeOfLeaveId}`,
            data: payload
        });
    }

    // deleteTypeOfLeave
    public async deleteTypeOfLeave(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfLeave/${id}`,
        });
    }

    //Get /TypeOfLeave/GetList with params {Id?:number, NameTerm?: string }
    public async getTypeOfLeaveList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfLeave/GetList',
            params
        });
    }

}

export const typeOfLeaveService: TypeOfLeaveService = new TypeOfLeaveService();
