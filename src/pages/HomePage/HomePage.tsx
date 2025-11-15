import { Card } from '@src/shared/ui/shadcn/card.tsx'
import { cn } from '@src/shared/utils/cn'
import { useNavigate } from 'react-router-dom'
import { routes } from '@src/app/constants/routes'
import { ConnectWalletButton } from '@lumiapassport/ui-kit'

export const HomePage = () => {
    const navigate = useNavigate()

    const handleConnected = () => {
        navigate(routes.tasks.url())
    }
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center flex-1 px-6 py-12 text-center'
            )}
        >
            <Card
                className={cn(
                    'max-w-md p-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl',
                    'shadow-[0_0_35px_rgba(139,92,246,0.25)]'
                )}
            >
                <h1 className="text-3xl font-semibold text-white mb-4">
                    Welcome to <span className="text-purple-400">Lumia Tasks</span>
                </h1>

              <p className="text-slate-400 mb-8">
                Complete tasks, earn rewards, and grow your Web3 identity with Lumia Passport.
              </p>

                <ConnectWalletButton
                    label="Connect with Lumia Passport"
                    mode="default"
                    onConnected={handleConnected}
                    className="w-full py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:opacity-90 transition"
                />
            </Card>
        </div>
    )
}

export default HomePage
