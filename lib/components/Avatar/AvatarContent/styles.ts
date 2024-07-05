import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import fonts from '@/tokens/future/fonts.json'
import { objectToFontValue } from '@/utils/font'

const { avatar, text, border } = colors
const transition = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'

export default createUseStyles({
  wrap: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  cont: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    overflow: 'hidden',
    background: avatar.bg.default,
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  initials: {
    display: 'inline-block',
    font: objectToFontValue(fonts['body-regular-strong']),
    color: text.indigo.primary,
    gridRowStart: 1,
    gridColumnStart: 1,
    textAlign: 'center'
  },
  disabled: {
    pointerEvents: 'none',
    background: avatar.bg.disabled,
    '& $camera': {
      opacity: 1
    }
  },
  disabledInitials: {
    color: text.corp.disabled
  },
  clickable: {
    transition,
    '&:hover': {
      background: avatar.bg.hover
    },
    '&:active': {
      background: avatar.bg.active
    }
  },
  editable: {
    '&:hover $camera': {
      opacity: 1
    },
    '&:hover $overlay': {
      background: avatar.bg.overlay.hover
    },
    '&:active $overlay': {
      background: avatar.bg.overlay.active
    }
  },
  person: {
    gridRowStart: 1,
    gridColumnStart: 1,
    transition
  },
  photo: {
    border: `1px solid ${border.default.subtle}`
  },
  hoverPhoto: {
    '&:hover $overlay': {
      background: avatar.bg.overlay.hover
    },
    '&:active $overlay': {
      background: avatar.bg.overlay.active
    }
  },
  camera: {
    gridRowStart: 1,
    gridColumnStart: 1,
    opacity: 0,
    transition
  },
  overlay: {
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    transition,
    border: `1px solid transparent`
  }
})
