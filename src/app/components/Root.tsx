import '@src/app/styles/index.css'
import '@src/app/styles/general.scss'
import '@lumiapassport/ui-kit/dist/styles.css'

import { QueryClientProvider } from '@tanstack/react-query'
import {
    LumiaPassportProvider,
    LumiaPassportSessionProvider,
} from '@lumiapassport/ui-kit'

import { queryClient } from '@src/shared/constants/queryClient'
import { App } from './App'

export const Root = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <LumiaPassportProvider
                projectId={import.meta.env.VITE_LUMIA_PROJECT_ID}
                initialConfig={{
                    ui: {
                        theme: 'dark',
                        title: 'Lumia Tasks',
                        branding: {
                            tagline: '',
                            link: { text: '', url: '' },
                        },
                        modal: { width: '420px', borderRadius: '20px' },
                    },
                    network: {
                        name: 'Lumia Beam',
                        symbol: 'LUMIA',
                        chainId: 2030232745,
                        rpcUrl: 'https://beam-rpc.lumia.org',
                        explorerUrl: 'https://beam-explorer.lumia.org',
                        testnet: true,
                    },
                    wallet: {
                        enabled: true,
                        requireSignature: false,
                    },
                    passkey: {
                        enabled: true,
                        showCreateButton: true,
                        primaryButtonText: 'Continue with Lumia Passport',
                    },
                }}
            >
                <LumiaPassportSessionProvider>
                    <App />
                </LumiaPassportSessionProvider>
            </LumiaPassportProvider>
        </QueryClientProvider>
    )
}
