/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'

interface LeavesMedicalBalanceParams extends IPagination {
    EmployeeId?: string;
    status?: Status;
}

interface LeavesMedicalBalancePayload {
    balance: number;
    note: string;
}

class LeavesMedicalBalanceService extends ApiClient {

    public async getLeavesMedicalBalance(params: LeavesMedicalBalanceParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/LeavesMedicalBalance',
            params
        });
    }

    public async getLeavesMedicalBalanceById(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/LeavesMedicalBalance/${employeeId}`
        });
    }

    public async updateLeavesMedicalBalance(id: string, payload: LeavesMedicalBalancePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/LeavesMedicalBalance/${id}`,
            data: payload
        });
    }

}

export const leavesMedicalBalanceService: LeavesMedicalBalanceService = new LeavesMedicalBalanceService();



