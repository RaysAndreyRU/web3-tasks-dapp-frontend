import type { AxiosRequestConfig } from 'axios'

import {
  pagedTasksSchema,
  verifyTaskResponseSchema,
  type PagedTasksResponse,
  type VerifyTask,
  type VerifyTaskResponse,
} from '@src/entities/Task/model/schema.ts'

import { API_ROUTES } from '@src/shared/constants/api.ts'

import { apiClient } from '@src/shared/api'

export const getTasks = async (
  params?: { skip?: number; take?: number },
  options?: AxiosRequestConfig,
): Promise<PagedTasksResponse> => {
  return apiClient.get(API_ROUTES.tasks.list, params ?? {}, {
    model: pagedTasksSchema,
    ...options,
  })
}

export const verifyTask = async (
  id: number | string,
  dto: VerifyTask,
  options?: AxiosRequestConfig,
): Promise<VerifyTaskResponse> => {
  return apiClient.post(API_ROUTES.tasks.verify(id), dto, {
    model: verifyTaskResponseSchema,
    ...options,
  })
}