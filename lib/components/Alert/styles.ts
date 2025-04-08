import { createUseStyles } from 'react-jss'

import { CT } from '@/constants/index'
import stylesCT from './stylesCT'
import stylesOCC from './stylesOCC'

export default createUseStyles(
  process.env.ATOMIC_BRAND === CT ? stylesCT : stylesOCC
)
