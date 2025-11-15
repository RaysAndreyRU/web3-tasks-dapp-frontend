import { useState } from "react"
import type {AddressBadgeProps} from "@src/shared/ui/address-badge/AddressBadge.types.ts";
import {BaseModal} from "@src/shared/ui/base-modal/BaseModal.tsx";
import {CopyButton} from "@src/shared/ui/copy-button/CopyButton.tsx";


export const AddressBadge = ({ address }: AddressBadgeProps) => {
    const [open, setOpen] = useState(false)

    if (!address) return null

    const short = `${address.slice(0, 6)}...${address.slice(-4)}`

    return (
        <>
            <span
                onClick={() => setOpen(true)}
                className="
                    cursor-pointer text-xs font-mono text-purple-300
                    px-2 py-1 rounded-md border border-purple-500/40
                    bg-purple-500/10 hover:bg-purple-500/20
                    transition-all select-none
                "
            >
                {short}
            </span>
            <BaseModal
                open={open}
                onOpenChange={setOpen}
                title="Wallet Address"
                description="Full address and copy options"
            >
                <div className="flex flex-col gap-4">

                    <div className="
                        rounded-md p-3 bg-white/5 border border-white/10
                        font-mono text-sm break-all text-slate-200
                    ">
                        {address}
                    </div>

                    <CopyButton text={address} />
                </div>
            </BaseModal>
        </>
    )
}
