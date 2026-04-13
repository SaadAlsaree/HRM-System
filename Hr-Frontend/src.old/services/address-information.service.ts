/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'

export interface AddressInformationPayload {
    employeeId: string;
    governorateId: number | string;
    provinceId: number | string;
    territoryId: number | string;
    area?: string;
    district?: string;
    streetNo?: string;
    houseNo?: string;
    nearestPoint?: string;
    notes?: string;
    createBy?: string;
}

export interface UpdateAddressInformationPayload {
    governorateId?: number | string;
    provinceId?: number | string;
    territoryId?: number | string;
    area?: string;
    district?: string;
    streetNo?: string;
    houseNo?: string;
    nearestPoint?: string;
    notes?: string;
    lastUpdateBy?: string;
}

interface patchAddressInformationPayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName: Status;
}

interface AddressInformationParams extends IPagination {
    id?: string;
    employeeId?: string;
    status?: Status;
}

class AddressInformationService extends ApiClient {


    public async getAddressInformation(params?: AddressInformationParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AddressInformation',
            params
        });
    }

    public async createAddressInformation(payload: AddressInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/AddressInformation',
            data: payload
        });
    }

    public async patchAddressInformation(payload: patchAddressInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/AddressInformation',
            data: payload
        });
    }

    public async getAddressInformationById(addressInformationId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/AddressInformation/${addressInformationId}`
        });
    }

    // update AddressInformation by AddressInformationId
    public async updateAddressInformation(id: string, payload: UpdateAddressInformationPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/AddressInformation/${id}`,
            data: payload
        });
    }

    public async deleteAddressInformation(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/AddressInformation/${id}`
        });
    }

    // ExportFile AddressInformation with params EmployeeId
    public async exportFileAddressInformation(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/AddressInformation/ExportFile',
            params: { EmployeeId }
        });
    }

}


export const addressInformationService: AddressInformationService = new AddressInformationService();
