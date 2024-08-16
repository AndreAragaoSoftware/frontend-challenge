
export interface Product {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string,
  description?: string,
  category?: string
}

// Criada para pegar quantidade dos produtos
export interface ProductInCart extends Product {
  quantity: number
}

export interface ProductFretchResponse {
  data: {
    Product: Product
  }
}