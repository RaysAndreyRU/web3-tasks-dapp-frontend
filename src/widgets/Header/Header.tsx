import type { HeaderProps } from './Header.types'
import { cn } from '@src/shared/utils/cn'
import { Button } from '@src/shared/ui/shadcn/button'
import { useLumiaPassportSession, useLogout } from '@lumiapassport/ui-kit'
import { AddressBadge } from '@src/shared/ui/address-badge/AddressBadge'

export const Header = ({ className }: HeaderProps) => {
    const { session } = useLumiaPassportSession()
    const { logout } = useLogout()

    const walletAddress = session?.address ?? null
    const isLoggedIn = Boolean(walletAddress)

    return (
        <header
            className={cn(
                'relative z-20 flex justify-between items-center w-full px-6 py-5 rounded-xl',
                'border border-white/10 bg-[#0b001a]/80 backdrop-blur-md shadow-[0_0_25px_rgba(139,92,246,0.25)]',
                className,
            )}
        >
            <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                <p className="text-lg font-semibold text-white tracking-wide">
                    <span className="text-purple-400">Lumia</span> Tasks
                </p>
            </div>
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    className="text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                >
                    Dashboard
                </Button>
                {isLoggedIn && (
                    <>
                        <AddressBadge address={walletAddress} />

                        <Button
                            className="
                                bg-gradient-to-r from-purple-600 to-cyan-500
                                text-white px-4 py-2
                                shadow-[0_0_12px_rgba(139,92,246,0.7)]
                                hover:opacity-90 transition-all
                                rounded-md
                            "
                            onClick={() => logout()}
                        >
                            Disconnect
                        </Button>
                    </>
                )}
            </div>
        </header>
    )
}
