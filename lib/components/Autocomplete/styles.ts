import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import { AutocompleteProps } from './'

export default createUseStyles<any, AutocompleteProps>({
  autoComplete: {
    position: 'relative'
  },
  droplist: {
    position: 'absolute',
    zIndex: 2,
    top: props =>
      props.textfieldProps?.label || props.textfieldProps?.lockHeight
        ? spacing.xLarge
        : 40,
    left: 0,
    width: '100%'
  }
})
