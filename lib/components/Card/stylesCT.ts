import colors from '@/tokens/ct/colors.json'
import spacing from '@/tokens/ct/spacing.json'
import grid from '@/tokens/grid'

const styles = {
  card: {
    background: colors.bg.white,
    borderRadius: spacing['size-2'],
    padding: `${spacing['size-4']} ${spacing['size-3']}`,
    position: 'relative',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: `${spacing['size-5']} ${spacing['size-4']}`
    }
  },
  cardNoPadding: {
    extend: 'card',
    padding: 0
  },
  flat: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors['option-card']['border']['default'],
    '&:hover': {
      borderColor: colors['option-card']['border']['hover']
    },
    '&:active': {
      borderColor: colors['option-card']['border']['active']
    }
  },
  rest: {},
  raised: {},
  raisable: {}
}

export default styles
