"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardRecentActivityProps {
  data: {
    employeeName: string;
    actionType: string;
    actionDate: string;
    details: string;
  }[];
}

export function DashboardRecentActivity({ data }: DashboardRecentActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>النشاط الأخير</CardTitle>
        <CardDescription>
          أحدث الإجراءات التي تمت على الترقيات والعلاوات.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {data && data.length > 0 ? (
            data.map((activity, index) => {
              const initials = activity.employeeName
                ? activity.employeeName.substring(0, 2)
                : "غير";
                
              const dateObj = new Date(activity.actionDate);
              const formattedDate = dateObj.toLocaleDateString("ar-SA", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <div key={index} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <div className="mr-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.employeeName}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.actionType} - {activity.details}
                    </p>
                  </div>
                  <div className="mr-auto font-medium text-xs text-muted-foreground">
                    {formattedDate}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center py-4">
              <p className="text-muted-foreground">لا يوجد نشاط أخير.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
