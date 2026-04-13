/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '@/services/base.service';
import { Client } from '@/services/client';
import { Server } from '@/services/server';



export interface TeamNotificationPayload {
    teamId?: string;
    employeeId?: string;
    body?: string;
    note?: string;
    status?: number;
    createBy?: string;
}

class TeamNotificationsService extends BaseService {
    constructor(isServer: boolean = false) {
        super(isServer ? new Server().getInstance() : new Client().getInstance());
    }


    public async createTeamNotifications(payload: TeamNotificationPayload): Promise<any> {
        return this.request<any>({
            method: 'POST',
            url: '/TeamNotification',
            data: payload
        });
    }

}

export const teamNotificationsService = new TeamNotificationsService();