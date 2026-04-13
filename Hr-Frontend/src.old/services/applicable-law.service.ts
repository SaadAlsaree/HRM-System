/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '@/services/base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { Status } from '@/types/enums';
import { IPagination } from '@/types'

export interface ApplicableLawPayload {
    employeeId: string;
    lawId: number;
    note: string;
}

export interface ApplicableLawParams extends IPagination {
    employeeId?: string;
    status?: Status;
    id?: string;
    NameTerm?: string;
}

class ApplicableLawService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }

    public async getApplicableLaw(params: ApplicableLawParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeApplicableLaw',
            params
        });
    }

    public async createApplicableLaw(payload: ApplicableLawPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeApplicableLaw',
            data: payload
        });
    }



    public async getApplicableLawById(ApplicableLawId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeApplicableLaw/${ApplicableLawId}`
        });
    }

    // put EmployeeApplicableLaw/{ApplicableLawId}
    public async updateApplicableLaw(ApplicableLawId: string, note: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EmployeeApplicableLaw/${ApplicableLawId}`,
            data: { note }
        });
    }
}


export const applicableLawServiceClient: ApplicableLawService = new ApplicableLawService(false);
export const applicableLawServiceServer: ApplicableLawService = new ApplicableLawService(true);