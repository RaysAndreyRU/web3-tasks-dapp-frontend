import type { TaskResponse } from '@src/entities/Task/model/schema.ts'


export interface TasksGridProps {
  tasks: TaskResponse[]
  isVerifying?: boolean
  onVerify: (id: number) => void
}
