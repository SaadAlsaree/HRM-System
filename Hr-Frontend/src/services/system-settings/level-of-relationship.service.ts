/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types'

export interface LevelOfRelationshipPayload {
    name: string;
}

interface patchLevelOfRelationshipPayload {
    id: number | string | null;
    statusId: number | string | null;
    tableName?: Status;
}

class LevelOfRelationshipService extends ApiClient {


    public async getLevelOfRelationship(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/LevelOfRelationship',
            params
        });
    }

    public async createLevelOfRelationship(payload: LevelOfRelationshipPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/LevelOfRelationship',
            data: payload
        });
    }

    public async patchLevelOfRelationship(payload: patchLevelOfRelationshipPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/LevelOfRelationship',
            data: payload
        });
    }

    public async getLevelOfRelationshipById(LevelOfRelationshipId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/LevelOfRelationship/${LevelOfRelationshipId}`
        });
    }

    // update LevelOfRelationship by LevelOfRelationshipId
    public async updateLevelOfRelationship(LevelOfRelationshipId: number, payload: LevelOfRelationshipPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/LevelOfRelationship/${LevelOfRelationshipId}`,
            data: payload
        });
    }

    // delete LevelOfRelationship by id
    public async deleteLevelOfRelationship(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/LevelOfRelationship/${id}`
        });
    }

    // GetList LevelOfRelationship by id, NameTerm
    public async getLevelOfRelationshipListByIdNameTerm(id: number, NameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/LevelOfRelationship/GetList`,
            params: {
                id,
                NameTerm
            }
        });
    }

}

export const levelOfRelationshipService: LevelOfRelationshipService = new LevelOfRelationshipService();
