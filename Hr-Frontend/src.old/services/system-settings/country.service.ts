/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { TableNames } from '@/types/enums';
import { IPagination } from '@/types';


interface patchCountries {
    id: number | string | null,
    statusId: number | string | null,
    tableName?: TableNames
}

class CountryService extends ApiClient {


    public async getCountries(params?: IPagination): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Country',
            params
        });
    }

    // create country service
    public async createCountry(name: string): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Country',
            data: { name }
        });
    }

    // patch country service
    public async patchCountry(payload: patchCountries): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Country',
            data: payload
        });
    }

    // get country by countryId
    public async getCountryById(countryId: number): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Country/${countryId}`
        });
    }

    // update country service by countryId
    public async updateCountry(countryId: number, name: string): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Country/${countryId}`,
            data: { name }
        });
    }

    // delete country by id
    public async deleteCountry(id: number): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Country/${id}`
        });
    }

    // get countryLis by id and nameTerm without pagination
    public async getCountryList(id: number, nameTerm: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Country/GetList',
            params: { id, nameTerm }
        });
    }

}

export const countryService: CountryService = new CountryService();
