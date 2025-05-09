// التوزيع الاحصائي للملاك
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';



export type RequestParams = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

export class DashboardService extends ApiClient {



    public async getEmployeeDemographicsList(params: RequestParams = {}): Promise<any> {
        return this.request<any>({
            url: `/Dashboard/GetEmployeeDemographics`,
            method: "GET",
            ...params,
        });
    }

    public async getCompletedOrdersList(params: RequestParams = {}): Promise<any> {
        return this.request<any>({
            url: `/Dashboard/GetCompletedOrders`,
            method: "GET",
            ...params,
        });
    }
}

export const dashboardService: DashboardService = new DashboardService();
