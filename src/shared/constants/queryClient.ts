import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'



const handleError = (error: Error) => {
  toast.error('Something went wrong', {
    description: error.message,
    duration: 10_000,
    closeButton: true,
  })
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleError,
  }),
  mutationCache: new MutationCache({
    onError: handleError,
  }),
})
