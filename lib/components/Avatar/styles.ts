import { createUseStyles } from 'react-jss'

import { AvatarProps } from './Avatar'

export default createUseStyles<any, AvatarProps>({
  circle: {
    position: 'relative',
    width: props => (props.size ? props.size : 70),
    height: props => (props.size ? props.size : 70),
    borderRadius: '50%',
    overflow: 'hidden'
  }
})
