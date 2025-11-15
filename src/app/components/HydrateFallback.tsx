import { Spinner } from '@src/shared/ui/shadcn/Spinner.tsx'

export const HydrateFallback = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner className="w-8 h-8" />
    </div>
  )
}
