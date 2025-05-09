/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '@/services/base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface ManagementInfoPayload {
    employeeId?: string;
    directorateId?: number;
    subDirectorateId?: number;
    departmentId?: number;
    sectionId?: number;
    unitId?: number;
    positionId?: number;
    employmentDegreeId?: number;
    jobDegreeId?: number;
    jobCategoryId?: number;
    jobTitleId?: number;
    jobDescriptionId?: number;
    stopJobDegreeId?: number;
    notes?: string;
}

interface ManagementInfoParams extends IPagination {
    employeeId?: string;
    status?: Status;
    id?: string;
    NameTerm?: string;
}



class ManagementInfoService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }

    public async getManagementInfo(params: ManagementInfoParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ManagementInformation',
            params
        });
    }

    public async createManagementInfo(payload: ManagementInfoPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ManagementInformation',
            data: payload
        });
    }

    public async getManagementInfoById(ManagementInfoId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ManagementInformation/${ManagementInfoId}`
        });
    }

    // Get /ManagementInformation/ExportFile with params { employeeId: string , status: Status }
    public async exportFile(employeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ManagementInformation/ExportFile',
            params: { employeeId, status }
        });
    }


}


export const managementInfoServiceClient: ManagementInfoService = new ManagementInfoService(false);
export const managementInfoServiceServer: ManagementInfoService = new ManagementInfoService(true);