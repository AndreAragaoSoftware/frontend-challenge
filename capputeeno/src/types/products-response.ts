import { Product } from "./product"

export interface ProductsFretchResponse {
    data: {
        allProducts: Product[] // É um array de Produtos
    }
}