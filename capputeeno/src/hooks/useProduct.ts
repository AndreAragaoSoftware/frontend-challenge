import { ProductFretchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (productId: string): AxiosPromise<ProductFretchResponse> => {
  return axios.post(API_URL, { query: `
        query {
            Product(id: "${productId}") {
                name
                category
                price_in_cents
                description
                image_url
                created_at
            }
        }
    ` })
}

export function useProduct(id: string){
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id, // Só dispara a requisição caso tenha o id
        staleTime: 1000 * 60 * 5 // Por quanto tempo a requisição é válida, diminui a quantidade de requisições
    })

    return {
        data: data?.data?.data.Product
    }
}