/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClient from '@/services/axios.service';

import { IPagination } from '@/types';

interface GetLotEmployeeParams extends IPagination {
    EmployeeId?: string;
}

class EmployeeProfileService extends ApiClient {

    // Get EmployeeProfileBaseInfo/GetAdministrativeOrder/{employeeId}
    public async getAdministrativeOrder(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeProfileBaseInfo/GetAdministrativeOrder/${employeeId}`,
        });
    }

    // Get EmployeeProfileBaseInfo/GetEducationInfo/{employeeId}
    public async getEducationInfo(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeProfileBaseInfo/GetEducationInfo/${employeeId}`,
        });
    }

    // Get EmployeeProfileBaseInfo/GetManagementInfo/{employeeId}
    public async getManagementInfo(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeProfileBaseInfo/GetManagementInfo/${employeeId}`,
        });
    }

    // Get EmployeeProfileBaseInfo/GetEmployeeInfo/{employeeId}
    public async getEmployeeInfo(employeeId: string): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeProfileBaseInfo/GetEmployeeInfo/${employeeId}`,
        });
    }

    // Get  EmployeeProfileBaseInfo/GetLotEmployee/GetLotEmployee wit params (EmployeeId , IPagination)
    public async getLotEmployee(params: GetLotEmployeeParams): Promise<any> {
        return this.request<any>({
            method: 'GET',
            url: `/EmployeeProfileBaseInfo/GetLotEmployee/GetLotEmployee`,
            params,
        });
    }
}


export const employeeProfileService: EmployeeProfileService = new EmployeeProfileService();
