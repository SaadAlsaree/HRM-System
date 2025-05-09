/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfSeniorityPayload {
    id: number,
    statusId: number,
    tableName: TableNames
}


class TypeOfSeniorityService extends ApiClient {

    public async getTypeOfSeniority(params: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfSeniority',
            params
        });
    }

    public async createTypeOfSeniority(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfSeniority',
            data: payload
        });
    }

    public async patchTypeOfSeniority(payload: patchTypeOfSeniorityPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfSeniority',
            data: payload
        });
    }

    public async getTypeOfSeniorityById(TypeOfSeniorityId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfSeniority/${TypeOfSeniorityId}`,
        });
    }

    // updateTypeOfSeniority
    public async updateTypeOfSeniority(TypeOfSeniorityId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfSeniority/${TypeOfSeniorityId}`,
            data: payload
        });
    }

    // deleteTypeOfSeniority
    public async deleteTypeOfSeniority(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfSeniority/${id}`,
        });
    }

    //Get /TypeOfSeniority/GetList with params {Id?:number, NameTerm?: string }
    public async getTypeOfSeniorityList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfSeniority/GetList',
            params
        });
    }

}

export const typeOfSeniorityServiceClient: TypeOfSeniorityService = new TypeOfSeniorityService();