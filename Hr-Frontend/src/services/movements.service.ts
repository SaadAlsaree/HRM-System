// التنقلات
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';
import { Status } from '@/types/enums';

export interface MovementPayload {
    id?: string;
    employeeId?: string;
    orderNo?: string;
    orderDate?: string;
    fromDirectorateId?: number;
    fromSubDirectorateId?: number;
    fromDepartmentId?: number;
    fromSectionId?: number;
    fromUniteId?: number;
    toDirectorateId?: number;
    toSubDirectorateId?: number;
    toDepartmentId?: number;
    toSectionId?: number;
    toUnitId?: number;
    releaseOrderNo?: string;
    releaseOrderDate?: string;
    releaseDate?: string;
    hireOrderDate?: string;
    hireDate?: string;
    hireOrderNo?: string;
    note?: string;
    status?: string;
}

interface MovementParams extends IPagination {
    employeeId?: string;
    status?: Status;
}

interface patchMovementPayload {
    id?: string | number | null;
    statusId?: number | string | null;
    tableName?: Status;
}

class MovementsService extends ApiClient {


    public async getMovements(params: MovementParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Movements',
            params
        });
    }

    public async createMovement(payload: MovementPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Movements',
            data: payload
        });
    }

    public async patchMovement(payload: patchMovementPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Movements',
            data: payload
        });
    }

    public async getMovementById(movementId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Movements/${movementId}`
        });
    }

    public async updateMovement(movementId: string, payload: MovementPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Movements/${movementId}`,
            data: payload
        });
    }

    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Movements/UploadAttachment',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    public async deleteMovement(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Movements/${id}`
        });
    }

    // Get /Movements/ExportFile with params { employeeId: string }
    public async exportMovements(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Movements/ExportFile',
            params: { employeeId }
        });
    }
}


export const movementsService: MovementsService = new MovementsService();
