// الانتسابات
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface AffiliationPayload {
    employeeId: string;
    typeOfAssignmentId: number;
    orderNo: string;
    orderDate: string;
    issuingAuthority: string;
    assignmentSite?: number;
    originalEntity: string;
    ministry: string;
    reasonForJoining: string;
    durationMonths: number;
    fromDate: string;
    toDate: string;
    maxRenewals: number;
    releaseOrderNo?: string;
    releaseOrderDate?: string;
    releaseDate?: string;
    endOrderNo?: string;
    endOrderDate?: string;
    note?: string;
    createBy?: string;
}

export interface UpdateAffiliationPayload {
    employeeId: string;
    typeOfAssignmentId: number;
    orderNo: string;
    orderDate: string;
    issuingAuthority: string;
    assignmentSite?: number;
    originalEntity: string;
    ministry: string;
    reasonForJoining: string;
    durationMonths: number;
    fromDate: string;
    toDate: string;
    maxRenewals: number;
    releaseOrderNo?: string;
    releaseOrderDate?: string;
    releaseDate?: string;
    endOrderNo?: string;
    endOrderDate?: string;
    note?: string;
    lastUpdateBy?: string;
}

interface PatchAffiliationPayload {
    id: string;
    statusId: number;
    tableName: Status;
}

interface AffiliationParams extends IPagination {
    employeeId?: string;
    status?: Status;
    searchTerm?: string;
}


class AffiliationsService extends ApiClient {


    public async getAffiliations(params: AffiliationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Affiliations',
            params
        });
    }

    public async createAffiliation(payload: AffiliationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Affiliations',
            data: payload
        });
    }

    public async patchAffiliation(payload: PatchAffiliationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Affiliations',
            data: payload
        });
    }

    public async getAffiliationById(affiliationId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Affiliation/${affiliationId}`
        });
    }

    public async updateAffiliation(affiliationId: string, payload: UpdateAffiliationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Affiliation/${affiliationId}`,
            data: payload
        });
    }

    // put /Affiliations/UpdateEndAffiliations/{affiliationId}
    public async endAffiliation(affiliationId: string, payload: any): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Affiliations/UpdateEndAffiliations/${affiliationId}`,
            data: payload
        });
    }

    // put /Affiliations/Renew/{id}
    public async renewAffiliation(id: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Affiliations/Renew/${id}`
        });
    }

    // delete Affiliation by id
    public async deleteAffiliation(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Affiliation/${id}`
        });
    }

    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Affiliation/UploadAttachment',
            data: payload
        });
    }

    // /Affiliation/ExportFile
    public async exportFileAffiliation(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Affiliation/ExportFile',
            params: { EmployeeId }
        });
    }


}


export const affiliationService: AffiliationsService = new AffiliationsService();
