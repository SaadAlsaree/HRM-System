/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';

export interface PromotionWithholdingPayload {
    employeeId: string;
    scheduledPromotionDate?: string | null;
    withholdingDate?: string | null;
    reasonForWithholding?: string;
    notes?: string;
}

export interface PromotionWithholdingParams extends IPagination {
    employeeId?: string;
}

class PromotionWithholdingService extends ApiClient {

    public async getWithholdings(params: PromotionWithholdingParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/PromotionWithholding',
            params
        });
    }

    public async getWithholdingById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/PromotionWithholding/${id}`
        });
    }

    public async createWithholding(payload: PromotionWithholdingPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/PromotionWithholding',
            data: payload
        });
    }

    public async updateWithholding(id: string, payload: PromotionWithholdingPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/PromotionWithholding/${id}`,
            data: payload
        });
    }

    public async deleteWithholding(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/PromotionWithholding/${id}`
        });
    }
}

export const promotionWithholdingService: PromotionWithholdingService = new PromotionWithholdingService();
