import dayjs from "dayjs"
import { Button } from "@src/shared/ui/shadcn/button"
import { Card } from "@src/shared/ui/shadcn/card"
import type { TaskCardProps } from "./TaskCard.types"

const typeLabels = {
  TELEGRAM: "Telegram Task",
  LINK: "External Link",
  OTHER: "Task",
}

export const TaskCard = ({ task, isVerifying, onVerify }: TaskCardProps) => {
  return (
    <Card className="p-0 overflow-hidden border border-white/10 bg-[#0b001a]/60 shadow-[0_0_25px_rgba(139,92,246,0.2)]">
      {task.imageUrl && (
        <div className="w-full h-40 overflow-hidden">
          <img
            src={task.imageUrl}
            alt={task.title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-3">
        <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide bg-white/5 px-2 py-1 rounded-md w-fit">
          {typeLabels[task.type]}
        </span>
        <h2 className="text-xl font-semibold text-purple-300 leading-tight">
          {task.title}
        </h2>
        {task.slug && (
          <p className="text-xs text-slate-500">
            <span className="opacity-70">Slug:</span> {task.slug}
          </p>
        )}
        <p className="text-slate-400 text-sm">{task.description}</p>
        <p className="text-sm text-slate-400">
          Reward:{" "}
          <span className="text-cyan-400 font-semibold">{task.rewardPoints}</span>{" "}
          points
        </p>

        <p className="text-xs text-slate-500">
          Added: {dayjs(task.createdAt).format("MMM D, YYYY")}
        </p>

        {task.joinUrl && (
          <Button
            asChild
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 text-white mt-2"
          >
            <a href={task.joinUrl} target="_blank" rel="noopener noreferrer">
              {task.type === "TELEGRAM" ? "Open Telegram" : "Open Link"}
            </a>
          </Button>
        )}

        {task.verified ? (
          <Button
            disabled
            className="w-full bg-green-600/40 text-green-300 cursor-default mt-2"
          >
            Verified ✓
          </Button>
        ) : (
          <Button
            onClick={onVerify}
            disabled={isVerifying}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 mt-2"
          >
            {isVerifying ? "Verifying..." : "Verify Task"}
          </Button>
        )}
      </div>
    </Card>
  )
}
