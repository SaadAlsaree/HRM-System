/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'


interface LeavesBalanceParams extends IPagination {
    EmployeeId?: string;
    status?: Status;
}

interface LeavesBalancePayload {
    balance: number;
    note: string;
}

class LeavesBalanceService extends ApiClient {


    public async getLeavesBalance(params: LeavesBalanceParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/LeavesBalance',
            params
        });
    }

    public async getLeavesBalanceById(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/LeavesBalance/${employeeId}`
        });
    }

    // update LeavesBalance by LeavesBalanceId
    public async updateLeavesBalance(id: string, payload: LeavesBalancePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/LeavesBalance/${id}`,
            data: payload
        });
    }
}

export const leavesBalanceService: LeavesBalanceService = new LeavesBalanceService();
