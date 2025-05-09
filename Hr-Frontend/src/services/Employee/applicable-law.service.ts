/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '../base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { Status } from '@/types/enums';
import { IPagination } from '@/types';



interface ApplicableLawParams extends IPagination {
    id?: string;
    EmployeeId?: string;
    NameTerm?: string;
    status?: Status;
}

export interface ApplicableLawPayload {
    employeeId: string;
    lawId: number;
    note: string;
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

    // create applicable law service
    public async createApplicableLaw(payload: ApplicableLawPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeApplicableLaw',
            data: payload
        });
    }

    // get applicable law by id
    public async getApplicableLawById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeApplicableLaw/${id}`
        });
    }

    // update applicable law service
    public async updateApplicableLaw(note: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: '/EmployeeApplicableLaw',
            data: { note }
        });
    }
}


export const applicableLawServiceClient: ApplicableLawService = new ApplicableLawService(false);
export const applicableLawServiceServer: ApplicableLawService = new ApplicableLawService(true);