/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types'

export interface LogLeavesBalancePayload {
    id?: string;
    employeeId: string;
    countOfDay: number;
    nameOfIssuing: string;
    bookNo: string;
    bookDate: string;
    note: string;
    createBy?: string;
    lastUpdateBy?: string;
}

interface patchLogLeavesBalancePayload {
    id: string;
    statusId: number;
    tableName: Status;
}

interface LogLeavesBalanceParams extends IPagination {
    EmployeeId?: string;
    status: Status;
}

class LogLeavesBalanceService extends ApiClient {

    public async getLogLeavesBalance(params: LogLeavesBalanceParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/LogLeavesBalance',
            params
        });
    }

    public async createLogLeavesBalance(payload: LogLeavesBalancePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/LogLeavesBalance',
            data: payload
        });
    }

    public async patchLogLeavesBalance(payload: patchLogLeavesBalancePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/LogLeavesBalance',
            data: payload
        });
    }

    public async getLogLeavesBalanceById(LogLeavesBalanceId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/LogLeavesBalance/${LogLeavesBalanceId}`
        });
    }

    // update LogLeavesBalance by LogLeavesBalanceId
    public async updateLogLeavesBalance(id: string, payload: LogLeavesBalancePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/LogLeavesBalance/${id}`,
            data: payload
        });
    }

    // delete LogLeavesBalance by id
    public async deleteLogLeavesBalance(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/LogLeavesBalance/${id}`
        });
    }

    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/LogLeavesBalance/UploadAttachment',
            data: payload
        });
    }
}

export const logLeavesBalanceService: LogLeavesBalanceService = new LogLeavesBalanceService();
