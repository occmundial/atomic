import { createUseStyles } from 'react-jss'

import iconSizes from '@/tokens/iconSizes'

import { IconProps } from './'

export default createUseStyles<any, IconProps>({
  icon: {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: ({ size }: IconProps) => (size ? size : iconSizes.base),
    height: ({ size }: IconProps) => (size ? size : iconSizes.base),
    border: '0',
    outline: '0',
    fill: ({ color }: IconProps) => (color ? color : 'currentcolor'),
    transition: ({ transition }: IconProps) =>
      transition ? transition : '0.3s all',
    '&:hover': {
      fill: ({ hoverColor }: IconProps) => (hoverColor ? hoverColor : null)
    }
  },
  click: { cursor: 'pointer' }
})
