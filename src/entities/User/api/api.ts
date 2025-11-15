import type { AxiosRequestConfig } from 'axios';

import {
  AuthDataSchema,
  authVerifyResponseSchema,
  linkTelegramDtoSchema,
  userSchema,
  userScoreResponseSchema,
  type AuthDataDto,
  type AuthVerifyResponse,
  type LinkTelegramDto,
  type User,
  type UserScoreResponse,
} from '@src/entities/User/model/schema.ts'
import { API_ROUTES } from '@src/shared/constants/api'
import { apiClient } from '@src/shared/api';


export const verifySession = async (
    dto: AuthDataDto,
    options?: AxiosRequestConfig,
): Promise<AuthVerifyResponse> => {
    AuthDataSchema.parse(dto)
    return apiClient.post(API_ROUTES.auth.verifySession, dto, {
        model: authVerifyResponseSchema,
        ...options,
    })
}

export const getUserScore = async (
  options?: AxiosRequestConfig,
): Promise<UserScoreResponse> => {
  return apiClient.get(API_ROUTES.user.score, undefined, {
    model: userScoreResponseSchema,
    ...options,
  })
}

export const linkTelegram = async (
  dto: LinkTelegramDto,
  options?: AxiosRequestConfig,
): Promise<User> => {
  linkTelegramDtoSchema.parse(dto)

  return apiClient.post(API_ROUTES.user.linkTelegram, dto, {
    model: userSchema,
    ...options,
  })
}
