"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

interface DashboardExceptionsCardsProps {
  data: {
    totalSeniorityMonthsGranted: number;
    totalServiceCalculations: number;
    totalCertificateCalculations: number;
    totalDegreeAccelerations: number;
  };
}

export function DashboardExceptionsCards({ data }: DashboardExceptionsCardsProps) {
  const cards = [
    {
      title: "أشهر قدم ممنوحة",
      value: data.totalSeniorityMonthsGranted,
      icon: Award,
    },
    {
      title: "احتساب خدمة",
      value: data.totalServiceCalculations,
      icon: Briefcase,
    },
    {
      title: "احتساب شهادة",
      value: data.totalCertificateCalculations,
      icon: GraduationCap,
    },
    {
      title: "تسريع الدرجة",
      value: data.totalDegreeAccelerations,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {cards.map((card, idx) => (
        <Card key={idx} className="bg-slate-50 dark:bg-slate-900 border-dashed">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
