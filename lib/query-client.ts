import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Stale time - data is considered fresh for 5 minutes
      staleTime: 5 * 60 * 1000,
      // Cache time - data stays in cache for 10 minutes after becoming unused
      gcTime: 10 * 60 * 1000,
      // Retry failed requests 3 times
      retry: 3,
      // Retry delay increases exponentially
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      // Refetch on window focus
      refetchOnWindowFocus: false,
      // Refetch on reconnect
      refetchOnReconnect: true,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
      // Show error notifications for mutations
      onError: (error) => {
        console.error("[v0] Mutation Error:", error)
      },
    },
  },
})
