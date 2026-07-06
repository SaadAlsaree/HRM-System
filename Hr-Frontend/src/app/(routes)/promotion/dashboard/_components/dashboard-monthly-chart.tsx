"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

interface DashboardMonthlyChartProps {
  data: { monthName: string; count: number }[];
}

export function DashboardMonthlyChart({ data }: DashboardMonthlyChartProps) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>الترقيات المنجزة شهرياً</CardTitle>
        <CardDescription>
          عدد الترقيات التي تم إنجازها في كل شهر خلال السنة الحالية.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="monthName" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                formatter={(value: number) => [`${value} ترقية`, "العدد"]}
                contentStyle={{ borderRadius: "8px", direction: "rtl" }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">لا توجد بيانات متاحة.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
