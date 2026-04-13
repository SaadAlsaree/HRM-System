// المنسبين من الجهاز
// المنسبين الى الجهاز

/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { AssignmentTypes, Status } from '@/types/enums';
import { IPagination } from '@/types';


export interface AssignmentPayload {
    employeeId: string;
    typeOfAssignmentId: number;
    orderNo: string;
    orderDate: string;
    durationOfAssignment: number;
    releaseOrderDate: string;
    releaseOrderNo: string;
    assignmentOrderDate: string;
    assignmentOrderNo: string;
    releaseDate: string;
    hireDate: string;
    hireOrderNo: string;
    hireOrderDate: string;
    assignmentSite?: number;
    assignedFromOrganization: string;
    assignedToOrganization: string;
    endOrderNo?: string;
    endOrderDate?: string;
    endReleaseOrderDate?: string;
    endReleaseOrderNo?: string;
    endHireNo?: string;
    endHireDate?: string;
    note?: string;
    createBy?: string;
}

export interface UpdateAssignmentPayload {
    employeeId: string;
    typeOfAssignmentId: number;
    orderNo: string;
    orderDate: string;
    assignmentSite?: number;
    assignedFromOrganization: string;
    assignedToOrganization: string;
    durationOfAssignment: number;
    releaseOrderDate: string;
    releaseOrderNo: string;
    assignmentOrderDate: string;
    assignmentOrderNo: string;
    releaseDate: string;
    hireDate: string;
    hireOrderNo: string;
    hireOrderDate: string;
    endOrderNo?: string;
    endOrderDate?: string;
    endReleaseOrderDate?: string;
    endReleaseOrderNo?: string;
    endHireNo?: string;
    endHireDate?: string;
    note?: string;
    lastUpdateBy?: string;
}
interface EndAssignmentPayload {
    endOrderNo: string;
    endOrderDate: string;
    endReleaseOrderDate: string;
    endReleaseOrderNo: string;
    endHireNo: string;
    endHireDate: string;
    note: string;
    lastUpdateBy: string;
}

interface patchAssignmentPayload {
    id: string;
    statusId: number;
    tableName: Status;
}

interface AssignmentParams extends IPagination {
    employeeId?: string;
    status?: Status;
    AssignmentSite?: AssignmentTypes
}


class AssignmentService extends ApiClient {


    public async getAssignment(params: AssignmentParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Assignments',
            params
        });
    }

    public async createAssignment(payload: AssignmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Assignments',
            data: payload
        });
    }

    public async patchAssignment(payload: patchAssignmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Assignments',
            data: payload
        });
    }

    public async getAssignmentById(AssignmentId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Assignment/${AssignmentId}`
        });
    }

    public async updateAssignment(AssignmentId: string, payload: UpdateAssignmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Assignment/${AssignmentId}`,
            data: payload
        });
    }

    // put /Assignments/UpdateEndAssignments/{AssignmentsId}
    public async updateEndAssignment(AssignmentId: string, payload: EndAssignmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Assignments/UpdateEndAssignments/${AssignmentId}`,
            data: payload
        });
    }

    // delete Assignment by id
    public async deleteAssignment(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Assignment/${id}`
        });
    }

    public async uploadAttachment(payload: any): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Assignment/UploadAttachment',
            data: payload
        });
    }

    // /Assignment/ExportFile
    public async exportFileAssignment(EmployeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Assignment/ExportFile',
            params: { EmployeeId }
        });
    }



}


export const assignmentService: AssignmentService = new AssignmentService();
