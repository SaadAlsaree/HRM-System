/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';
import { Status } from '@/types/enums';



export interface IAbsenceParams {
    EmployeeId?: number | string | null;
    NameTerm?: string;
    Status?: Status;
    Page?: number;
    PageSize?: number;
}

export interface AbsencePayload {
    employeeId?: string;
    bookNo?: string;
    bookDate?: string;  // You can also use Date type if you prefer working with actual date objects
    absenceDate?: string;  // Same as above, can be Date if needed
    countOfDays?: number;
    note?: string;
    createBy?: string;
    lastUpdateBy?: string;
}

export interface patchAbsencePayload {
    id: string | number | null;
    statusId: number | string | null;
    tableName?: number;
}



class AbsenceService extends ApiClient {


    public async getAbsences(params?: IAbsenceParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Absences',
            params,
        });
    }

    // create Absence service
    public async createAbsence(payload: AbsencePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Absences',
            data: payload
        });
    }

    // patch Absence service
    public async patchAbsence(payload: patchAbsencePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Absences',
            data: payload
        });
    }

    // get Absence by id service
    public async getAbsenceById(id: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Absences/${id}`,
        });
    }

    // update Absence by id service
    public async putAbsenceById(id: string, payload: AbsencePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Absences/${id}`,
            data: payload
        });
    }

    // delete  Absence by id service
    public async deleteAbsenceById(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Absences/${id}`,
        });
    }

    // create post service for UploadAttachment
    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Absences/UploadAttachment',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // create get service for ExportFile absences with EmployeeId params
    public async exportAbsencesFile(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Absences/ExportFile',
            params: {
                employeeId
            }
        });
    }
}

export const absencesService: AbsenceService = new AbsenceService()
