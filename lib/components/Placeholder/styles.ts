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
  top0: {
    marginTop: spacing['size-0']
  },
  top1: {
    marginTop: spacing['size-1']
  },
  top2: {
    marginTop: spacing['size-2']
  },
  top3: {
    marginTop: spacing['size-3']
  },
  top4: {
    marginTop: spacing['size-4']
  },
  top5: {
    marginTop: spacing['size-5']
  },
  top6: {
    marginTop: spacing['size-6']
  },
  top7: {
    marginTop: spacing['size-7']
  },
  top8: {
    marginTop: spacing['size-8']
  },
  top9: {
    marginTop: spacing['size-9']
  },
  top10: {
    marginTop: spacing['size-10']
  },
  top11: {
    marginTop: spacing['size-11']
  },
  top12: {
    marginTop: spacing['size-12']
  },
  bottom0: {
    marginBottom: spacing['size-0']
  },
  bottom1: {
    marginBottom: spacing['size-1']
  },
  bottom2: {
    marginBottom: spacing['size-2']
  },
  bottom3: {
    marginBottom: spacing['size-3']
  },
  bottom4: {
    marginBottom: spacing['size-4']
  },
  bottom5: {
    marginBottom: spacing['size-5']
  },
  bottom6: {
    marginBottom: spacing['size-6']
  },
  bottom7: {
    marginBottom: spacing['size-7']
  },
  bottom8: {
    marginBottom: spacing['size-8']
  },
  bottom9: {
    marginBottom: spacing['size-9']
  },
  bottom10: {
    marginBottom: spacing['size-10']
  },
  bottom11: {
    marginBottom: spacing['size-11']
  },
  bottom12: {
    marginBottom: spacing['size-12']
  }
})
