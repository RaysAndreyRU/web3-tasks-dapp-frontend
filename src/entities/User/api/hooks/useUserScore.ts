import { useQuery } from '@tanstack/react-query'
import { getUserScore } from '@src/entities/User/api/api'
import { QUERY_KEYS } from '@src/shared/constants/api'

export const useUserScore = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.user.score],
    queryFn: () => getUserScore(),
  })
}
