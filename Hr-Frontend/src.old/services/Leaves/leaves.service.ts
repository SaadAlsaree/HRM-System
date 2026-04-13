/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'


export interface LeavePayload {
    id?: string;
    employeeId?: string;
    normalLeaveTypeId?: number;
    sicknessTypeId?: number;
    typeOfLeaveId?: number;
    longLeaveTypeId?: number;
    orderNo?: string;
    orderDate?: string;
    fromDate?: string;
    toDate?: string;
    countOfDays?: number;
    countOfMinutes?: number;
    countryId?: number;
    salaryStatusId?: number;
    isInside: boolean;
    country?: string;
    note?: string;
    dateOfAssignment?: string;
    noOfAssignment?: string;
    releaseDate?: string;
    dateOfBirthCertificate?: string;
    noOfBirthCertificate?: string;
    dateOfRelease?: string;
    noOfRelease?: string;
    dateOfStart?: string;
    noOfStart?: string;
    dateOfPermission?: string;
    noOfPermission?: string;
    hireDate?: string;
    hireOrderNo?: string;
    hireOrderDate?: string;
}

export interface UpdateLeavePayload {
    employeeId?: string;
    normalLeaveTypeId?: number;
    typeOfLeaveId?: number;
    sicknessTypeId?: number;
    orderNo?: string;
    orderDate?: string;
    fromDate?: string;
    toDate?: string;
    longLeaveTypeId?: number;
    countOfDays?: number;
    countOfMinutes?: number;
    salaryStatusId?: number;
    isInside?: boolean;
    country?: string;
    note?: string;
    releaseDate?: string;
    lastUpdateBy?: string;
    dateOfAssignment?: string;
    noOfAssignment?: string;
    dateOfBirthCertificate?: string;
    noOfBirthCertificate?: string;
    dateOfRelease?: string;
    noOfRelease?: string;
    dateOfStart?: string;
    noOfStart?: string;
    dateOfPermission?: string;
    noOfPermission?: string;
}

interface patchLeavePayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}

interface LeavesParams extends IPagination {
    EmployeeId?: string;
    DateFrom?: Date;
    DateTo?: Date;
    TypeOfLeaveId?: number;
    status?: Status;
}



class LeavesService extends ApiClient {


    public async getLeaves(params: LeavesParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Leaves',
            params
        });
    }

    public async createLeave(payload: LeavePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Leaves',
            data: payload
        });
    }

    public async patchLeave(payload: patchLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Leaves',
            data: payload
        });
    }

    public async getLeaveById(LeaveId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Leaves/${LeaveId}`
        });
    }

    // update Leave by LeaveId
    public async updateLeave(id: string, payload: UpdateLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/${id}`,
            data: payload
        });
    }

    // delete Leave by id
    public async deleteLeave(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Leaves/${id}`
        });
    }
    // Leaves/UpdateLeaveHire/{id}
    public async updateLeaveHire(id: string, payload: any): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/UpdateLeaveHire/${id}`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: payload
        });
    }

    ///Leaves/UploadAttachment 
    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Leaves/UploadAttachment',
            data: payload
        });
    }

    // /Leaves/UpdateLeaveCut/{id}
    public async updateLeaveCut(id: string, payload: any): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/UpdateLeaveCut/${id}`,
            data: payload
        });
    }



}

export const leavesService: LeavesService = new LeavesService();
;
