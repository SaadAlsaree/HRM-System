/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfService {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class TypeOfServiceServices extends ApiClient {


    public async getTypeOfService(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfService',
            params
        });
    }

    public async createTypeOfService(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfService',
            data: payload
        });
    }

    public async patchTypeOfService(payload: patchTypeOfService): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfService',
            data: payload
        });
    }

    public async getTypeOfServiceById(TypeOfServiceId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfService/${TypeOfServiceId}`,
        });
    }

    // updateTypeOfService
    public async updateTypeOfService(TypeOfServiceId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfService/${TypeOfServiceId}`,
            data: payload
        });
    }

    // deleteTypeOfService
    public async deleteTypeOfService(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfService/${id}`,
        });
    }

    //Get /TypeOfService/GetList with params {Id?:number, NameTerm?: string }
    public async getTypeOfServiceList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfService/GetList',
            params
        });
    }
}

export const typeOfServiceService: TypeOfServiceServices = new TypeOfServiceServices();
