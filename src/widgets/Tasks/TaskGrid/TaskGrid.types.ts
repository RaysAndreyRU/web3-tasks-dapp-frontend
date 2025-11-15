

export interface TasksGridProps {
  tasks: Task[]
  isVerifying?: boolean
  onVerify: (id: number) => void
}
