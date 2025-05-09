/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status } from '@/types/enums';
import { IPagination } from '@/types'

export interface SectionPayload {
    directorateId?: number | string | null;
    subDirectorateId?: number | string | null;
    departmentId?: number | string | null;
    name?: string;
    shortKey?: string;
}

interface patchSectionPayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}

class SectionService extends ApiClient {

    public async getSection(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Section',
            params
        });
    }

    public async createSection(payload: SectionPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Section',
            data: payload
        });
    }

    public async patchSection(payload: patchSectionPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Section',
            data: payload
        });
    }

    public async getSectionById(SectionId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Section/${SectionId}`
        });
    }

    // update Section by SectionId
    public async updateSection(SectionId: number, payload: SectionPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Section/${SectionId}`,
            data: payload
        });
    }

    // delete Section by id
    public async deleteSection(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Section/${id}`
        });
    }

    // Get /Section/GetList Section by id, NameTerm
    public async getSectionList(id: number, nameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Section/GetList',
            params: { id, nameTerm }
        });
    }
}


export const sectionService: SectionService = new SectionService();
