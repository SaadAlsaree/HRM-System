// احتسابات الخدمة
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { IPagination } from '@/types';
import { Status } from '@/types/enums';

export interface ServiceCalculationPayload {
    employeeId: string;
    typeOfServiceId: number;
    countOfMonth: number;
    orderNo: string;
    orderDate: string;
    jobDegreeId: number;
    notes: string | undefined;
}

interface ServiceCalculationParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

interface patchServiceCalculationPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: Status;
}

class ServiceCalculationService extends ApiClient {

    public async getServiceCalculations(params: ServiceCalculationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ServiceCalculation',
            params
        });
    }

    public async createServiceCalculation(payload: ServiceCalculationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ServiceCalculation',
            data: payload
        });
    }

    public async updateServiceCalculation(serviceCalculationId: string, payload: ServiceCalculationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/ServiceCalculation/${serviceCalculationId}`,
            data: payload
        });
    }

    public async patchServiceCalculation(payload: patchServiceCalculationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/ServiceCalculation',
            data: payload
        });
    }

    public async deleteServiceCalculation(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/ServiceCalculation/${id}`
        });
    }

    // get by id
    public async getServiceCalculationById(serviceCalculationId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ServiceCalculation/${serviceCalculationId}`
        });
    }

    // upload attachment
    public async uploadServiceCalculationAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ServiceCalculation/UploadAttachment',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const serviceCalculationService: ServiceCalculationService = new ServiceCalculationService();
