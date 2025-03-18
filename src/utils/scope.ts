import { useState } from 'react'
import colors from '@/tokens/colors'
import colorsNew from '@/tokens/future/colors.json'
import spacing from '@/tokens/spacing'
import grid from '@/tokens/grid'
import * as icons from '@/tokens/icons'
import iconSizes from '@/tokens/iconSizes'
import shadows from '@/tokens/shadows'
import ctColors from '@/tokens/ct/colors.json'

const scope = {
  colors,
  spacing,
  icons,
  iconSizes,
  shadows,
  useState,
  colorsNew,
  grid,
  ct:{
    colors: ctColors
  }
}

export default scope
