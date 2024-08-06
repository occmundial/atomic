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
    height: 52.8,
    '& $placeholder': {
      height: 43.63
    },
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 79.19,
      '& $placeholder': {
        height: 65.45
      }
    }
  },
  h1: {
    height: 35.19,
    '& $placeholder': {
      height: 29.09
    },
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 52.8,
      '& $placeholder': {
        height: 43.63
      }
    }
  },
  h2: {
    height: 30.8,
    '& $placeholder': {
      height: 25.45
    },
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 44,
      '& $placeholder': {
        height: 36.63
      }
    }
  },

  h3: {
    height: 26.39,
    '& $placeholder': {
      height: 21.81
    },
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 30.8,
      '& $placeholder': {
        height: 25.45
      }
    }
  },
  h4: {
    height: 22,
    '& $placeholder': {
      height: 18.18
    },
    [`@media screen and (min-width:${grid.sm}px)`]: {
      height: 26.39,
      '& $placeholder': {
        height: 21.81
      }
    }
  },
  h5: {
    height: 19.8,
    '& $placeholder': {
      height: 16.36
    }
  },
  tag: {
    height: 15,
    '& $placeholder': {
      height: 6.66
    }
  },
  bodyXLarge: {
    height: 30,
    '& $placeholder': {
      height: 13.33
    }
  },
  bodyLargeStrong: {
    height: 27,
    '& $placeholder': {
      height: 12
    }
  },
  bodyLarge: {
    height: 27,
    '& $placeholder': {
      height: 12
    }
  },
  bodyRegularStrong: {
    height: 24,
    '& $placeholder': {
      height: 10.66
    }
  },
  bodyRegular: {
    height: 24,
    '& $placeholder': {
      height: 10.66
    }
  },
  bodySmallStrong: {
    height: 21,
    '& $placeholder': {
      height: 12
    }
  },
  bodySmall: {
    height: 21,
    '& $placeholder': {
      height: 9.33
    }
  },
  bodyXSmall: {
    height: 18,
    '& $placeholder': {
      height: 8
    }
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
