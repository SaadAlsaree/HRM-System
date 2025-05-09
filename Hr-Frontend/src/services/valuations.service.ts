/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status, TableNames } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types';


export interface ValuationPayload {
    employeeId?: string;
    valuationDate?: string; // Date represented as a string (e.g., "2024-12-20")
    recommendation?: string;
    valuationType?: string;
    bookNo?: string;
    bookDate?: string; // Date represented as a string
    notes?: string;
    createBy?: string;
    valuationProperties?: {
        valuationKey?: string;
        valuationPoints?: number;
    }[];
}

interface patchValuationPayload {
    id: string,
    statusId: number,
    tableName?: TableNames
}

interface ValuationParams extends IPagination {
    employeeId?: string;
    Status?: Status;
}


class ValuationsService extends ApiClient {


    public async getValuations(params: ValuationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Valuations',
            params
        });
    }

    public async createValuation(payload: ValuationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Valuations',
            data: payload
        });
    }

    public async patchValuation(payload: patchValuationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Valuations',
            data: payload
        });
    }

    public async getValuationById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Valuations/${id}`,
        });
    }

    // updateValuation
    public async updateValuation(payload: ValuationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: '/Valuations',
            data: payload
        });
    }

    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Valuation/UploadAttachment',
            data: payload
        });
    }

    // Get /Valuations/ExportFile with params { EmployeeId?: string }
    public async exportFile(params: { EmployeeId?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Valuations/ExportFile',
            params
        });
    }

}


export const valuationsService: ValuationsService = new ValuationsService();
