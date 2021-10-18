import spacing from '@/tokens/spacing'
import grid from '@/tokens/grid'
import colors from '@/tokens/colors'

const ASIDE_SIZE = 320

const styles = {
  '@global': {
    body: {
      overflow: 'hidden'
    }
  },
  '@keyframes overlayFadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes showFromLeft': {
    from: {
      left: -ASIDE_SIZE
    },
    to: { left: 0 }
  },
  '@keyframes showFromRight': {
    from: {
      right: -ASIDE_SIZE
    },
    to: { right: 0 }
  },
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 5, 0.85)',
    top: 0,
    left: 0,
    zIndex: 1000,
    cursor: 'pointer',
    transition: '0.3s opacity'
  },
  overlayShow: {
    animation: '0.3s $overlayFadeIn linear'
  },
  overlayHide: {
    opacity: 0
  },
  block: {
    height: '100%',
    width: ASIDE_SIZE,
    maxWidth: `calc(100% - ${spacing.medium}px)`,
    position: 'fixed',
    top: 0,
    backgroundColor: colors.bgWhite,
    overflow: 'hidden',
    transition: '0.3s left, 0.3s right'
  },
  showLeft: {
    animation: '0.3s $showFromLeft ease-out',
    left: 0
  },
  showRight: {
    animation: '0.3s $showFromRight ease-out',
    right: 0
  },
  hideLeft: {
    left: -ASIDE_SIZE
  },
  hideRight: {
    right: -ASIDE_SIZE
  },
  card: {
    cursor: 'auto',
    height: '100%',
    padding: 0,
    overflow: 'auto'
  },
  content: {
    backgroundColor: colors.bgWhite,
    padding: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      padding: spacing.medium
    }
  },
  top: {
    backgroundColor: colors.bgGrey,
    padding: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      padding: spacing.medium
    }
  },
  topContent: {
    minWidth: 0
  },
  closeIcon: {
    height: spacing.medium,
    display: 'flex',
    alignItems: 'center'
  }
}

export default styles
