import { formatPrice } from '@/utils/format-price'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { Divider } from './divider'

interface ProductCardProps {
  image: string
  title: string
  price: number
  id: string
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 355px;

  img {
    width: 100%;
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
    padding: 8px 12px;
    width: 100%;

    > div {
      width: 355px;
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
  const router = useRouter()
  const price = formatPrice(props.price) // Funação para formatar o preço

  const handleNagigate = () => {
    router.push("/product?id=" + props.id) // Navega para a página do produto com o ID
  }

  return (
    <Card onClick={handleNagigate}>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <Divider/>
        <p>{price}</p>
      </div>
    </Card>
  )
}
