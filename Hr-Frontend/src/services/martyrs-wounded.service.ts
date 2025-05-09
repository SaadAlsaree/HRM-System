/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';
import { Status, HealthStatus } from '@/types/enums';


export interface MartyrsWoundedPayload {
    employeeId?: string;
    healthStatus?: number;
    endDateOfService?: string;
    retirementDate?: string;
    dateOfDeath?: string;
    administrativeOrderNo?: string;
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    dateOfMartyrdom?: string;
    note?: string;
}

export interface UpdateMartyrsWoundedPayload {
    employeeId?: string;
    dateOfDeath?: string;
    employeePositionId?: string;
    endDateOfService?: string;
    retirementDate?: string;
    administrativeOrderNo?: string;
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    dateOfMartyrdom?: string;
    note?: string;
    healthStatus?: number;
}

interface MartyrsWoundedParams extends IPagination {
    employeeId?: string;
    status?: Status;
    HealthStatus?: HealthStatus;
}

interface patchMartyrsWoundedPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: Status;
}

class MartyrsWoundedService extends ApiClient {


    public async getMartyrsWounded(params: MartyrsWoundedParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/MartyrsAndWounded',
            params
        });
    }

    public async createMartyrsWounded(payload: MartyrsWoundedPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/MartyrsAndWounded',
            data: payload
        });
    }

    public async getMartyrsWoundedById(MartyrsAndWoundedId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/MartyrsAndWounded/${MartyrsAndWoundedId}`,
            params: { status }
        });
    }

    public async updateMartyrsWounded(MartyrsAndWoundedId: string, payload: UpdateMartyrsWoundedPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/MartyrsAndWounded/${MartyrsAndWoundedId}`,
            data: payload
        });
    }

    public async patchMartyrsWounded(payload: patchMartyrsWoundedPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/MartyrsAndWounded',
            data: payload
        });
    }

    public async uploadMartyrsWoundedAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/MartyrsAndWounded/UploadAttachment',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // Get /MartyrsAndWounded/ExportFile with params { employeeId: string, HealthStatus: HealthStatus }
    public async exportMartyrsWounded(employeeId: string, HealthStatus: HealthStatus): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/MartyrsAndWounded/ExportFile',
            params: { employeeId, HealthStatus },
        });
    }

    public async deleteMartyrsWounded(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/MartyrsAndWounded/${id}`
        });
    }
}

export const martyrsWoundedService: MartyrsWoundedService = new MartyrsWoundedService();
