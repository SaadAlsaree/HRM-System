/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination, UploadAttachmentPayload } from '@/types';
import { Status, WorkingStatus } from '@/types/enums';


export interface EmployeePayload {
    statisticalIndex?: string;
    jobCode?: string;
    lotNumber?: string;
    firstName?: string;
    secondName?: string;
    thirdName?: string;
    fourthName?: string;
    surName?: string;
    motherFirstName?: string;
    motherSecondName?: string;
    motherThirdName?: string;
    motherSurName?: string;
    genderId?: number;
    birthPlace?: string;
    birthDate?: string;
    socialStatus?: number;
    statusWorkingId?: number;
    hireDate?: string;
    isBehaviorCode?: boolean | true;
    typeOfJobId?: number;
    medicalTest?: boolean | true;
    isReEmployed?: boolean | true;
    isStillWorking?: number;
    isMovedFromOutside?: boolean | true;
    notes?: string;
    nationalism?: string;
    religion?: string;
    countryId?: number;
    jobCategoryId?: number;
    jobDegreeId?: number;
    employmentDegreeId?: number;
    jobTitleId?: number;
    jobDescriptionId?: number;
    directorateId?: number;
    subDirectorateId?: number;
    departmentId?: number;
    sectionId?: number;
    unitId?: number;
    positionId?: number;
    wifeName?: string;
    childrenCount?: number;
}

export interface UpdateEmployeePayload {
    statisticalIndex?: string | number | null;
    jobCode?: string | number | null;
    lotNumber?: string | number | null;
    firstName?: string | null;
    secondName?: string | null;
    thirdName?: string | null;
    fourthName?: string | null;
    surName?: string | null;
    motherFirstName?: string | null;
    motherSecondName?: string | null;
    motherThirdName?: string | null;
    motherSurName?: string | null;
    genderId?: number | null;
    birthPlace?: string | null;
    birthDate?: string | Date; // Can be Date if preferred
    socialStatus?: number | string | null;
    statusWorkingId?: number | string | null;
    hireDate?: string | Date | null; // Same as birthDate, can be Date if preferred
    isBehaviorCode?: boolean;
    typeOfJobId?: number | string | null;
    medicalTest?: boolean;
    isReEmployed?: boolean;
    isStillWorking?: number | string | null;
    isMovedFromOutside?: boolean;
    notes?: string | null;
    nationalism?: string | null;
    religion?: string | null;
    countryId?: number | string | null;
    jobCategoryId?: number | string | null;
    jobDegreeId?: number | string | null;
    employmentDegreeId?: number | string | null;
    jobTitleId?: number | string | null;
    jobDescriptionId?: number | string | null;
    directorateId?: number | string | null;
    subDirectorateId?: number | string | null;
    departmentId?: number | string | null;
    sectionId?: number | string | null;
    unitId?: number | string | null;
    positionId?: number | string | null;
}

export interface EmployeeParams extends IPagination {
    EmployeeId?: string;
    TypeOfJobId?: number;
    Status?: Status;
}

export interface updateEmployeeWorkingStatus {
    EmployeeId: string;
    workingStatus?: WorkingStatus;
}

export interface addEmployeeAvatar {
    EmployeeId: string;
    File: File;
    CreateBy: string;
}

class EmployeeService extends ApiClient {


    public async getEmployees(params?: EmployeeParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Employee',
            params
        });
    }

    // create employee service
    public async createEmployee(payload: EmployeePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Employee',
            data: payload
        });
    }

    // get employee by EmployeeId 
    public async getEmployeeById(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Employee/${EmployeeId}`
        });
    }

    // update employee service by EmployeeId
    public async updateEmployee(EmployeeId: string, payload: UpdateEmployeePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Employee/${EmployeeId}`,
            data: payload
        });
    }

    // upload attachment service
    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Employee/UploadAttachment',
            data: payload
        });
    }

    // update Employee/UpdateWork/{EmployeeId}
    public async updateEmployeeWorkingStatus(EmployeeId: string, workingStatus: WorkingStatus): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Employee/UpdateWork/${EmployeeId}`,
            data: { workingStatus }
        });
    }

    // add employee avatar
    public async addEmployeeAvatar(payload: addEmployeeAvatar): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Employee/AddAvatar',
            data: payload
        });
    }

    // update employee pinned
    public async updateEmployeePinned(EmployeeId: string, payload: { isPinned: boolean }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Employee/UpdatePinned/${EmployeeId}`,
            data: payload
        });
    }

    // update employee SocialStatus
    public async updateEmployeeSocialStatus(EmployeeId: string, payload: { socialStatus: number }): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Employee/UpdateSocialStatus/${EmployeeId}`,
            data: payload
        });
    }
}

export const employeeService: EmployeeService = new EmployeeService();


