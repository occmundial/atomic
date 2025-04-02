import colors from '@/tokens/ct/colors.json'
import shadowsOCC from '@/tokens/shadows'
import spacing from '@/tokens/ct/spacing.json'
import grid from '@/tokens/grid'

const styles = {
  card: {
    background: colors.bg.white,
    borderRadius: spacing['size-2'],
    padding: spacing['size-5'],
    position: 'relative',
    transition: '0.3s box-shadow, 0.3s transform',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: spacing['size-4']
    }
  },
  cardNoPadding: {
    extend: 'card',
    padding: 0,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      padding: 0
    }
  },
  flat: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors['option-card']['border']['default'],
    '&:hover': {
      borderColor: colors['option-card']['border']['hover']
    },
    zIndex: 'auto'
  },
  rest: {
    boxShadow: shadowsOCC.lvl0,
    zIndex: 'auto'
  },
  raised: {
    boxShadow: shadowsOCC.lvl4,
    zIndex: 4
  },
  raisable: {
    '&:hover': {
      boxShadow: shadowsOCC.lvl4,
      transform: `translateY(-${spacing['size-2']})`,
      zIndex: 4
    }
  }
}

export default styles
