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
    LeaveStatusId?: number;
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

    // /Leaves/Submit/{id}
    public async submitLeave(id: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/Submit/${id}`
        });
    }

    // /Leaves/Approve/{id}
    public async approveLeave(id: string, payload: { approverId: string; note?: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/Approve/${id}`,
            data: payload
        });
    }

    // /Leaves/Reject/{id}
    public async rejectLeave(id: string, payload: { approverId: string; note?: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/Reject/${id}`,
            data: payload
        });
    }

    // /Leaves/Cancel/{id}
    public async cancelLeave(id: string, payload: { reason?: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/Cancel/${id}`,
            data: payload
        });
    }

    // /Leaves/Extend/{id}
    public async extendLeave(id: string, payload: any): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Leaves/Extend/${id}`,
            data: payload
        });
    }

    // /Leaves/GetReport
    public async getLeaveReport(params: any): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Leaves/GetReport',
            params
        });
    }
}

export const leavesService: LeavesService = new LeavesService();
;
