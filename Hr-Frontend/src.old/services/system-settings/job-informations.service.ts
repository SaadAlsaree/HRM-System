/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '../base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { Status } from '@/types/enums';
import { IPagination } from '@/types'


export interface JobInformationParams extends IPagination {
    EmployeeId: string;
    status: Status;
}

class JobInformationService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }

    // get JobInformation 
    public async getJobInformation(params: JobInformationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobInformations',
            params
        });
    }

    // get JobInformation by id
    public async getJobInformationById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/JobInformations/${id}`
        });
    }

    // ExportFile JobInformation by id
    public async exportFileJobInformation(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobInformations/ExportFile',
            params: { EmployeeId }
        });
    }
}

export const jobInformationClient: JobInformationService = new JobInformationService(false);
export const jobInformationServer: JobInformationService = new JobInformationService(true);