'use client'

import Image from "next/image";
import { useMemo } from 'react'
import styles from "./page.module.css";
import { FilterBar } from "@/components/filter-bar";
import { ProductList } from "@/components/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = useMemo(() => new QueryClient(), [])
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  )
}
