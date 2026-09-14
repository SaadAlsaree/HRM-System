import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { fetchServer } from '@/lib/fetchServer';
import PromotionRulesToolbar from './_components/promotion-rules-toolbar';
import PromotionRulesTable from './_components/promotion-rules-table';
import { PromotionRuleType } from '@/services/system-settings/promotion-rules.service';

export interface IPromotionRule {
   id: number;
   ruleType: PromotionRuleType;
   jobDegreeId?: number | null;
   jobDegreeName?: string | null;
   jobCategoryId?: number | null;
   jobCategoryName?: string | null;
   academicAchievementId?: number | null;
   academicAchievementName?: string | null;
   applicableLawId?: number | null;
   applicableLawName?: string | null;
   baseMonths: number;
   priority: number;
   isActive: boolean;
}

export interface ILookupItem {
   id: number;
   name: string;
   degreeId?: number;
}

export interface IPromotionRuleLookups {
   jobDegrees: ILookupItem[];
   jobCategories: ILookupItem[];
   academicAchievements: ILookupItem[];
   laws: ILookupItem[];
}

interface PagedResponse<T> {
   items?: T[];
   totalCount?: number;
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

interface Props {
   searchParams: {
      page?: string;
      PageSize?: string;
      type?: string;
   };
}

const extractItems = <T,>(res: PagedResponse<T> | null | undefined): T[] => (res?.items ?? res?.data?.items) ?? [];

const PromotionRulesPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page || '1') || 1;
   const PageSize = parseInt(searchParams.PageSize || '10') || 10;
   const ruleType: PromotionRuleType = searchParams.type === '2' ? 2 : 1;

   const [rules, jobDegrees, jobCategories, academicAchievements, laws] = await Promise.all([
      fetchServer<PagedResponse<IPromotionRule>>('/PromotionRules', 'GET', { params: { RuleType: ruleType, Page, PageSize } }),
      fetchServer<PagedResponse<ILookupItem>>('/JobDegree', 'GET', { params: { Page: 1, PageSize: 100 } }),
      fetchServer<PagedResponse<ILookupItem>>('/JobCategory', 'GET', { params: { Page: 1, PageSize: 100 } }),
      fetchServer<PagedResponse<ILookupItem>>('/AcademicAchievement', 'GET', { params: { Page: 1, PageSize: 100 } }),
      fetchServer<PagedResponse<ILookupItem>>('/Law', 'GET', { params: { Page: 1, PageSize: 100 } })
   ]);

   const lookups: IPromotionRuleLookups = {
      jobDegrees: extractItems(jobDegrees),
      jobCategories: extractItems(jobCategories),
      academicAchievements: extractItems(academicAchievements),
      laws: extractItems(laws)
   };
   const totalCount = (rules?.totalCount ?? rules?.data?.totalCount) ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <PromotionRulesToolbar ruleType={ruleType} lookups={lookups} />
         </div>
         <Separator />
         <div className='w-full'>
            <PromotionRulesTable ruleType={ruleType} data={extractItems(rules)} lookups={lookups} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default PromotionRulesPage;
