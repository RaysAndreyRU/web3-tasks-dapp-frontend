import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@src/entities/User/store'
import { verifySession } from '@src/entities/User/api/api'
import type { AuthDataDto } from '@src/entities/User/model/schema'

export const useVerifySession = () => {
    const setSession = useAuthStore((s) => s.setSession)

    return useMutation({
        mutationFn: async (authData: AuthDataDto) => {
            const data = await verifySession(authData)
            setSession(data)
            return data
        },
    })
}
