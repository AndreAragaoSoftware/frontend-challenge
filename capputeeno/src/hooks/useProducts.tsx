import { ProductsFretchResponse } from '@/types/products-response'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { useFilter } from './useFilter'
import { mountQuery } from '@/utils/graphql-filters'
import { useDeferredValue } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFretchResponse> => {
  return axios.post(API_URL, {
    query,
  })
}

export function useProducts() {
  const { type, priority, search, page, setPage } = useFilter() // Agora pegando também o page e setPage
  const searchDefferred = useDeferredValue(search)
  const query = mountQuery(type, priority, page) // Passando a página atual para a query

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority, page],
    staleTime: 1000 * 60 * 1, // 1 minuto
  })

  const products = data?.data.data.allProducts
  const filteredProducts = products?.filter((product) =>
    product.name
      .toLocaleLowerCase()
      .includes(searchDefferred.toLocaleLowerCase())
  )

  return {
    data: filteredProducts,
    setPage, // Incluindo setPage para controle de paginação no componente
  }
}
