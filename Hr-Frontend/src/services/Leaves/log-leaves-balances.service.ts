/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'

export interface LogLeavesBalancesPayload {
    id?: string;
    employeeId?: string;
    countOfDay?: number;
    nameOfIssuing?: string;
    bookNo?: string;
    bookDate?: string;
    note?: string;
    createBy?: string;
    lastUpdateBy?: string;
}

interface patchLogLeavesBalancesPayload {
    id: string;
    statusId: number;
    tableName: Status;
}

interface LogLeavesBalancesParams extends IPagination {
    EmployeeId?: string;
    status?: Status;
}


class LogLeavesBalancesService extends ApiClient {

    public async getLogLeavesBalances(params?: LogLeavesBalancesParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/LogLeavesBalances',
            params
        });
    }

    public async createLogLeavesBalances(payload: LogLeavesBalancesPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/LogLeavesBalances',
            data: payload
        });
    }

    public async patchLogLeavesBalances(payload: patchLogLeavesBalancesPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/LogLeavesBalances',
            data: payload
        });
    }

    public async getLogLeavesBalancesById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/LogLeavesBalances/${id}`
        });
    }

    public async updateLogLeavesBalances(id: string, payload: LogLeavesBalancesPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/LogLeavesBalances/${id}`,
            data: payload
        });
    }

    public async deleteLogLeavesBalances(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/LogLeavesBalances/${id}`
        });
    }

    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/LogLeavesBalances/UploadAttachment',
            data: payload
        });
    }

    public async getLogLeavesBalancesList(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/LogLeavesBalances/ExportFile',
            params: {
                EmployeeId
            }
        });
    }
}

export const logLeavesBalancesService: LogLeavesBalancesService = new LogLeavesBalancesService();
