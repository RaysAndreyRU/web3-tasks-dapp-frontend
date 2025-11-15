import { z } from 'zod'

export const TaskTypeEnum = z.enum(["TELEGRAM", "LINK", "OTHER"])
export type TaskType = z.infer<typeof TaskTypeEnum>


export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  rewardPoints: z.number(),
  type: TaskTypeEnum,

  telegramChatId: z.string().nullable().optional(),
  slug: z.string().nullable().optional(),
  joinUrl: z.string().nullable().optional(),
  imageUrl: z.string().nullable().optional(),

  verified: z.boolean(),

  createdAt: z.string(),
})

export type TaskResponse = z.infer<typeof taskSchema>


export const pagedTasksSchema = z.object({
  items: z.array(taskSchema),
  total: z.number(),
  skip: z.number(),
  take: z.number(),
})

export type PagedTasksResponse = z.infer<typeof pagedTasksSchema>


export const verifyTaskDtoSchema = z.object({
  telegramUserId: z.string().min(1, 'telegramUserId is required'),
})

export type VerifyTask = z.infer<typeof verifyTaskDtoSchema>


export const verifyTaskResponseSchema = z.object({
  success: z.boolean(),
  alreadyVerified: z.boolean(),
  newScore: z.number(),
})

export type VerifyTaskResponse = z.infer<typeof verifyTaskResponseSchema>


export const createTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  rewardPoints: z.number(),
  type: TaskTypeEnum,

  telegramChatId: z.string().nullable().optional(),
  slug: z.string().nullable().optional(),
  joinUrl: z.string().nullable().optional(),
  imageUrl: z.string().nullable().optional(),
})

export type CreateTask = z.infer<typeof createTaskSchema>
