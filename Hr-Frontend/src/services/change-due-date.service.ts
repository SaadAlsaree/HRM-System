/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface ChangeDueDatePayload {
    id?: string;
    employeeId?: string;
    orderNo?: string;
    orderDate?: string;
    note?: string;
    createBy?: string;
    lastUpdateBy?: string;
}

export interface ChangeDueDateCalculationDetails {
    runId: string;
    employeeId: string;
    trigger: string;
    promotionBaseDate?: string | null;
    promotionBaseMonths?: number | null;
    promotionDueDate?: string | null;
    allowanceBaseDate?: string | null;
    allowanceBaseMonths?: number | null;
    allowanceDueDate?: string | null;
    summary: string;
    calculatedAt: string;
    steps: Array<{
        calculationKind: string;
        stepCode: string;
        sourceEntityName: string;
        sourceEntityId: string;
        reason: string;
        beforeDate?: string | null;
        afterDate?: string | null;
        deltaMonths: number;
        deltaDays: number;
    }>;
}

interface ChangeDueDateParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

interface patchChangeDueDatePayload {
    id: string;
    statusId: number;
    tableName?: Status;
}

class ChangeDueDateService extends ApiClient {


    public async getChangeDueDate(params: ChangeDueDateParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ChangeDueDate',
            params
        });
    }

    public async createChangeDueDate(payload: ChangeDueDatePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ChangeDueDate',
            data: payload
        });
    }

    public async getChangeDueDateById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ChangeDueDate/${id}`
        });
    }

    public async updateChangeDueDate(id: string, payload: ChangeDueDatePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/ChangeDueDate/${id}`,
            data: payload
        });
    }

    public async getLatestCalculationDetails(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ChangeDueDate/LatestCalculation/${employeeId}`
        });
    }

    public async patchChangeDueDate(payload: patchChangeDueDatePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: `/ChangeDueDate`,
            data: payload
        });
    }

    public async uploadChangeDueAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ChangeDueDate/UploadAttachment',
            data: payload
        });
    }

    public async deleteChangeDue(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/ChangeDueDate/${id}`
        });
    }
    // Get /ChangeDueDate/ExportFile with params {employeeId, status}
    public async exportChangeDueDate(employeeId: string, status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ChangeDueDate/ExportFile',
            params: { employeeId, status }
        });
    }


}


export const changeDueDateService: ChangeDueDateService = new ChangeDueDateService();
