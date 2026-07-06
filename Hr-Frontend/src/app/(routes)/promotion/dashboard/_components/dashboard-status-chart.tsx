"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface DashboardStatusChartProps {
  data: { statusName: string; count: number }[];
}

// ألوان مخصصة لكل حالة
const COLORS: Record<string, string> = {
  ActionTaken: "#10b981", // أخضر
  Pending: "#f59e0b",     // أصفر
  UnderVerification: "#3b82f6", // أزرق
  Unverified: "#ef4444",   // أحمر
  Archived: "#64748b",     // رمادي
};

const statusLabels: Record<string, string> = {
  ActionTaken: "تم اتخاذ إجراء",
  Pending: "قيد الانتظار",
  UnderVerification: "قيد التحقق",
  Unverified: "غير متحقق منه",
  Archived: "مؤرشف",
};

export function DashboardStatusChart({ data }: DashboardStatusChartProps) {
  const chartData = data.map((item) => ({
    name: statusLabels[item.statusName] || item.statusName,
    value: item.count,
    color: COLORS[item.statusName] || "#cbd5e1"
  }));

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>حالة الترقيات الحالية</CardTitle>
        <CardDescription>
          توزيع الترقيات حسب حالتها الحالية في النظام.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value} ترقية`, "العدد"]}
                contentStyle={{ borderRadius: "8px", direction: "rtl" }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
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
