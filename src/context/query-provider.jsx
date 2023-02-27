import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchInterval:60000*60
      },
    },
})

export const QueryProvider = ({children}) => {
    return (
        <QueryClientProvider client={client}>
          {children}
        </QueryClientProvider>
    )
}
