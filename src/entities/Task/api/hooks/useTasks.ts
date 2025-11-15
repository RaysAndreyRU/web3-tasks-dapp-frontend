import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getTasks } from '@src/entities/Task/api/api'
import { QUERY_KEYS } from '@src/shared/constants/api'
import type { PagedTasksResponse } from '@src/entities/Task/model/schema.ts'

export const useTasks = (
  params?: { skip?: number; take?: number },
  options?: Partial<UseQueryOptions<PagedTasksResponse, Error>>,
) => {
  const { enabled = true } = options ?? {}

  return useQuery({
    queryKey: [QUERY_KEYS.tasks.list, params, options?.queryKey],
    queryFn: () => getTasks(params),
    enabled,
    placeholderData: (prev) => prev,
    ...options,
  })
}
