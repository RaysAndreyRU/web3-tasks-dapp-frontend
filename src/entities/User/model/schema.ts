import { z } from 'zod'

export const userSchema = z.object({
  id: z.string(),
  walletAddress: z.string(),
  createdAt: z.string().optional(),
  score: z.number().optional(),
  telegramUserId: z.string().nullable().optional(),
})

export const AuthDataSchema = z.object({
    accessToken: z.string().min(1, 'accessToken is required'),
    refreshToken: z.string().optional(),
    userId: z.string().min(1, 'userId is required'),

    expiresIn: z.number().optional(),
    expiresAt: z.number().optional(),
    hasKeyshare: z.boolean().optional(),

    displayName: z.string().nullable().optional(),
    avatar: z.string().nullable().optional(),
    providers: z.array(z.string()).optional(),
})
export const authVerifyResponseSchema = z.object({
    user: userSchema,
    token: z.string(),
})

export const userScoreResponseSchema = z.object({
  score: z.number(),
})
export type UserScoreResponse = z.infer<typeof userScoreResponseSchema>

export const linkTelegramResponseSchema = z.object({
  success: z.boolean(),
})

export const linkTelegramDtoSchema = z.object({
  telegramUserId: z.string(),
})

export type LinkTelegramDto = z.infer<typeof linkTelegramDtoSchema>

export type LinkTelegramResponse = z.infer<typeof linkTelegramResponseSchema>

export type AuthVerifyResponse = z.infer<typeof authVerifyResponseSchema>

export type AuthDataDto = z.infer<typeof AuthDataSchema>

export type User = z.infer<typeof userSchema>
