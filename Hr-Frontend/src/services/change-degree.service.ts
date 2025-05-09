/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types';

export interface ChangeDegreePayload {
    id?: string;
    employeeId: string;
    jobDegreeFromId: string | number;
    jobDegreeToId: string | number;
    jobCategoryFromId: string | number;
    jobCategoryToId: string | number;
    jobTitleFromId: string | number;
    jobDescriptionFromId: string | number;
    jobTitleToId: string | number;
    jobDescriptionToId: string | number;
    oldDegreeDueDate: string;
    newDegreeDueDate: string;
    oldCategoryDueDate: string;
    newCategoryDueDate: string;
    orderNo: string;
    orderDate: string;
    note: string | undefined;
    createBy?: string;
    lastUpdateBy?: string;
}

export interface UpdateChangeDegreePayload {
    id: string;
    employeeId: string;
    jobDegreeFromId: string | number;
    jobDegreeToId: string | number;
    jobCategoryFromId: string | number;
    jobCategoryToId: string | number;
    jobTitleFromId: string | number;
    jobDescriptionFromId: string | number;
    jobTitleToId: string | number;
    jobDescriptionToId: string | number;
    oldDegreeDueDate: string | undefined;
    newDegreeDueDate: string | undefined;
    oldCategoryDueDate: string;
    newCategoryDueDate: string;
    orderNo: string;
    orderDate: string;
    note: string | undefined;
    lastUpdateBy?: string;
}


interface patchChangeDegreePayload {
    id: string;
    statusId: number;
    tableName: Status;
}

interface ChangeDegreeParams extends IPagination {
    employeeId?: string;
    status?: Status;
}


class ChangeDegreeService extends ApiClient {


    public async getChangeDegree(params: ChangeDegreeParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ChangeDegree',
            params
        });
    }

    public async createChangeDegree(payload: ChangeDegreePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ChangeDegree',
            data: payload
        });
    }

    public async patchChangeDegree(payload: patchChangeDegreePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/ChangeDegree',
            data: payload
        });
    }

    public async getChangeDegreeById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/ChangeDegree/${id}`
        });
    }

    public async updateChangeDegree(id: string, payload: UpdateChangeDegreePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/ChangeDegree/${id}`,
            data: payload
        });
    }

    public async deleteChangeDegree(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/ChangeDegree/${id}`
        });
    }

    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/ChangeDegree/uploadAttachment',
            data: payload
        });
    }

    public async exportFileChangeDegree(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/ChangeDegree/ExportFile',
            params: { EmployeeId }
        });
    }
}

export const changeDegreeService: ChangeDegreeService = new ChangeDegreeService();
