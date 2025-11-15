import { useEffect, useState } from 'react'

import { useTasks } from '@src/entities/Task/api/hooks/useTasks'
import { useVerifyTask } from '@src/entities/Task/api/hooks/useVerifyTask'
import { useUserScore } from '@src/entities/User/api/hooks/useUserScore'
import { useAuthStore } from '@src/entities/User/store'

import { TaskCardSkeleton } from '@src/widgets/Tasks/TaskCard'
import { TasksGrid } from '@src/widgets/Tasks/TaskGrid/TaskGrid'
import { Card } from '@src/shared/ui/shadcn/card'
import { TelegramIdModal } from '@src/entities/User/ui/TelegramIdModal/TelegramIdModal.tsx'

export const TasksPage = () => {
  const { data: tasks, isLoading } = useTasks()
  const verifyTask = useVerifyTask()
  const { data: scoreData, isLoading: isScoreLoading } = useUserScore()

  const { user, isAuthenticated } = useAuthStore()
  const telegramUserId = user?.telegramUserId ?? null

  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false)

  useEffect(() => {
    if (isAuthenticated && !telegramUserId) {
      setIsTelegramModalOpen(true)
    }
  }, [isAuthenticated, telegramUserId])

  const handleVerifyClick = (id: number) => {
    if (!telegramUserId) {
      setIsTelegramModalOpen(true)
      return
    }

    verifyTask.mutate({
      id,
      dto: { telegramUserId },
    })
  }

  return (
    <div className="flex flex-col gap-6 py-6 px-4 sm:px-6 lg:px-12 text-white">
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-purple-400">
          Bounty Board
        </h1>

        <div className="text-lg">
          <span className="text-slate-300 mr-2">Score:</span>
          <span className="text-cyan-400 font-semibold">
            {isScoreLoading ? '...' : scoreData?.score ?? 0}
          </span>
        </div>
      </header>
      {isLoading && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <TaskCardSkeleton key={i} />
          ))}
        </div>
      )}
      {!isLoading && tasks && (
        <TasksGrid
          tasks={tasks.items}
          isVerifying={verifyTask.isPending}
          onVerify={handleVerifyClick}
        />
      )}
      {!isLoading && tasks?.items.length === 0 && (
        <Card className="text-center p-6 sm:p-8 border border-white/10 bg-[#0b001a]/60">
          <p className="text-slate-400">No tasks available</p>
        </Card>
      )}
      <TelegramIdModal
        open={isTelegramModalOpen}
        onOpenChange={setIsTelegramModalOpen}
      />
    </div>
  )
}
