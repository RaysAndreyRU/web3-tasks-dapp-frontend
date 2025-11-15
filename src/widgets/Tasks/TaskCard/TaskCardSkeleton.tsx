import {Card} from "@src/shared/ui/shadcn/card.tsx";
import {Skeleton} from "@src/shared/ui/shadcn/skeleton.tsx";


export const TaskCardSkeleton = () => {
    return (
        <Card className="p-4 border border-white/10 bg-[#0b001a]/60 rounded-xl space-y-3">
            <Skeleton className="h-6 w-2/3 bg-purple-900/30" />
            <Skeleton className="h-4 w-full bg-purple-900/20" />
            <Skeleton className="h-4 w-3/4 bg-cyan-900/20" />
        </Card>
    )
}
