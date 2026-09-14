/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';

// 1 = promotion (degree) period rule, 2 = annual allowance (category) period rule
export type PromotionRuleType = 1 | 2;

export interface PromotionRulePayload {
    ruleType: PromotionRuleType;
    jobDegreeId?: number | null;
    jobCategoryId?: number | null;
    academicAchievementId?: number | null;
    applicableLawId?: number | null;
    baseMonths: number;
    priority: number;
    isActive: boolean;
}

interface PromotionRulesParams extends IPagination {
    RuleType: PromotionRuleType;
}

class PromotionRulesService extends ApiClient {
    public async getPromotionRules(params: PromotionRulesParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/PromotionRules',
            params
        });
    }

    public async createPromotionRule(payload: PromotionRulePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/PromotionRules',
            data: payload
        });
    }

    public async updatePromotionRule(ruleId: number, payload: PromotionRulePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/PromotionRules/${ruleId}`,
            data: payload
        });
    }

    public async deletePromotionRule(ruleId: number, ruleType: PromotionRuleType): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/PromotionRules/${ruleId}`,
            params: { ruleType }
        });
    }
}

export const promotionRulesService: PromotionRulesService = new PromotionRulesService();
