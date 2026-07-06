/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfLeavePayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

export interface TypeOfLeavePayload {
    name: string;
    description?: string;
    maxDurationDays?: number | null;
    requiresAdministrativeOrder?: boolean;
    requiresApprovals?: boolean;
    affectsService?: boolean;
    affectsPromotion?: boolean;
    affectsBonus?: boolean;
    affectsSalary?: boolean;
    affectsRetirement?: boolean;
    allowsExtension?: boolean;
    allowsTermination?: boolean;
    allowsCarryover?: boolean;
    countsTowardsAnnualBalance?: boolean;
    isBalanceBased?: boolean;
    maxCarryoverDays?: number | null;
    defaultSalaryStatusId?: number;
}


class TypeOfLeaveService extends ApiClient {

    public async getTypeOfLeave(params: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfLeave',
            params
        });
    }

    public async createTypeOfLeave(payload: TypeOfLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfLeave',
            data: payload
        });
    }

    public async patchTypeOfLeave(payload: patchTypeOfLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfLeave',
            data: payload
        });
    }

    public async getTypeOfLeaveById(TypeOfLeaveId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfLeave/${TypeOfLeaveId}`,
        });
    }

    public async updateTypeOfLeave(TypeOfLeaveId: number, payload: TypeOfLeavePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfLeave/${TypeOfLeaveId}`,
            data: payload
        });
    }

    public async deleteTypeOfLeave(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfLeave/${id}`,
        });
    }

    public async getTypeOfLeaveList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfLeave/GetList',
            params
        });
    }

}

export const typeOfLeaveService: TypeOfLeaveService = new TypeOfLeaveService();
