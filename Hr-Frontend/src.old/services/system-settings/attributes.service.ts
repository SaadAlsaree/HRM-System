/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '../base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';
import { IPagination } from '@/types';
import { Status, TableNames } from '@/types/enums';

export interface attributeParams extends IPagination {
    id?: string;
    NameTerm?: string;
    status?: Status;
}

interface EmployeeAttributePayload {
    employeeId: string;
    attributeKey: string;
    attributeValue: string;
}

interface patchAttributePayload {
    id: string,
    statusId: number,
    tableName: TableNames
}

class AttributeService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }

    public async getAttributes(params: attributeParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Attributes',
            params
        });
    }

    // get attribute by attributeId
    public async getAttributeById(attributeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Attributes/${attributeId}`
        });
    }

    // create attribute service
    public async createAttribute(payload: EmployeeAttributePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Attributes',
            data: payload
        });
    }

    // patch attribute service
    public async patchAttribute(payload: patchAttributePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Attributes',
            data: payload
        });
    }

    // update attribute service by attributeId
    public async updateAttribute(attributeId: string, payload: EmployeeAttributePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: `/Attributes/${attributeId}`,
            data: payload
        });
    }

    // delete attribute service by id
    public async deleteAttributeById(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Attributes/${id}`
        });
    }

    // get attribute List by id and NameTerm
    public async getAttributeList(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Attributes/GetList',
            params: { id, NameTerm }
        });
    }

}

export const attributeServiceClient: AttributeService = new AttributeService(false);
export const attributeServiceServer: AttributeService = new AttributeService(true);