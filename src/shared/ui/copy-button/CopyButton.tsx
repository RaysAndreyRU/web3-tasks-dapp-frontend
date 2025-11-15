import { Copy } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@src/shared/ui/shadcn/button"
import type { CopyButtonProps } from "./CopyButton.types"

export const CopyButton = ({ text, className }: CopyButtonProps) => {
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text)

            toast.success("Copied!", {
                description: "Address copied to clipboard",
            })
        } catch (e) {
            toast.error("Failed to copy")
        }
    }

    return (
        <Button
            onClick={copy}
            className={`
                flex items-center gap-2 px-4 py-2 rounded-md
                text-white font-medium
                bg-gradient-to-r from-purple-600 to-cyan-500
                shadow-[0_0_12px_rgba(139,92,246,0.7)]
                hover:opacity-90 transition-all
                ${className}
            `}
        >
            <Copy size={16} className="opacity-90" />
            Copy
        </Button>
    )
}
