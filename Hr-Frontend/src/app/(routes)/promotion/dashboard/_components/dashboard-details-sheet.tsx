"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { promotionsService } from "@/services/promotions.service";
import { toast } from "sonner";
import { Loader2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface DashboardDetailsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  year: number;
  month?: number;
  filterType: number; // Enum: 1=DueThisMonth, 2=Completed, 3=Pending, 4=Overdue, 5=Withheld, 6=MissingEvaluations
  title: string;
}

export function DashboardDetailsSheet({
  isOpen,
  onClose,
  year,
  month,
  filterType,
  title,
}: DashboardDetailsSheetProps) {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const router = useRouter();

  const pageSize = 10;

  useEffect(() => {
    if (isOpen) {
      setPage(1);
      fetchData(1);
    }
  }, [isOpen, filterType, year, month]);

  useEffect(() => {
    if (isOpen && page > 1) { // Only fetch if page > 1, page 1 is handled above
      fetchData(page);
    }
  }, [page]);

  const fetchData = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const res = await promotionsService.getDashboardDetails(
        year,
        filterType,
        month,
        currentPage,
        pageSize
      );
      if (res?.data?.items) {
        setData(res.data.items);
        setTotalCount(res.data.totalCount || 0);
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء جلب البيانات");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = (employeeId: string) => {
    router.push(`/promotion?employeeId=${employeeId}`);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-3xl w-[90vw] overflow-y-auto" side="left">
        <SheetHeader>
          <SheetTitle className="text-xl mb-4">{title}</SheetTitle>
        </SheetHeader>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>اسم الموظف</TableHead>
                    <TableHead>الدرجة الوظيفية</TableHead>
                    <TableHead>تاريخ الاستحقاق</TableHead>
                    {filterType === 5 && <TableHead>سبب الحجب</TableHead>}
                    <TableHead className="w-[100px]">إجراء</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                        لا توجد بيانات للعرض
                      </TableCell>
                    </TableRow>
                  ) : (
                    data.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.fullName}</TableCell>
                        <TableCell>{item.jobDegreeName}</TableCell>
                        <TableCell>
                          {item.dueDate ? new Date(item.dueDate).toLocaleDateString("en-GB") : "-"}
                        </TableCell>
                        {filterType === 5 && (
                          <TableCell className="text-red-500 text-sm">
                            {item.additionalInfo}
                          </TableCell>
                        )}
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary/80"
                            onClick={() => handleAction(item.employeeId)}
                          >
                            <ArrowLeft className="h-4 w-4 ml-1" /> عرض
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {totalCount > pageSize && (
              <div className="mt-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
                <span className="text-sm text-muted-foreground">
                  إجمالي: {totalCount}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                  >
                    السابق
                  </Button>
                  <span className="text-sm font-medium py-2 px-3 border rounded-md">
                    {page} / {Math.ceil(totalCount / pageSize)}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page >= Math.ceil(totalCount / pageSize)}
                    onClick={() => setPage(p => p + 1)}
                  >
                    التالي
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
