/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface ContactInformationPayload {
    employeeId?: string;
    levelOfRelationshipId?: number | string | null;
    phoneNumber?: string;
    contactName?: string;
    notes?: string;
    createBy?: string;
    lastUpdateBy?: string;
}

interface ContactInformationParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

interface patchContactInformationPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: Status;
}

class ContactInformationService extends ApiClient {

    public async getContactInformation(params: ContactInformationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ContactInformation',
            params
        });
    }

    public async createContactInformation(payload: ContactInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ContactInformation',
            data: payload
        });
    }

    public async getContactInformationById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ContactInformation/${id}`
        });
    }

    public async updateContactInformation(id: string, payload: ContactInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/ContactInformation/${id}`,
            data: payload
        });
    }

    public async patchContactInformation(payload: patchContactInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/ContactInformation',
            data: payload
        });
    }

    // delete ContactInformation/{id}
    public async deleteContactInformation(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/ContactInformation/${id}`
        });
    }

    // Get /ContactInformation/ExportFile with params {employeeId: string}
    public async exportContactInformation(params: { employeeId: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ContactInformation/ExportFile',
            params
        });
    }

}

export const contactInformationService: ContactInformationService = new ContactInformationService();