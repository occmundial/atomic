import spacing from '@/tokens/spacing'
import grid from '@/tokens/grid'
import colors from '@/tokens/colors'

import { ModalProps } from './'

const styles = {
  '@keyframes modalFadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes modalFadeDown': {
    from: { opacity: 0, marginTop: -spacing.xLarge },
    to: { opacity: 1, marginTop: 0 }
  },
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 5, 0.85)',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: '0.3s all',
    cursor: 'pointer'
  },
  overlayShow: {
    animation: '0.3s $modalFadeIn linear'
  },
  overlayHide: {
    opacity: 0
  },
  noClose: {
    cursor: 'default'
  },
  cardWrapper: {
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh'
  },
  cardBlock: {
    margin: spacing.gutter,
    [`@media screen and (max-width:${grid.xs - 1}px)`]: {
      margin: ({ fullSize }) => fullSize && 0
    }
  },
  card: {
    maxWidth: '100%',
    cursor: 'auto',
    transition: '0.3s opacity, 0.3s margin-top',
    padding: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      padding: spacing.medium
    },
    [`@media screen and (max-width:${grid.xs - 1}px)`]: {
      padding: ({ fullSize }: ModalProps) => fullSize && spacing.base,
      minHeight: ({ fullSize }: ModalProps) => fullSize && '100vh',
      borderRadius: ({ fullSize }: ModalProps) => fullSize && 0
    }
  },
  cardShow: {
    animation: '0.3s $modalFadeDown ease-out'
  },
  cardHide: {
    opacity: 0,
    marginTop: -spacing.xLarge
  },
  xl: {
    width: 1024
  },
  lg: {
    width: 820
  },
  md: {
    width: 520,
    [`@media screen and (max-width:${grid.sm - 1}px)`]: {
      width: 322,
      maxWidth: '100%'
    }
  },
  sm: {
    width: 322,
    maxWidth: '100%'
  },
  top: {
    marginBottom: spacing.small
  },
  title: {},
  closeIcon: {
    height: spacing.medium,
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    marginLeft: -spacing.small,
    marginRight: -spacing.small,
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    transition: '0.1s height',
    [`@media screen and (min-width:${grid.sm}px)`]: {
      marginLeft: -spacing.medium,
      marginRight: -spacing.medium,
      paddingLeft: spacing.medium,
      paddingRight: spacing.medium
    },
    '&::-webkit-scrollbar': {
      width: 6
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.grey200,
      borderRadius: 3
    }
  },
  bottom: {
    textAlign: 'right',
    marginTop: spacing.tiny
  },
  secBtn: {
    marginTop: spacing.small
  },
  mainBtn: {
    marginLeft: spacing.base,
    marginTop: spacing.small
  },
  imgLeft: {
    width: 200,
    backgroundImage: ({ imgLeft }: ModalProps) =>
      `url(${imgLeft?.img || null})`,
    backgroundPosition: ({ imgLeft }: ModalProps) =>
      `center ${imgLeft?.position || 'center'}`,
    backgroundSize: ({ imgLeft }: ModalProps) =>
      imgLeft?.size === 'contain' ? '100% auto' : imgLeft?.size || 'cover',
    backgroundColor: ({ imgLeft }: ModalProps) => imgLeft?.color || null,
    backgroundRepeat: 'no-repeat',
    borderRadius: [spacing.radius, 0, 0, spacing.radius],
    marginLeft: -spacing.small,
    marginTop: -spacing.small,
    marginBottom: -spacing.small,
    marginRight: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      marginLeft: -spacing.medium,
      marginTop: -spacing.medium,
      marginBottom: -spacing.medium,
      marginRight: spacing.medium
    }
  },
  imgTop: {
    position: 'relative',
    height: ({ imgTop }: ModalProps) => imgTop?.height || 128,
    backgroundImage: ({ imgTop }: ModalProps) => `url(${imgTop?.img || null})`,
    backgroundPosition: ({ imgTop }: ModalProps) =>
      `${imgTop?.position || 'center'} center`,
    backgroundSize: ({ imgTop }: ModalProps) =>
      imgTop?.size === 'contain' ? 'auto 100%' : imgTop?.size || 'cover',
    backgroundColor: ({ imgTop }: ModalProps) => imgTop?.color || null,
    backgroundRepeat: 'no-repeat',
    borderRadius: [spacing.radius, spacing.radius, 0, 0],
    marginLeft: -spacing.small,
    marginTop: -spacing.small,
    marginBottom: spacing.small,
    marginRight: -spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      marginLeft: -spacing.medium,
      marginTop: -spacing.medium,
      marginBottom: spacing.medium,
      marginRight: -spacing.medium
    }
  },
  closePosition: {
    position: 'absolute',
    top: spacing.small,
    right: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      top: spacing.medium,
      right: spacing.medium
    }
  }
}

export default styles
