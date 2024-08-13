'use client'

import { DefaultPageLayout } from "@/components/default-page-layout";
import { FilterBar } from "@/components/filter-bar";
import { ProductList } from "@/components/products-list";
import styled from "styled-components";

const PagerWapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <DefaultPageLayout>
      <PagerWapper>
        <FilterBar />
        <ProductList />
      </PagerWapper>
    </DefaultPageLayout>
  )
}
