// المناصب الحالية
// المناصب السابقة
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { EmployeePositionType, Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface EmployeeDocumentsTypePayload {
    employeeId: string;
    employeePositionType?: number;
    assignedOrderDate?: string;
    assignedOrderNo?: string;
    assignedDate?: string;
    administrativeOrderDate?: string;
    administrativeOrderNo?: string;
    directorateId: number;
    subDirectorateId: number;
    departmentId: number;
    sectionId: number;
    unitId: number;
    positionId: number;
    note: string;
    currentPosition?: Array<{
        id: string;
        endAssignedOrderNo: string;
        endAssignedOrderDate: string;
    }>;
}

export interface UpdateEmployeeDocumentsTypePayload {
    employeeId: string;
    endAssignedOrderNo?: string;
    endAssignedOrderDate?: string;
    assignedDate?: string;
    assignedOrderDate?: string;
    assignedOrderNo?: string;
    administrativeOrderDate?: string;
    administrativeOrderNo?: string;
    directorateId: number;
    subDirectorateId: number;
    departmentId: number;
    sectionId: number;
    unitId: number;
    positionId: number;
    note: string;
}

export interface patchEmployeePositionPayload {
    id: string,
    statusId: number,
    tableName?: number
}

export interface EmployeePositionParams extends IPagination {
    employeePositionType?: EmployeePositionType;
    employeeId?: string;
    status?: Status;
}

class EmployeePositionService extends ApiClient {


    public async getEmployeePosition(params: EmployeePositionParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeePosition',
            params,
        });
    }

    public async createEmployeePosition(payload: EmployeeDocumentsTypePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeePosition',
            data: payload
        });
    }

    public async updateEmployeePosition(payload: patchEmployeePositionPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/EmployeePosition',
            data: payload
        });
    }

    public async updateEmployeePositionById(EmployeePositionId: string, payload: UpdateEmployeeDocumentsTypePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EmployeePosition/${EmployeePositionId}`,
            data: payload
        });
    }

    public async getEmployeePositionById(EmployeePositionId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeePosition/${EmployeePositionId}`,
        });
    }

    public async deleteEmployeePosition(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/EmployeePosition/${id}`,
        });
    }

    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeePosition/UploadAttachment',
            data: payload
        });
    }

    // ExportFile  EmployeePosition by (EmployeeId, Status)
    public async exportFileEmployeePosition(EmployeeId?: string, Status?: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeePosition/ExportFile',
            params: { EmployeeId, Status }
        });
    }
}

export const employeePositionService: EmployeePositionService = new EmployeePositionService();
