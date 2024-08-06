import { classTranslation } from '../Text/helper'

type SpacingDirecion = 'top' | 'bottom'

export const validNewSpacingValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12'
]

export function parseSpacingValueClass(
  value: string,
  direction: SpacingDirecion
): string | undefined {
  if (validNewSpacingValues.includes(value)) return `${direction}${value}`
  return classTranslation[value]
}
