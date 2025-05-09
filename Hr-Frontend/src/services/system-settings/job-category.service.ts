/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types'

export interface JobCategoryPayload {
    degreeId: number | string | null;
    increaseAmount: number | string | null;
    name: string;
}


interface patchJobCategoryPayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: TableNames;
}

class JobCategoryService extends ApiClient {

    public async getJobCategory(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobCategory',
            params
        });
    }

    public async createJobCategory(payload: JobCategoryPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/JobCategory',
            data: payload
        });
    }

    public async patchJobCategory(payload: patchJobCategoryPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/JobCategory',
            data: payload
        });
    }

    public async getJobCategoryById(JobCategoryId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/JobCategory/${JobCategoryId}`
        });
    }

    // update JobCategory by JobCategoryId
    public async updateJobCategory(JobCategoryId: number, payload: JobCategoryPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/JobCategory/${JobCategoryId}`,
            data: payload
        });
    }

    // delete JobCategory by JobCategoryId
    public async deleteJobCategory(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/JobCategory/${id}`
        });
    }

    // GetList JobCategory by id, NameTerm
    public async getJobCategoryList(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobCategory/GetList',
            params: { id, NameTerm }
        });
    }
}


export const jobCategoryService: JobCategoryService = new JobCategoryService();
