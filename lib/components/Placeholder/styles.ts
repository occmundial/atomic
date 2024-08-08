import { createUseStyles } from 'react-jss'
import grid from '@/tokens/grid'
import spacing from '@/tokens/future/spacing.json'
import colorsNew from '@/tokens/future/colors.json'

export default createUseStyles({
  '@keyframes progress': {
    '0%': {
      transform: 'translate3d(-100%, 0, 0)'
    },
    '100%': {
      transform: 'translate3d(100%, 0, 0)'
    }
  },
  placeholder: {
    borderRadius: spacing['size-1'],
    animation: '$progress 2s ease-in-out infinite'
  },
  round: {
    borderRadius: '50%'
  },
  light: {
    background: colorsNew.skeleton.bg.default.default,
    overflow: 'hidden',
    '& $placeholder': {
      background: colorsNew.skeleton.bg.default.gradient
    }
  },
  dark: {
    background: colorsNew.skeleton.bg.inverse.default,
    overflow: 'hidden',
    '& $placeholder': {
      background: colorsNew.skeleton.bg.inverse.gradient
    }
  },
  display: {
    height: 48,
    margin: '2.4px 0',

    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 72,
      margin: '3.6px 0'
    }
  },
  h1: {
    height: 32,
    margin: '1.6px 0',
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 48,
      margin: '2.4px 0'
    }
  },
  h2: {
    height: 28,
    margin: '1.4px 0',
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 40,
      margin: '2px 0'
    }
  },
  h3: {
    height: 24,
    margin: '1.2px 0',
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 30.8,
      margin: '1.4px 0'
    }
  },
  h4: {
    height: 20,
    margin: '1px 0',
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 24,
      padding: '1.2px 0'
    }
  },
  h5: {
    height: 18,
    margin: '0.9px 0'
  },
  tag: {
    height: 10,
    margin: '2.5px 0'
  },
  bodyXLarge: {
    height: 20,
    margin: '5px 0'
  },
  bodyLargeStrong: {
    height: 18,
    margin: '4.5px 0'
  },
  bodyLarge: {
    height: 18,
    margin: '4.5px 0'
  },
  bodyRegularStrong: {
    height: 16,
    margin: '4px 0'
  },
  bodyRegular: {
    height: 16,
    margin: '4px 0'
  },
  bodySmallStrong: {
    height: 14,
    margin: '3.5px 0'
  },
  bodySmall: {
    height: 14,
    margin: '3.5px 0'
  },
  bodyXSmall: {
    height: 12,
    margin: '3px 0'
  },
  topxTiny: {
    marginTop: spacing['size-1']
  },
  toptiny: {
    marginTop: spacing['size-2']
  },
  topsmall: {
    marginTop: spacing['size-4']
  },
  topbase: {
    marginTop: spacing['size-5']
  },
  topmedium: {
    marginTop: spacing['size-6']
  },
  toplarge: {
    marginTop: spacing['size-8']
  },
  topxLarge: {
    marginTop: spacing['size-9']
  },
  bottomxTiny: {
    marginBottom: spacing['size-1']
  },
  bottomtiny: {
    marginBottom: spacing['size-2']
  },
  bottomsmall: {
    marginBottom: spacing['size-4']
  },
  bottombase: {
    marginBottom: spacing['size-5']
  },
  bottommedium: {
    marginBottom: spacing['size-6']
  },
  bottomlarge: {
    marginBottom: spacing['size-8']
  },
  bottomxLarge: {
    marginBottom: spacing['size-9']
  }
})
