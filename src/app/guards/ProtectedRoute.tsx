import { Navigate } from 'react-router-dom'
import { useLumiaPassportSession } from '@lumiapassport/ui-kit'
import { routes } from '@src/app/constants/routes'
import type {ProtectedRouteProps} from "@src/app/guards/ProtectedRoute.types.ts";


export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { session, address } = useLumiaPassportSession()

    const isAuthenticated = !!session && !!address

    if (!isAuthenticated) {
        return <Navigate to={routes.home.url()} replace />
    }

    return <>{children}</>
}
