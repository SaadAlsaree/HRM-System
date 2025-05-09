import { z } from 'zod';



export const createEventSchema = z.object({
    title: z.string().min(3).max(255),
    description: z.string().min(3).max(500),
    date: z.date(),
    startTime: z.string().min(3).max(255),
    endTime: z.string().min(3).max(255),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;