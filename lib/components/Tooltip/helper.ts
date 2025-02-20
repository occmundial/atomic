import colors from '@/tokens/colors'
import colorsNew from '@/tokens/future/colors.json'
const { infoLight, white, grey900, info } = colors

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
  INFO = 'info',
  PURPLE = 'purple'
}

export const colorsArrow = {
  [Themes.DARK]: {
    fill: colorsNew['alpha']['black']['100'],
    outline: white
  },
  [Themes.LIGHT]: {
    fill: white,
    outline: 'transparent'
  },
  [Themes.INFO]: {
    fill: infoLight,
    outline: 'transparent'
  },
  [Themes.PURPLE]: {
    fill: info,
    outline: white
  }
}

export type TooltipThemes = `${Themes}`

export type Strategies = 'absolute' | 'fixed'
