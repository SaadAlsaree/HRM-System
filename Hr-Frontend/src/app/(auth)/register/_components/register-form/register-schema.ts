import { z } from 'zod'

export const basicInfoSchema = z.object({
    first_name: z.string().min(2, "يجب أن يكون الاسم الأول 2 أحرف على الأقل"),
    second_name: z.string().min(2, "يجب أن يكون الاسم الثاني 2 أحرف على الأقل"),
    third_name: z.string().min(2, "يجب أن يكون الاسم الثالث 2 أحرف على الأقل"),
    fourth_name: z.string().min(2, "يجب أن يكون الاسم الرابع 2 أحرف على الأقل"),
    last_name: z.string().min(2, "يجب أن يكون الاسم الأخير 2 أحرف على الأقل"),
    date_of_birth: z.coerce.date(),
    place_of_birth: z.string().min(3, "يجب أن يكون مكان الولادة 3 أحرف على الأقل"),
    employee_gender: z.string(),
    mother_first_name: z.string().min(2, "يجب أن يكون اسم الأم الأول 2 أحرف على الأقل"),
    mother_second_name: z.string().min(2, "يجب أن يكون اسم الأم الثاني 2 أحرف على الأقل"),
    mother_third_name: z.string().min(2, "يجب أن يكون اسم الأم الثالث 2 أحرف على الأقل"),
    issuing_authority: z.string().min(5, "يجب أن يكون اسم جهة الإصدار 5 أحرف على الأقل"),
    id_number: z.string().min(10, "يجب أن يكون رقم الهوية 10 أرقام على الأقل"),
    phone: z.string().min(10, "يجب أن يكون رقم الهاتف 10 أرقام على الأقل"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
})

export type BasicInfoValue = z.infer<typeof basicInfoSchema>;

export const jobInfoSchema = z.object({
    job_number: z.string().min(10, "يجب أن يكون رقم الوظيفة 10 أرقام على الأقل"),
    job_grade: z.string(),
    category: z.string(),
    job_title: z.string(),
    job_specialization: z.string(),
    job_position: z.string(),
    date_of_appointment: z.coerce.date(),
    appointment_batch: z.string(),
    organization: z.string().optional(),
    directorate: z.string().optional(),
    department: z.string().optional()

})

export const attachmentSchema = z.object({
    attachment: z
        .array(
            z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
                message: "يجب أن يكون حجم الملف أقل من 4 ميجابايت",
            })
        )
        .max(5, {
            message: "الحد الأقصى المسموح به هو 5 ملفات",
        }).nullable(),
})


export const signatureSchema = z.object({
    pledge: z.boolean().refine((value) => value, {
        message: "يجب الموافقة على التعهد",
    }),
    signature: z.any().refine((value) => value !== null, {
        message: "يجب توقيع العهد",
    }),
})


// Combine all schemas
export const formSchema = z.object({
    ...basicInfoSchema.shape,
    ...jobInfoSchema.shape,
    ...attachmentSchema.shape,
    ...signatureSchema.shape
})

export type EmployeeInfo = z.infer<typeof formSchema>
