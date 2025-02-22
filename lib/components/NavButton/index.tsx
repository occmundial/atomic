import React, { EventHandler, MouseEvent } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

export interface NavButtonProps {
  selected?: boolean
  iconName?: string
  label?: string
  onClick?: EventHandler<MouseEvent>
  showBar?: boolean
  direction?: 'col' | 'row'
  className?: string
  width?: number
  white?: boolean
  testId?: string
}

const NavButton = ({
  iconName,
  selected,
  label,
  onClick,
  direction = 'row',
  className,
  testId,
  width,
  white,
  showBar
}: NavButtonProps) => {
  const classes = useStyles()
  return (
    <div
      className={classnames(
        classes.cont,
        { [classes.white]: white },
        { [classes.black]: !white },
        { [classes.selectedWhite]: selected && white },
        { [classes.selected]: selected && !white },
        { [classes.showBar]: showBar },
        className
      )}
      onClick={onClick}
      style={{ width }}
      data-testid={testId}
    >
      <Flexbox
        display="flex"
        direction={direction}
        justifyContent="center"
        alignItems="center"
        className={classes.flex}
      >
        {iconName && <Icon iconName={iconName} size={iconSizes.base} />}
        {label && (
          <Text bodyRegularStrong current>
            <span
              className={classnames(classes.text, {
                [classes.pushText]: direction === 'row' && iconName
              })}
            >
              {label}
            </span>
          </Text>
        )}
      </Flexbox>
    </div>
  )
}

export default NavButton
