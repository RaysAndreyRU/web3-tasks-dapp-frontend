import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@src/shared/ui/shadcn/dialog.tsx";
import type {BaseModalProps} from "@src/shared/ui/base-modal/BaseModal.types.ts";


export const BaseModal = ({
   open,
   onOpenChange,
   title,
   description,
   children,
   className,
   }: BaseModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className={
                    className ??
                    "bg-[#0f021f] border border-white/10 text-slate-200 shadow-xl"
                }
            >
                <DialogHeader>
                    <DialogTitle className="text-white text-lg">
                        {title}
                    </DialogTitle>
                    {description && (
                        <DialogDescription className="text-slate-400">
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>

                <div className="mt-4">{children}</div>
            </DialogContent>
        </Dialog>
    )
}
