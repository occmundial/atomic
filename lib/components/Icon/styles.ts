import { createUseStyles } from 'react-jss'

import iconSizes from '@/tokens/iconSizes'

import { IconProps } from './'
import colors from '@/tokens/colors'

export default createUseStyles<any, IconProps>({
  icon: {
    boxSizing: 'border-box',
    width: props => (props.size ? props.size : iconSizes.base),
    height: props => (props.size ? props.size : iconSizes.base),
    lineHeight: props =>
      props.size ? `${props.size}px` : `${iconSizes.base}px`,
    fontSize: props => (props.size ? props.size : iconSizes.base),
    padding: 0,
    background: 'none',
    border: '0',
    outline: '0',
    color: props => (props.color ? props.color : colors.grey900),
    transition: '0.3s all',
    '&:hover': {
      color: props => (props.hoverColor ? props.hoverColor : colors.grey900)
    }
  },
  inline: { display: 'inline' },
  inlineBlock: { display: 'inline-block' },
  click: { cursor: 'pointer' }
})
