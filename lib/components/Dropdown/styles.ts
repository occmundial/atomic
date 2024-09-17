import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import shadows from '@/tokens/future/shadows.json'

export default createUseStyles({
  content: {
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    overflow: 'hidden'
  },
  showContent: {
    transition: 'transform cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s'
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateRows: '0fr',
    width: 280,
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    opacity: 0,
    backgroundColor: colors.bg.surface.default,
    position: 'absolute',
    top: `calc(100% + ${spacing['size-4']})`,
    zIndex: 2,
    borderRadius: borderRadius['br-sm'],
    border: `1px solid ${colors.border.default.default}`,
    padding: spacing['size-2'],
    boxShadow: shadows['elevation-elevation-5']
  },
  showContentWrapper: {
    opacity: 1,
    gridTemplateRows: '1fr',
    transition:
      'grid-template-rows cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, opacity cubic-bezier(0.25,0.46,0.45,0.94) 0.2s 0.05s'
  },
  right: {
    right: 0
  },
  left: {
    left: 0
  }
})
