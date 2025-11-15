import { LoaderIcon } from 'lucide-react'

import { cn } from '@src/shared/utils/cn.ts'

type SpinnerProps = {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <LoaderIcon
      className={cn(
        'animate-spin [animation-duration:1.5s] text-primary w-5 h-5',
        className,
      )}
    />
  )
}
