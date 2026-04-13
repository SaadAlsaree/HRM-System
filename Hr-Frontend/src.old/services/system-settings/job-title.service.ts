/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types'

export interface JobTitlePayload {
    degreeId: number | string | null;
    name: string;
}

interface patchJobTitlePayload {
    id: number | string | null;
    statusId: number | string | null;
    // tableName: Status;
}

class JobTitleService extends ApiClient {


    public async getJobTitle(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobTitle',
            params
        });
    }

    public async createJobTitle(payload: JobTitlePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/JobTitle',
            data: payload
        });
    }

    public async patchJobTitle(payload: patchJobTitlePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/JobTitle',
            data: payload
        });
    }

    public async getJobTitleById(JobTitleId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/JobTitle/${JobTitleId}`
        });
    }

    // update JobTitle by JobTitleId
    public async updateJobTitle(JobTitleId: number, payload: JobTitlePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/JobTitle/${JobTitleId}`,
            data: payload
        });
    }

    // delete JobTitle by id
    public async deleteJobTitle(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/JobTitle/${id}`
        });
    }

    // GetList JobTitle by id, NameTerm
    public async getJobTitleList(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobTitle/GetList',
            params: { id, NameTerm }
        });
    }

}


export const jobTitleService: JobTitleService = new JobTitleService();


