/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status, TableNames } from '@/types/enums';
import { IPagination } from '@/types'


export interface AcademicFieldPayload {
    id: number;
    name: string;
    statusName: string;
    status: Status;
}

export interface patchAchievementPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

class AcademicFieldService extends ApiClient {

    public async getAcademicFields(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AcademicField',
            params,
        })
    }

    // create new AcademicField service
    public async createAcademicField(name: string): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/AcademicField',
            data: {
                name
            }
        });
    }

    // create patch service AcademicField
    public async patchAcademicField(payload: patchAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/AcademicField',
            data: payload
        });
    }

    // get AcademicField by AcademicField
    public async getAcademicFieldById(academicFieldId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/AcademicField/${academicFieldId}`,
        });
    }

    // put AcademicField by AcademicField
    public async putAcademicFieldById(academicFieldId: number, name: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/AcademicField/${academicFieldId}`,
            data: {
                name
            }
        });
    }

    // delete AcademicField by id
    public async deleteAcademicFieldById(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/AcademicField/${id}`,
        });
    }

    //create service GetList AcademicField with params (id,NameTerm)
    public async getAcademicFieldList(params: { Id?: number; NameTerm?: string; }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AcademicField/GetList',
            params
        });
    }
}

export const academicFieldService: AcademicFieldService = new AcademicFieldService();
