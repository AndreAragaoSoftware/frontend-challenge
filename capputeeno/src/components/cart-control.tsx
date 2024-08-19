import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from './icons/cart-icon'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const CartCount = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  padding: 3px 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
`

const Container = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`

export function CartControl() {
  const router = useRouter()
  const { value: cartItems } = useLocalStorage('cart-items', [])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleNavigateToCart = () => {
    router.push('/cart')
  }

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {isClient && cartItems.length > 0 && (
        <CartCount>{cartItems.length}</CartCount>
      )}
    </Container>
  )
}
