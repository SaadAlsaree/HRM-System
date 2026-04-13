/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination, UploadAttachmentPayload } from '@/types';
import { Status } from '@/types/enums';

export interface PromotionPayload {
    id?: string;
    employeeId?: string;
    sentPromotionGroupId?: number;
    degreeFromId?: number;
    degreeToId?: number;
    jobCategoryFromId?: number;
    jobCategoryToId?: number;
    oldEducationInformationId?: string;
    newEducationInformationId?: string;
    dueDateDegree?: string;
    dueDateCategory?: string;
    bookNo?: string;
    bookDate?: string;
    categoryPerMonth?: number;
    serviceRecycle?: number;
    typeOfChange?: number;
    note?: string;
}

interface PromotionParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

interface patchPromotionPayload {
    id: string;
    statusId: number | string | null;
    tableName?: Status;
}

class PromotionsService extends ApiClient {

    public async getPromotions(params: PromotionParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Promotions',
            params
        });
    }

    public async createPromotion(payload: PromotionPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Promotions',
            data: payload
        });
    }

    public async updatePromotion(promotionId: string, payload: PromotionPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Promotions/${promotionId}`,
            data: payload
        });
    }

    public async deletePromotion(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Promotions/${id}`
        });
    }

    public async patchPromotion(payload: patchPromotionPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Promotions',
            data: payload
        });
    }


    public async getPromotionById(promotionId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Promotions/${promotionId}`
        });
    }

    public async uploadPromotionAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Promotions/UploadAttachment',
            data: payload
        });
    }

    // Get  /Promotions/GetStats with params {Take: number, Skip: number, status: Status}
    public async getPromotionsStats(take?: number, skip?: number, status?: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Promotions/GetStats',
            params: { take, skip, status }
        });
    }

    // Get /Promotions/ExportFile with params { employeeId: string }
    public async exportPromotions(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Promotions/ExportFile',
            params: { employeeId }
        });
    }

    // Get /Promotions/Reports with params { employeeId: string, degreeId: string, fromDate: date, toDate: date }
    public async getPromotionsReports(employeeId: string, degreeId: string, fromDate: string, toDate: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Promotions/Reports',
            params: { employeeId, degreeId, fromDate, toDate }
        });
    }
}


export const promotionsService: PromotionsService = new PromotionsService();
