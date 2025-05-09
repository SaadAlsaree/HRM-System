/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { AssignmentTypes, Status, TableNames } from '@/types/enums';
import { IPagination, UploadAttachmentPayload } from '@/types'

export interface AssignmentParams extends IPagination {
    assignmentSite?: AssignmentTypes;
    EmployeeId?: string | null;
    status?: Status;
}
export interface CreateAssignmentsPayload {
    /** @format uuid */
    employeeId?: string;
    /** @format int32 */
    typeOfAssignmentId?: number | null;
    orderNo?: string | null;
    /** @format date */
    orderDate?: string | null;
    /** @format int32 */
    durationOfAssignment?: number | null;
    /** @format date */
    releaseOrderDate?: string | null;
    releaseOrderNo?: string | null;
    /** @format date */
    assignmentOrderDate?: string | null;
    assignmentOrderNo?: string | null;
    /** @format date */
    releaseDate?: string | null;
    /** @format date */
    hireDate?: string | null;
    hireOrderNo?: string | null;
    /** @format date */
    hireOrderDate?: string | null;
    assignmentSite?: AssignmentTypes;
    assignedFromOrganization?: string | null;
    assignedToOrganization?: string | null;
    endOrderNo?: string | null;
    /** @format date */
    endOrderDate?: string | null;
    /** @format date */
    endReleaseOrderDate?: string | null;
    endReleaseOrderNo?: string | null;
    endHireNo?: string | null;
    /** @format date */
    endHireDate?: string | null;
    note?: string | null;
    /** @format uuid */
    createBy?: string | null;
}

export interface updateAssignmentPayload {
    employeeId: string;
    typeOfAssignmentId: number;
    orderNo: string;
    orderDate: string;
    assignmentSite: number;
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
    endOrderNo: string;
    endOrderDate: string;
    endReleaseOrderDate: string;
    endReleaseOrderNo: string;
    endHireNo: string;
    endHireDate: string;
    note: string;
    lastUpdateBy: string;
}

export interface EndAssignmentPayload {
    endOrderNo: string;
    endOrderDate: string;
    endReleaseOrderDate: string;
    endReleaseOrderNo: string;
    endHireNo: string;
    endHireDate: string;
    note: string;
    lastUpdateBy: string;
}

interface patchAssignment {
    id: string,
    statusId: number,
    tableName?: TableNames
}


class AssignmentServices extends ApiClient {


    public async getAssignments(params: AssignmentParams): Promise<any> {
        this.request<any>({
            method: 'GET',
            url: 'Assignments',
            params
        })
    }

    // create Assignments service
    public async createAssignment(payload: CreateAssignmentsPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Assignments',
            data: payload
        });
    }

    // pathAssignments service
    public async patchAssignment(payload: patchAssignment): Promise<any> {
        return this.request<any>({
            method: 'PATCH',
            url: '/Assignments',
            data: payload
        });
    }

    // get Assignments service by AssignmentsId 
    public async getAssignmentById(assignmentId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/Assignments/${assignmentId}`,
        });
    }

    // update Assignments service by AssignmentsId  
    public async putAssignmentById(assignmentId: string, payload: updateAssignmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: `/Assignments/${assignmentId}`,
            data: payload
        });
    }

    // update UpdateEndAssignments service by AssignmentsId  
    public async updateEndAssignment(payload: EndAssignmentPayload): Promise<any> {
        return this.request<any>({
            method: 'PUT',
            url: '/Assignments/UpdateEndAssignments',
            data: payload
        });
    }

    // delete  Assignments service by id
    public async deleteAssignmentById(id: string): Promise<any> {
        return this.request<any>({
            method: 'DELETE',
            url: `/Assignments/${id}`,
        });
    }

    // create post service for UploadAttachment
    public async uploadAttachment(payload: UploadAttachmentPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/Assignments/UploadAttachment',
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // get service for ExportFile Assignments with EmployeeId params
    public async exportAbsencesFile(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: '/Assignments/ExportFile',
            params: {
                employeeId
            }
        });
    }

}


export const assignmentServices: AssignmentServices = new AssignmentServices();


