"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface DashboardWithholdingChartProps {
  data: { reason: string; count: number }[];
}

const COLORS = ["#f43f5e", "#ec4899", "#d946ef", "#a855f7", "#8b5cf6"];

export function DashboardWithholdingChart({ data }: DashboardWithholdingChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>أسباب الحجب الأكثر شيوعاً</CardTitle>
        <CardDescription>
          أبرز الأسباب التي أدت إلى حجب الترقيات.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[250px]">
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="count"
                nameKey="reason"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value} ترقية محجوبة`, "العدد"]}
                contentStyle={{ borderRadius: "8px", direction: "rtl" }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">لا توجد حالات حجب مسجلة.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
