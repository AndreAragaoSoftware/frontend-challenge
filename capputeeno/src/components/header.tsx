"use client" // Renderiza do lado do cliente
import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputSearchIcon } from './primary-input'
import { CartControl } from "./cart-control"
import { useFilter } from "@/hooks/useFilter"

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

interface HeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  // O Props está no default-proders.tsx
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`

export function Header(pros : HeaderProps){
  const {setSearch, search} = useFilter();
    return (
      <TagHeader>
        <Logo className={sairaStencil.className}>Capputeeno</Logo>
        <div>
          <PrimaryInputSearchIcon 
            value={search}
            handleChange={setSearch}
            placeholder="Procurando por algo específico?" 
          />
          <CartControl/>
        </div>
      </TagHeader>
    )
}