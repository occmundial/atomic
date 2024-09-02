import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import colors from '@/tokens/future/colors.json'
import newSpacing from '@/tokens/future/spacing.json'
import shadows from '@/tokens/future/shadows.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import grid from '@/tokens/grid'
import fonts from '@/tokens/future/fonts.json'
import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  list: {
    display: 'grid',
    gridTemplateRows: '0fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    opacity: 0,
    [`@media (min-width: ${grid.xs}px)`]: {
      opacity: 1,
      gridTemplateRows: '1fr'
    }
  },
  toggle: {
    opacity: 1,
    gridTemplateRows: '1fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s'
  },
  content: {
    overflow: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    display: 'flex',
    flexDirection: 'column',
    rowGap: newSpacing['size-4'],
    [`@media (min-width: ${grid.xs}px)`]: {
      transform: 'translateY(0px)',
      overflow: 'visible'
    }
  },
  showContent: {
    [`@media (max-width: ${grid.xs - 1}px)`]: {
      transform: 'translateY(0px)',
      transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s',
      marginBottom: newSpacing['size-3']
    }
  },
  collapsible: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (min-width: ${grid.xs}px)`]: {
      cursor: 'default'
    }
  },
  arrow: {
    marginLeft: spacing.tiny,
    marginBottom: -spacing.xTiny,
    display: 'inline-block',
    [`@media (min-width: ${grid.xs}px)`]: {
      display: 'none'
    }
  },
  arrowUp: {
    transform: 'rotate(-180deg)'
  },
  link: {
    font: objectToFontValue(fonts['body-regular']),
    color: colors.text.corp.secondary,
    textDecoration: 'none',
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    '&:hover': {
      color: colors.text.corp.primary
    },
    '&:focus-visible': {
      color: colors.text.corp.primary,
      boxShadow: shadows['focus-corp'],
      borderRadius: borderRadius['br-xs'],
      outline: 0
    }
  },
  iconWrapper: {
    marginBottom: spacing.tiny,
    marginRight: spacing.tiny,
    display: 'inline-block'
  },
  title: {
    padding: [newSpacing['size-4'], 0],
    [`@media (min-width: ${grid.xs}px)`]: {
      display: 'none',
      padding: 0,
      marginBottom: newSpacing['size-5']
    }
  },
  titleColor: {
    font: objectToFontValue(fonts['heading-h5']),
    margin: 0
  },
  titleDesktop: {
    display: 'none',
    [`@media (min-width: ${grid.xs}px)`]: {
      marginBottom: newSpacing['size-5'],
      display: 'block'
    }
  }
})
