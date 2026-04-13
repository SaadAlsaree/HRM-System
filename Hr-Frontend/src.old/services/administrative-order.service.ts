/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status } from '@/types/enums';
import { IPagination } from '@/types';

export interface AdministrativeOrderPayload {
    employeeId?: string;
    orderNo: string;
    bookTitle: string;
    orderDate: string;
    administrativeOrderType: number;
    createBy?: string;
    lastUpdateBy?: string;
}


export interface updateAdministrativeOrderPayload {
    orderNo: string;
    bookTitle: string;
    orderDate: string;
    administrativeOrderType: number;
    lastUpdateBy?: string;
}


interface patchAdministrativeOrderPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: Status;
}

interface AdministrativeOrderParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

class AdministrativeOrderService extends ApiClient {


    public async getAdministrativeOrder(params?: AdministrativeOrderParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AdministrativeOrder',
            params
        });
    }

    public async createAdministrativeOrder(payload: AdministrativeOrderPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/AdministrativeOrder',
            data: payload
        });
    }

    public async patchAdministrativeOrder(payload: patchAdministrativeOrderPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/AdministrativeOrder',
            data: payload
        });
    }

    public async getAdministrativeOrderById(AdministrativeOrderId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/AdministrativeOrder/${AdministrativeOrderId}`
        });
    }

    public async updateAdministrativeOrder(AdministrativeOrderId: string, payload: updateAdministrativeOrderPayload): Promise<any> {
        console.log(payload);
        return this.request<any>({
            method: 'PUT',
            url: `/AdministrativeOrder/${AdministrativeOrderId}`,
            data: payload
        });
    }

    public async deleteAdministrativeOrder(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/AdministrativeOrder/${id}`
        });
    }

    public async uploadAttachment(payload: any): Promise<any> {
        try {
            this.request<any>({
                method: 'POST',
                url: '/AdministrativeOrder/UploadAttachment',
                data: payload
            });
            return true;
        } catch (error) {
            console.error('Upload Failed:', error);
            return false;
        }
    }

    // /AdministrativeOrder/ExportFile
    public async exportFileAdministrativeOrder(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AdministrativeOrder/ExportFile',
            params: { EmployeeId }
        });
    }

}


export const administrativeOrderService: AdministrativeOrderService = new AdministrativeOrderService();