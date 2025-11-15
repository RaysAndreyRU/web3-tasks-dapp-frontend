import { useMutation, useQueryClient } from '@tanstack/react-query'
import { verifyTask } from '@src/entities/Task/api/api'
import { QUERY_KEYS } from '@src/shared/constants/api'
import type { VerifyTask } from '@src/entities/Task/model/schema.ts'


export const useVerifyTask = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: ({ id, dto }: { id: number | string; dto: VerifyTask }) =>
      verifyTask(id, dto),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.tasks.list] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.user.score] })
    },
  })

  return mutation
}
