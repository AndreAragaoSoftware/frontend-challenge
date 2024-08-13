"use client"

import styled from "styled-components"

export const DefaultPageLayout = styled.div`
  padding: 34px 160px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 12px 24px;
  }
`