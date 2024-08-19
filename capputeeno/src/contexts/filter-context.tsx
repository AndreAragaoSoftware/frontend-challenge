'use client'
import { FilterType } from '@/types/filter-types'
import { PriorityTypes } from '@/types/priority-types'
import { createContext, useState } from 'react'

// Definindo o contexto inicial com tipos e valores default
export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityTypes) => {},
})

interface ProviderProps {
  children: React.ReactNode
}

// Provedor do contexto que gerencia os filtros
export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0) // Gerenciamento do estado da página
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(PriorityTypes.POPOLARITY)

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setType,
        setSearch,
        setPage,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
