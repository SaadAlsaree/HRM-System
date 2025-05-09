/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { IPagination } from '@/types';
import { Status } from '@/types/enums';

export interface RetirementPayload {
    employeeId?: string;
    directorateId?: number;
    subDirectorateId?: number;
    startDate?: string;
    academicAchievementId?: number;
    jobDegreeId?: number;
    jobCategoryId?: number;
    jobTitleId?: number;
    decisionToFixAge?: string;
    employeePositionId?: string;
    endDateOfService?: string;
    birthdate?: string;
    retirementDate?: number;
    administrativeOrderNo?: string;
    administrativeOrderDate?: string;
    isPoliticallyDismissed?: boolean;
    note?: string;
}

interface RetirementParams extends IPagination {
    employeeId?: string;
    status?: Status;
    NameTerm?: string;
}

interface patchRetirementPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: Status;
}

class RetirementService extends ApiClient {


    public async getRetirements(params: RetirementParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Retirement',
            params
        });
    }

    public async createRetirement(payload: RetirementPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Retirement',
            data: payload
        });
    }

    public async updateRetirement(retirementId: string, payload: RetirementPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Retirement/${retirementId}`,
            data: payload
        });
    }

    public async patchRetirement(payload: patchRetirementPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Retirement',
            data: payload
        });
    }

    public async deleteRetirement(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Retirement/${id}`
        });
    }

    public async uploadRetirementAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Retirement/UploadAttachment',
            data: payload
        });
    }

    // Get /Retirement/ExportFile with params { employeeId: string }
    public async exportRetirement(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Retirement/ExportFile',
            params: { employeeId }
        });
    }
}

export const retirementService: RetirementService = new RetirementService();
