"use client"

import { FilterContextProvider } from '@/contexts/filter-context'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useMemo, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface DefaultProvidersProps {
  children: React.ReactNode
}

const theme = {
  desktopBreakpoint: "768px"
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
    const client = useMemo(() => new QueryClient(), [])
    return (
        <QueryClientProvider client={client}>
          <FilterContextProvider>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </FilterContextProvider>
        </QueryClientProvider>
    )
}