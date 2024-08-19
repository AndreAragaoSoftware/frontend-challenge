'use client'

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
  grid-gap: 32px;
  width: 100%;
  margin-top: 32px;
  justify-content: space-around; /* ou space-between, dependendo do efeito desejado */
`


export function ProductList() {
    const { data } = useProducts();
    console.log(data)
    return (
      <ListContainer>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price_in_cents}
            image={product.image_url}
            id={product.id}
          />
        ))}
      </ListContainer>
    )
}