import { useEffect } from 'react'
import { useLumiaPassportSession } from '@lumiapassport/ui-kit'
import { useVerifySession } from '@src/entities/User/api/hooks/useVerifySession.ts'
import { useAuthStore } from '@src/entities/User/store'
import { getLumiaAuthData } from '@src/shared/utils/getLumiaAccessToken.ts'

export const AuthSync = () => {
    const { session, status } = useLumiaPassportSession()
    const verifySession = useVerifySession()
    const token = useAuthStore((s) => s.token)
    const clearUser = useAuthStore((s) => s.clearUser)

    useEffect(() => {
        if (status === 'loading') return

        const authData = getLumiaAuthData()

        if (!authData || !session) {
            clearUser()
            return
        }

        if (token) return

        const wallet = session.address || session.smartAccountAddress
        if (!wallet) return

        const payload = {
            ...authData,
            walletAddress: wallet,
        }

        if (!verifySession.isPending) {
            verifySession.mutateAsync(payload)
        }
    }, [session, status])

    return null
}
