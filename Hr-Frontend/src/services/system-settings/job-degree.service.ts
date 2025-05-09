/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types'

export interface JobDegreePayload {
    increaseAmount: number | string | null;
    name: string;
}

interface patchJobDegreePayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: TableNames;
}


class JobDegreeService extends ApiClient {

    public async getJobDegree(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobDegree',
            params
        });
    }

    public async createJobDegree(payload: JobDegreePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/JobDegree',
            data: payload
        });
    }

    public async patchJobDegree(payload: patchJobDegreePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/JobDegree',
            data: payload
        });
    }

    public async getJobDegreeById(JobDegreeId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/JobDegree/${JobDegreeId}`
        });
    }

    // update JobDegree by JobDegreeId
    public async updateJobDegree(JobDegreeId: number, payload: JobDegreePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/JobDegree/${JobDegreeId}`,
            data: payload
        });
    }

    public async deleteJobDegree(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/JobDegree/${id}`
        });
    }

    // GetList JobDegree by id, NameTerm

    public async getJobDegreeListById(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobDegree/GetList/',
            params: { id, NameTerm }
        });
    }
}


export const jobDegreeService: JobDegreeService = new JobDegreeService();
