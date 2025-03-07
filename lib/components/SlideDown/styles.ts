import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/future/spacing.json'
import colors from '@/tokens/future/colors.json'

export default createUseStyles({
  text: {
    cursor: 'pointer'
  },
  tag: {
    marginLeft: spacing['size-2'],
    pointerEvents: 'none'
  },
  icon: {
    marginTop: spacing['size-1'],
    marginLeft: spacing['size-2']
  },
  content: {
    overflow: 'hidden',
    transform: 'translateY(-10px)',
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
  },
  showContent: {
    transform: 'translateY(0px)',
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s',
    marginBottom: spacing['size-3']
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateRows: '0fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    opacity: 0
  },
  showContentWrapper: {
    opacity: 1,
    gridTemplateRows: '1fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s'
  },
  divider: {
    boxShadow: `inset 0 -1px 0px 0px ${colors.border.default.subtle}`
  },
  flexContainer: {
    gap: spacing['size-4']
  },
  rotateIcon: {
    transform: 'rotate(-180deg)'
  },
  leftIcon: {
    marginRight: spacing['size-2']
  },
  button: {
    cursor: 'pointer'
  },
  normalPadding: {
    paddingTop: spacing['size-3'],
    paddingBottom: spacing['size-3']
  },
  largePadding: {
    paddingTop: spacing['size-4'],
    paddingBottom: spacing['size-4']
  },
  buttonPadding: {
    paddingLeft: spacing['size-4'],
    paddingRight: spacing['size-4']
  }
})
