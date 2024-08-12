export function formtPrice(valeueInCents: number) {
  const formattedValue = valeueInCents / 100
  return formattedValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}