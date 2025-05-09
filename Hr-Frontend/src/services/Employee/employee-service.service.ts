/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '../base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { Status } from '@/types/enums';
import { IPagination } from '@/types';

export interface EmployeeDocumentsTypePayload {
    employeeId: string;
    retirementCalculation: string;
    promotionCalculation: string;
    notes: string;
}

export interface UpdateEmployeeDocumentsTypePayload {
    notes: string;
    status: Status;
}

export interface patchEmployeePositionPayload {
    id: string,
    statusId: number,
    tableName: number
}

export interface EmployeePositionParams extends IPagination {
    id?: string;
    NameTerm?: string;
    employeeId?: string;
    status?: Status;
}

class EmployeeServicesService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }

    public async getEmployeeServices(params: EmployeePositionParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeService',
            params,
        });
    }

    public async createEmployeeServices(payload: EmployeeDocumentsTypePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeService',
            data: payload
        });
    }

    // get by employeeServiceId
    public async getEmployeeServicesById(employeeServiceId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeService/${employeeServiceId}`,
        });
    }

    // update by employeeServiceId
    public async updateEmployeeServicesById(employeeServiceId: string, payload: UpdateEmployeeDocumentsTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EmployeeService/${employeeServiceId}`,
            data: payload
        });
    }

    // Get ExportFile service by (EmployeeId, Status)
    public async getExportFile(EmployeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeService/ExportFile',
            params: { EmployeeId, status },
        });
    }
}

export const employeeServicesServiceClient: EmployeeServicesService = new EmployeeServicesService(false);
export const employeeServicesServiceServer: EmployeeServicesService = new EmployeeServicesService(true);