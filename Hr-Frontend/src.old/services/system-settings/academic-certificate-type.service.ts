/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { TableNames } from '@/types/enums';
import { IPagination } from '@/types'



export interface patchAchievementPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class AcademicCertificateTypeService extends ApiClient {

    // get all AcademicCertificateType service
    public async getAcademicCertificateTypes(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AcademicCertificateType',
            params,
        })
    }

    // create new AcademicCertificateType service
    public async createAcademicCertificateType(name: string): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/AcademicCertificateType',
            data: {
                name
            }
        });
    }

    //  create patch server AcademicCertificateType 
    public async patchAcademicCertificateType(payload: patchAchievementPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/AcademicCertificateType',
            data: payload
        });
    }

    //get AcademicCertificateType by AcademicCertificateTypeId
    public async getAcademicCertificateTypeById(AcademicCertificateTypeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/AcademicCertificateType/${AcademicCertificateTypeId}`,
        });
    }

    // put AcademicCertificateType by AcademicCertificateTypeId
    public async putAcademicCertificateTypeById(academicCertificateTypeId: number, name: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/AcademicCertificateType/${academicCertificateTypeId}`,
            data: {
                name
            }
        });
    }

    // delete AcademicCertificateType by id
    public async deleteAcademicCertificateTypeById(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/AcademicCertificateType/${id}`,
        });
    }

    // create service GetList AcademicCertificateType with params (id,NameTerm)
    public async getAcademicCertificateTypeList(params: { Id?: number; NameTerm?: string; }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AcademicCertificateType/GetList',
            params
        });
    }

}

export const academicCertificateTypeService: AcademicCertificateTypeService = new AcademicCertificateTypeService();
