/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


export interface TypeOfDisciplinaryPayload {
    name?: string;
    countOfDayDelay?: number | string | null;
}

interface patchTypeOfDisciplinaryPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class TypeOfDisciplinaryService extends ApiClient {

    public async getTypeOfDisciplinary(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfDisciplinary',
            params
        });
    }

    public async createTypeOfDisciplinary(payload: TypeOfDisciplinaryPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfDisciplinary',
            data: payload
        });
    }

    public async patchTypeOfDisciplinary(payload: patchTypeOfDisciplinaryPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfDisciplinary',
            data: payload
        });
    }

    public async getTypeOfDisciplinaryById(academicAchievementId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfDisciplinary/${academicAchievementId}`,
        });
    }

    // updateTypeOfDisciplinary
    public async updateTypeOfDisciplinary(academicAchievementId: number, payload: TypeOfDisciplinaryPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfDisciplinary/${academicAchievementId}`,
            data: payload
        });
    }

    // deleteTypeOfDisciplinary
    public async deleteTypeOfDisciplinary(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfDisciplinary/${id}`,
        });
    }

    //Get /TypeOfDisciplinary/GetList with params {Id?:number, NameTerm?: string }
    public async getTypeOfDisciplinaryList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfDisciplinary/GetList',
            params
        });
    }
}


export const typeOfDisciplinaryService: TypeOfDisciplinaryService = new TypeOfDisciplinaryService();


