'use client'

import { FilterBar } from "@/components/filter-bar";
import { ProductList } from "@/components/products-list";
import styled from "styled-components";

const PagerWapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`

export default function Home() {
  return (
    <PagerWapper>
      <FilterBar />
      <ProductList />
    </PagerWapper>
  )
}
