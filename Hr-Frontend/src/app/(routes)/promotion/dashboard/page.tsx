"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { promotionsService } from "@/services/promotions.service";
import { DashboardStatsCards } from "./_components/dashboard-stats-cards";
import { DashboardExceptionsCards } from "./_components/dashboard-exceptions-cards";
import { DashboardStatusChart } from "./_components/dashboard-status-chart";
import { DashboardMonthlyChart } from "./_components/dashboard-monthly-chart";
import { DashboardWithholdingChart } from "./_components/dashboard-withholding-chart";
import { DashboardRecentActivity } from "./_components/dashboard-recent-activity";
import { DashboardDetailsSheet } from "./_components/dashboard-details-sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PromotionDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString());
  
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetFilterType, setSheetFilterType] = useState<number>(0);
  const [sheetTitle, setSheetTitle] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => (currentYear - i).toString());
  
  const months = [
    { value: "0", label: "كل الأشهر" },
    { value: "1", label: "يناير" }, { value: "2", label: "فبراير" },
    { value: "3", label: "مارس" }, { value: "4", label: "أبريل" },
    { value: "5", label: "مايو" }, { value: "6", label: "يونيو" },
    { value: "7", label: "يوليو" }, { value: "8", label: "أغسطس" },
    { value: "9", label: "سبتمبر" }, { value: "10", label: "أكتوبر" },
    { value: "11", label: "نوفمبر" }, { value: "12", label: "ديسمبر" },
  ];

  useEffect(() => {
    fetchData();
  }, [year, month]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const selectedMonth = month === "0" ? undefined : parseInt(month);
      const res = await promotionsService.getDashboardStats(parseInt(year), selectedMonth);
      if (res?.data) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard stats", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">لوحة إحصائيات الترقيات والعلاوات</h2>
          <p className="text-muted-foreground">نظرة عامة على حالة الترقيات، العلاوات، الاستثناءات والحجب</p>
        </div>
        
        <div className="flex gap-4">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="السنة" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="الشهر" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m) => (
                <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-muted-foreground animate-pulse">جاري تحميل البيانات...</p>
        </div>
      ) : data ? (
        <div className="space-y-6">
          {/* البطاقات الرئيسية */}
          <DashboardStatsCards 
            data={data} 
            onCardClick={(filterType, title) => {
              setSheetFilterType(filterType);
              setSheetTitle(title);
              setIsSheetOpen(true);
            }} 
          />

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            {/* حالة الترقيات الحالية */}
            <div className="col-span-1 lg:col-span-3">
              <DashboardStatusChart data={data.statusDistribution} />
            </div>

            {/* الترقيات المنجزة شهرياً */}
            <div className="col-span-1 lg:col-span-4">
              <DashboardMonthlyChart data={data.monthlyCompletedPromotions} />
            </div>
          </div>

          {/* الاستثناءات والعلاوات */}
          <div>
            <h3 className="text-lg font-medium mb-4">الإضافات الاستثنائية وتعديل الوضع</h3>
            <DashboardExceptionsCards data={data} />
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {/* أسباب الحجب */}
            <DashboardWithholdingChart data={data.withholdingReasons} />
            
            {/* النشاط الأخير */}
            <DashboardRecentActivity data={data.recentActivities} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-muted-foreground">حدث خطأ أثناء جلب البيانات أو لا توجد بيانات متاحة.</p>
        </div>
      )}

      {sheetFilterType !== 0 && (
        <DashboardDetailsSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          year={parseInt(year)}
          month={month === "0" ? undefined : parseInt(month)}
          filterType={sheetFilterType}
          title={sheetTitle}
        />
      )}
    </div>
  );
}
