/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { IPagination } from '@/types';
import { Status } from '@/types/enums';

export interface IssueAnnualAllowancePayload {
    employeeId: string;
    dueDate: string;
    implementationDate?: string;
    bonusTypeId?: number;
    reasonForAmendment?: string;
    administrativeOrderNo: string;
    administrativeOrderDate: string;
    annualAllowanceStatus?: number;
    calculationRunId?: string;
}

export interface AnnualAllowanceParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

class AnnualAllowanceService extends ApiClient {

    public async getAnnualAllowances(params: AnnualAllowanceParams): Promise<any> {
        const { employeeId, ...restParams } = params;

        return this.request<any>({
            method: 'GET',
            url: '/AnnualAllowance',
            params: {
                ...restParams,
                ...(employeeId ? { EmployeeId: employeeId } : {})
            }
        });
    }

    public async getAnnualAllowanceById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/AnnualAllowance/${id}`
        });
    }

    public async issueAnnualAllowance(payload: IssueAnnualAllowancePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/AnnualAllowance',
            data: payload
        });
    }
}

export const annualAllowanceService = new AnnualAllowanceService();
