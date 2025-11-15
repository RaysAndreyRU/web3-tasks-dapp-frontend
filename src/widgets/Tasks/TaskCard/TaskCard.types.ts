import type { TaskResponse } from '@src/entities/Task/model/schema.ts'

export interface TaskCardProps {
  task: TaskResponse
  isVerifying?: boolean
  onVerify: () => void
}