import { PriorityTypes } from './../types/priority-types'
import { FilterType } from '@/types/filter-types'

export function getCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) return 'mugs'
  if (type === FilterType.SHIRT) return 't-shirts'
  return ''
}

export function getFieldByPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS)
    return { field: 'created_at', order: 'ASC' }
  if (priority === PriorityTypes.BIGGEST_PRICE)
    return { field: 'price_in_cents', order: 'DSC' }
  if (priority === PriorityTypes.MINOR_PRICE)
    return { field: 'price_in_cents', order: 'ASC' }
  return { field: 'sales', order: 'DSC' }
}

export const mountQuery = (
  type: FilterType,
  priority: PriorityTypes,
  page: number
) => {
  const sortSettings = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(type)

  return `
      query {
        allProducts(
          page: ${page},
          perPage: 12,
          sortField: "${sortSettings.field}",
          sortOrder: "${sortSettings.order}",
          ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ''} 
        ) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `
}
