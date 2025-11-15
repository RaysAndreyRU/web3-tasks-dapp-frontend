import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from '@src/app/router'
import { AuthSync } from '@src/entities/User/ui/AuthSync/AuthSync.tsx'

export const App = () => {
    return (
        <>
            <AuthSync />
            <RouterProvider router={router} />
            <Toaster position="bottom-right" richColors />
        </>
    )
}
