import styled from 'styled-components'
import { BackwardIcon } from './icons/Backward-icon'
import { useRouter } from 'next/navigation'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
`
interface BtnProps {
    navigate: string;
}

export function BackBtn({ navigate }: BtnProps) {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

  return (
    <Button onClick={handleNavigate}>
      <BackwardIcon />
      Voltar
    </Button>
  )
}
