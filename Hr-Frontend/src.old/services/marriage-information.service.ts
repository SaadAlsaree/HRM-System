/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiService from '@/services/axios.service';
import { IPagination } from '@/types';
import { Status, EmployeePositionType } from '@/types/enums';

export interface MarriageInformationPayload {
    employeeId?: string;
    firstName?: string;
    secondName?: string;
    thirdName?: string;
    surName?: string;
    marriageDate?: string; // Or Date if you want to handle it as a Date object
    childrenCount?: number;
    notes?: string;
}

interface MarriageInformationParams extends IPagination {
    employeeId?: string;
    status?: Status;
    EmployeePositionType?: EmployeePositionType;
}

interface patchMarriageInformationPayload {
    id: string;
    statusId: number;
    tableName: Status;
}



class MarriageInformationService extends ApiService {


    public async getMarriageInformation(params: MarriageInformationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/MarriageInformation',
            params
        });
    }

    public async createMarriageInformation(payload: MarriageInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/MarriageInformation',
            data: payload
        });
    }

    // path
    public async patchMarriageInformation(payload: patchMarriageInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/MarriageInformation',
            data: payload
        });
    }

    public async getMarriageInformationById(MarriageInformationId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/MarriageInformation/${MarriageInformationId}`
        });
    }

    // update MarriageInformation/{MarriageInformationId}
    public async updateMarriageInformation(MarriageInformationId: string, payload: MarriageInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/MarriageInformation/${MarriageInformationId}`,
            data: payload
        });
    }

    // delete MarriageInformation/{id}
    public async deleteMarriageInformation(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/MarriageInformation/${id}`
        });
    }

    // upload attachment 
    public async uploadMarriageInformationAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/MarriageInformation/UploadAttachment',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: payload
        });
    }

    // Get /MarriageInformation/ExportFile with params {employeeId: string, status: Status}
    public async exportMarriageInformation(employeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/MarriageInformation/ExportFile',
            params: { employeeId, status }
        });
    }

}


export const marriageInformationService: MarriageInformationService = new MarriageInformationService();
