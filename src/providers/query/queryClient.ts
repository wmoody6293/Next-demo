import {QueryClient, QueryCache, MutationCache} from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 6,
            gcTime: 1000 * 60 * 15,
            refetchOnWindowFocus: false,
        }
    },
    queryCache: new QueryCache({
        onError: (error) => console.log('Error in queryCache: ', error.message)
    }),
    mutationCache: new MutationCache({
        onError: (error) => console.log('Error in mutationCache: ', error.message)
    })
})