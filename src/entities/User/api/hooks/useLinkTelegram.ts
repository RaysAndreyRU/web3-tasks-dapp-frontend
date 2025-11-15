import { useMutation, useQueryClient } from '@tanstack/react-query'
import { linkTelegram } from '@src/entities/User/api/api'
import { QUERY_KEYS } from '@src/shared/constants/api'
import type { LinkTelegramDto } from '@src/entities/User/model/schema'
import { useAuthStore } from '@src/entities/User/store'

export const useLinkTelegram = () => {
  const queryClient = useQueryClient()
  const setUser = useAuthStore((s) => s.setUser)
  return useMutation({
    mutationFn: (dto: LinkTelegramDto) => linkTelegram(dto),

    onSuccess: (_, dto) => {
      setUser({ telegramUserId: dto.telegramUserId })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.user.score] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.tasks.list] })
    },
  })
}
