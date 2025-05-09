/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchTypeOfBookPayload {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}


class TypeOfBookService extends ApiClient {


    public async getTypeOfBooks(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfBook',
            params
        });
    }

    public async createTypeOfBook(payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TypeOfBook',
            data: payload
        });
    }

    public async patchTypeOfBook(payload: patchTypeOfBookPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/TypeOfBook',
            data: payload
        });
    }

    public async getTypeOfBookById(typeOfBookId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/TypeOfBook/${typeOfBookId}`,
        });
    }

    // updateTypeOfBook
    public async updateTypeOfBook(typeOfBookId: number, payload: { name: string }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/TypeOfBook/${typeOfBookId}`,
            data: payload
        });
    }

    // deleteTypeOfBook
    public async deleteTypeOfBook(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/TypeOfBook/${id}`,
        });
    }

    //Get /TypeOfBook/GetList with params {Id?:number, NameTerm?: string }
    public async getTypeOfBookList(params: { Id?: number, NameTerm?: string }): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/TypeOfBook/GetList',
            params
        });
    }
}

export const typeOfBookService: TypeOfBookService = new TypeOfBookService();
