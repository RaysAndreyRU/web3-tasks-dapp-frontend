import type { TasksGridProps } from '@src/widgets/Tasks/TaskGrid/TaskGrid.types.ts'
import { TaskCard } from '@src/widgets/Tasks/TaskCard/TaskCard.tsx'


export const TasksGrid = ({ tasks, isVerifying, onVerify }: TasksGridProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          isVerifying={isVerifying}
          onVerify={() => onVerify(task.id)}
        />
      ))}
    </div>
  )
}
