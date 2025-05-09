'use client';
import * as React from 'react';
import {
   Users,
   Frame,
   GalleryVerticalEnd,
   House,
   Map,
   PieChart,
   CircleFadingArrowUp,
   FolderKanban,
   DraftingCompass,
   FileCheck,
   Cog,
   Loader
} from 'lucide-react';
import { NavMain } from '@/components/nav-main';
// import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

// This is sample data.
const data = {
   user: {
      name: 'سعد ناظم جابر',
      email: 'saad@mail.com',
      avatar: '/avatar.jpg'
   },
   teams: {
      name: 'جهاز الأمن الوطني',
      logo: GalleryVerticalEnd,
      plan: 'الدائرية الادارية'
   },

   navMain: [
      {
         title: 'الرئيسية',
         url: '/',
         icon: House,
         isActive: false,
         items: [
            {
               title: 'الصفحة الرئيسية',
               url: '/'
            }
         ]
      },

      {
         title: 'الموظفين',
         url: '/employees',
         icon: Users,
         items: [
            {
               title: 'عرض الموظفين',
               url: '/employees/list'
            },
            {
               title: 'العقوبات',
               url: '/employees/penalties'
            },
            {
               title: 'الاستقالة',
               url: '/employees/resignations'
            },
            {
               title: 'الأنقطاع',
               url: '/employees/interruptions'
            },
            {
               title: 'سحب و رفع  سحب اليد',
               url: '/employees/pull-and-lift-hand'
            },
            {
               title: 'الدورات التدريبية',
               url: '/employees/training-courses'
            },
            {
               title: 'التقاعد',
               url: '/employees/retirement'
            },
            {
               title: 'الشهداء و الجرحى',
               url: '/employees/martyrs-and-wounded'
            }
         ]
      },
      {
         title: 'العلاوات و الترفيع',
         url: '/promotion',
         icon: CircleFadingArrowUp,
         items: [
            {
               title: 'احتساب خدمة',
               url: '/promotion/service-calculation'
            },
            {
               title: 'احتساب شهادة',
               url: '/promotion/certificate-calculation'
            },
            {
               title: 'تسريع درجة',
               url: '/promotion/accelerate-degree'
            },
            {
               title: 'تعديل تاريخ الأستحقاق',
               url: '/promotion/edit-due-date'
            },
            {
               title: 'تصويب التحصيل الدراسي',
               url: '/promotion/academic-achievement'
            },
            {
               title: 'تعديل العنوان الوظيفي',
               url: '/promotion/edit-job-title'
            },
            {
               title: 'كتب الشكر و القدم',
               url: '/promotion/letter-of-appreciation'
            },
            {
               title: 'تقيم الموظفين',
               url: '/promotion/employee-evaluation'
            },
            {
               title: 'تقرير',
               url: '/promotion/reports'
            }
         ]
      },
      {
         title: 'ادارة المنسبين',
         url: '/management-employees',
         icon: FolderKanban,
         items: [
            {
               title: 'احصائيات',
               url: '/management-employees'
            },
            {
               title: 'المنسبين من الجهاز',
               url: '/management-employees/personnel-from-organization'
            },
            {
               title: 'المنسبين الى الجهاز',
               url: '/management-employees/personnel-to-organization'
            },
            {
               title: 'التنقلات',
               url: '/management-employees/transfers'
            },
            {
               title: 'المناصب الحالية',
               url: '/management-employees/current-positions'
            },
            {
               title: 'المناصب السابقة',
               url: '/management-employees/previous-positions'
            }
         ]
      },
      {
         title: 'أدارة الاجازات',
         url: '/leave-management',
         icon: Loader,
         items: [
            {
               title: 'الاحصائيات',
               url: '/leave-management'
            },
            {
               title: 'الأجازات الأعتيادية',
               url: '/leave-management/normal-leave'
            },
            {
               title: 'الأجازات الزمنية',
               url: '/leave-management/temporary-leave'
            },
            {
               title: 'الأجازات المرضية',
               url: '/leave-management/medical-leave'
            },
            {
               title: 'أجازات الأمومة',
               url: '/leave-management/maternity-leave'
            },
            {
               title: 'الأجازات الطويلة',
               url: '/leave-management/long-leave'
            },
            {
               title: 'أجازات السفر',
               url: '/leave-management/travel-leave'
            },
            {
               title: 'اجازات مرضية خاصة',
               url: '/leave-management/special-medical-leave'
            },
            {
               title: 'اجازة المعين',
               url: '/leave-management/appointment-leave'
            },
            {
               title: 'اجازة العدة',
               url: '/leave-management/mourning-leave'
            },
            {
               title: 'الغيابات',
               url: '/leave-management/absences'
            }
         ]
      },
      {
         title: 'الأجازات الدراسية',
         url: '/study-leave',
         icon: DraftingCompass,
         items: [
            {
               title: 'الاحصائيات',
               url: '/study-leave'
            },
            {
               title: 'الملفات الدراسية',
               url: '/study-leave/study-files'
            },
            {
               title: 'الأجازات الدراسية',
               url: '/study-leave/study-leave'
            },
            {
               title: 'تمديد الأجازات الدراسية',
               url: '/study-leave/extend-study-leave'
            },
            {
               title: 'الأشعارات و التنبيهات',
               url: '/study-leave/notifications'
            }
         ]
      },
      {
         title: 'صحة الصدور',
         url: '/document-validation',
         icon: FileCheck,
         items: [
            {
               title: 'المعلومات',
               url: '/document-validation'
            },
            {
               title: 'صحة الصدور',
               url: '/document-validation/issue-validation'
            }
         ]
      },
      {
         title: 'أعدادات النظام',
         url: '/system-settings',
         icon: Cog,
         items: [
            {
               title: 'التحصيل الدراسي',
               url: '/system-settings/academic-achievement'
            },
            {
               title: 'نوع الشهادة الأكاديمية',
               url: '/system-settings/certificate-type'
            },
            {
               title: 'الأختصاص الأكاديمي',
               url: '/system-settings/academic-specialization'
            },
            {
               title: 'الدوائر',
               url: '/system-settings/organizations'
            },
            {
               title: 'المديريات',
               url: '/system-settings/directorates'
            },
            {
               title: 'الأقسام',
               url: '/system-settings/departments'
            },
            {
               title: 'الشعب',
               url: '/system-settings/sections'
            },
            {
               title: 'الوحدة',
               url: '/system-settings/units'
            },
            {
               title: 'العنوان الوظيفي',
               url: '/system-settings/job-title'
            },
            {
               title: 'الوصف الوظيفي',
               url: '/system-settings/job-description'
            },
            {
               title: 'الدرجة الوظيفية',
               url: '/system-settings/job-degree'
            },
            {
               title: 'الفئة الوظيفية',
               url: '/system-settings/job-category'
            },
            {
               title: 'الأختصاص الدقيق',
               url: '/system-settings/specialization'
            },
            {
               title: 'المنصب',
               url: '/system-settings/position'
            },
            {
               title: 'نوع الأجازة',
               url: '/system-settings/leave-type'
            },
            {
               title: 'نوع الأجازة الأعتيادية',
               url: '/system-settings/normal-leave'
            },
            {
               title: 'نوع الأجازة الطويلة',
               url: '/system-settings/long-leave-type'
            },
            {
               title: 'نوع الأجازة المرضية',
               url: '/system-settings/medical-leave-type'
            },
            {
               title: 'نوع التمديد الدراسي',
               url: '/system-settings/study-leave-extension-type'
            },
            {
               title: 'موقف الدراسي',
               url: '/system-settings/study-status'
            },
            {
               title: 'نوع الدراسة',
               url: '/system-settings/study-type'
            },
            {
               title: 'نتيجة الدراسة',
               url: '/system-settings/study-result'
            },
            {
               title: 'نوع التعين',
               url: '/system-settings/appointment-type'
            },
            {
               title: 'نوع التكليف',
               url: '/system-settings/assignment-type'
            },
            {
               title: 'نوع الكتاب',
               url: '/system-settings/book-type'
            },
            {
               title: 'نوع مستمسكات الموظف',
               url: '/system-settings/employee-document-type'
            },
            {
               title: 'نوع العقوبة',
               url: '/system-settings/penalty-type'
            },
            {
               title: 'القوانين',
               url: '/system-settings/laws'
            },
            {
               title: 'البد',
               url: '/system-settings/country'
            },
            {
               title: 'المحافظة',
               url: '/system-settings/governorate'
            },
            {
               title: 'الناحية',
               url: '/system-settings/district'
            },
            {
               title: 'نوع الخدمة',
               url: '/system-settings/service-type'
            },
            {
               title: 'الأقضية',
               url: '/system-settings/regions'
            },
            {
               title: 'درجة القرابة',
               url: '/system-settings/degree-of-relationship'
            }
         ]
      }
   ],
   projects: [
      {
         name: 'Design Engineering',
         url: '#',
         icon: Frame
      },
      {
         name: 'Sales & Marketing',
         url: '#',
         icon: PieChart
      },
      {
         name: 'Travel',
         url: '#',
         icon: Map
      }
   ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar collapsible='icon' {...props}>
         <SidebarHeader>
            <TeamSwitcher team={data.teams} />
         </SidebarHeader>
         <SidebarContent>
            <NavMain routes={data.navMain} />
            {/* <NavProjects projects={data.projects} /> */}
         </SidebarContent>
         <SidebarFooter>
            <NavUser user={data.user} />
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   );
}
