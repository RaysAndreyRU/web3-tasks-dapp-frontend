import type { FooterProps } from './Footer.types'
import {cn} from "@src/shared/utils/cn.ts";
import {Separator} from "@src/shared/ui/shadcn/separator.tsx";

export const Footer = ({ className, showCredits = true, customText }: FooterProps) => {
    return (
        <footer
            className={cn(
                'relative w-full py-8 mt-12 flex flex-col items-center justify-center text-center overflow-hidden',
                'border-t border-white/10 bg-[#0b001a]/80 backdrop-blur-md',
                'shadow-[0_-0_25px_rgba(139,92,246,0.15)]',
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700/10 via-transparent to-transparent blur-3xl pointer-events-none" />

            <Separator className="w-1/2 bg-white/10 mb-4" />

            <p className="relative z-10 text-sm text-slate-400 tracking-wide">
                {customText || (
                    <>
                        © {new Date().getFullYear()}{' '}
                        <span className="text-purple-400 font-medium">Lumia Tasks</span> — All Rights Reserved
                    </>
                )}
            </p>

            {showCredits && (
                <p className="relative z-10 mt-1 text-xs text-slate-600">
                    Built by <span className="text-cyan-400">Rays Andrey</span> • Powered by Web3
                </p>
            )}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
        </footer>
    )
}
