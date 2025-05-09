/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { TableNames } from '@/types/enums';
import { IPagination } from '@/types'

export interface JobDescriptionPayload {
    name: string;
}

interface patchJobDescriptionPayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: TableNames;
}

class JobDescriptionService extends ApiClient {


    public async getJobDescription(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobDescription',
            params
        });
    }

    public async createJobDescription(payload: JobDescriptionPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/JobDescription',
            data: payload
        });
    }

    public async patchJobDescription(payload: patchJobDescriptionPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/JobDescription',
            data: payload
        });
    }

    public async getJobDescriptionById(JobDescriptionId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/JobDescription/${JobDescriptionId}`
        });
    }

    // update JobDescription by JobDescriptionId
    public async updateJobDescription(JobDescriptionId: number, payload: JobDescriptionPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/JobDescription/${JobDescriptionId}`,
            data: payload
        });
    }

    // delete JobDescription by id
    public async deleteJobDescription(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/JobDescription/${id}`
        });
    }

    // getList of JobDescription by id and NameTerm
    public async getJobDescriptionList(id: number, NameTern: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/JobDescription/GetList',
            params: { id, NameTern }
        });
    }
}


export const jobDescriptionService: JobDescriptionService = new JobDescriptionService();
