import { formtPrice } from '@/utils/format-price'
import styled from 'styled-components'

interface ProductCardProps {
  image: string
  title: string
  price: number
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--shapes);
    }
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    color: var(--shapes-dark);
  }
`

export function ProductCard(props: ProductCardProps) {

  const price = formtPrice(props.price) // Funação para formatar o preço pra R$

  return (
    <Card>
      <img src={props.image} alt={props.title} /> 
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p> 
      </div>
    </Card>
  )
}
