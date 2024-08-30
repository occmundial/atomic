import { createUseStyles } from 'react-jss'
import colors from './../../../tokens/future/colors.json'
import spacing from './../../../tokens/future/spacing.json'
import fonts from './../../../tokens/future/fonts.json'
import borderRadius from './../../../tokens/future/borderRadius.json'
import shadows from './../../../tokens/future/shadows.json'

import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing['size-5']
  },
  title: {
    font: objectToFontValue(fonts['heading-h5']),
    margin: 0
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing['size-4'],
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  link: {
    font: objectToFontValue(fonts['body-regular']),
    color: colors.text.corp.secondary,
    textDecoration: 'none',
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    '&:hover': {
      color: colors.text.corp.primary
    },
    '&:focus': {
      color: colors.text.corp.primary,
      boxShadow: shadows['focus-corp'],
      borderRadius: borderRadius['br-xs'],
      outline: 0
    }
  }
})
