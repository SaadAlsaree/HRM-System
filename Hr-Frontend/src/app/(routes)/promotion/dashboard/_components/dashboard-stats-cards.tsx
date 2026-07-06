"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Clock, Ban, CalendarOff, AlertTriangle } from "lucide-react";

interface DashboardStatsCardsProps {
  data: {
    totalDueThisMonth: number;
    totalCompleted: number;
    totalPending: number;
    totalWithheld: number;
    totalOverdue: number;
    totalEvaluationsMissing: number;
  };
  onCardClick?: (filterType: number, title: string) => void;
}

export function DashboardStatsCards({ data, onCardClick }: DashboardStatsCardsProps) {
  const cards = [
    {
      title: "مستحقة هذا الشهر",
      value: data.totalDueThisMonth,
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-100",
      filterType: 1
    },
    {
      title: "مكتملة هذا العام",
      value: data.totalCompleted,
      icon: CheckCircle,
      color: "text-emerald-500",
      bg: "bg-emerald-100",
      filterType: 2
    },
    {
      title: "قيد الإجراء",
      value: data.totalPending,
      icon: AlertCircle,
      color: "text-amber-500",
      bg: "bg-amber-100",
      filterType: 3
    },
    {
      title: "متأخرة عن الموعد",
      value: data.totalOverdue,
      icon: CalendarOff,
      color: "text-red-500",
      bg: "bg-red-100",
      filterType: 4
    },
    {
      title: "محجوبة",
      value: data.totalWithheld,
      icon: Ban,
      color: "text-slate-500",
      bg: "bg-slate-100",
      filterType: 5
    },
    {
      title: "نقص في التقييمات",
      value: data.totalEvaluationsMissing,
      icon: AlertTriangle,
      color: "text-orange-500",
      bg: "bg-orange-100",
      filterType: 6
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, idx) => (
        <Card 
          key={idx} 
          className={`cursor-pointer transition-all duration-200 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 ${card.value > 0 ? "opacity-100" : "opacity-80"}`}
          onClick={() => {
            if (onCardClick) onCardClick(card.filterType, card.title);
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <div className={`p-2 rounded-full ${card.bg}`}>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
