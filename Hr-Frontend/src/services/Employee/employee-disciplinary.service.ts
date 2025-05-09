/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface EmployeeDisciplinaryPayload {
    employeeId: string;
    titleOfBook?: string;
    typeOfDisciplinaryId: number;
    bookNo?: string;
    bookDate?: string;  // You can change to Date type if working with Date objects
    stopPromotion?: boolean;
    disciplinaryLaw?: string;
    countOfDayDelay: number;
    note?: string;
    reason?: string;
}

export interface patchEmployeeDisciplinaryPayload {
    id: string | number | null,
    statusId: number | string | null,
    tableName?: number
}

export interface EmployeeDisciplinaryParams extends IPagination {
    id?: string;
    EmployeeId?: string;
    NameTerm?: string;
    status?: Status;
}

class EmployeeDisciplinaryService extends ApiClient {

    public async getEmployeeDisciplinary(params: EmployeeDisciplinaryParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeDisciplinary',
            params,
        });
    }

    public async createEmployeeDisciplinary(payload: EmployeeDisciplinaryPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeDisciplinary',
            data: payload
        });
    }

    public async patchEmployeeDisciplinary(payload: patchEmployeeDisciplinaryPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/EmployeeDisciplinary',
            data: payload
        });
    }

    // get EmployeeDisciplinary by DisciplinaryId
    public async getEmployeeDisciplinaryById(DisciplinaryId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeDisciplinary/${DisciplinaryId}`
        });
    }

    // update EmployeeDisciplinary by DisciplinaryId service
    public async putEmployeeDisciplinaryById(DisciplinaryId: string, payload: EmployeeDisciplinaryPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EmployeeDisciplinary/${DisciplinaryId}`,
            data: payload
        });
    }

    //post  EmployeeDisciplinary/UploadAttachment
    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeDisciplinary/UploadAttachment',
            data: payload
        });
    }


    public async deleteEmployeeDisciplinary(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/EmployeeDisciplinary/${id}`
        });
    }

    // ExportFile EmployeeDisciplinary service (EmployeeId,Status)
    public async exportFileEmployeeDisciplinary(EmployeeId: string, Status: Status): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeDisciplinary/ExportFile',
            params: {
                EmployeeId,
                Status
            }
        });
    }

}

export const employeeDisciplinary: EmployeeDisciplinaryService = new EmployeeDisciplinaryService();
