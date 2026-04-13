/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { Status } from '@/types/enums';
import { IPagination } from '@/types';



interface EmployeeCourseParams extends IPagination {
    EmployeeId?: string;
    status?: Status;
}

export interface EmployeeCoursePayload {
    employeeId: string;
    title: string;
    place: string;
    startDate: string;
    endDate: string;
    evaluation: string;
    residentEntity: string;
    courseOrderNo: string;
    courseOrderDate: string;
    courseDurationInDays: number;

}

export interface patchEmployeeCoursePayload {
    id: string | number | null,
    statusId: number | string | null,
    tableName?: number
}

class EmployeeCourseService extends ApiClient {


    public async getEmployeeCourses(params: EmployeeCourseParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/EmployeeCourse',
            params,
        });
    }

    // create EmployeeCourse service
    public async createEmployeeCourse(payload: EmployeeCoursePayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeCourse',
            data: payload
        });
    }

    // patch EmployeeCourse service
    public async patchEmployeeCourse(payload: patchEmployeeCoursePayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/EmployeeCourse',
            data: payload
        });
    }

    // update EmployeeCourse by id service
    public async putEmployeeCourseById(CourseId: string, payload: EmployeeCoursePayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/EmployeeCourse/${CourseId}`,
            data: payload
        });
    }

    // get EmployeeCourse by CourseId service
    public async getEmployeeCourseById(CourseId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeCourse/${CourseId}`,
        });
    }

    // delete EmployeeCourse by CourseId service
    public async deleteEmployeeCourseById(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/EmployeeCourse/${id}`,
        });
    }

    // EmployeeCourse/UploadAttachment
    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/EmployeeCourse/UploadAttachment',
            data: payload
        });
    }

}


export const employeeCourseService: EmployeeCourseService = new EmployeeCourseService();
