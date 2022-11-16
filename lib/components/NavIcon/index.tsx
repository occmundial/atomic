import React, { EventHandler, MouseEvent, useState } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'
import colors from '@/tokens/colors'

export interface NavIconProps {
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

const OPACITY = 0.6

const NavIcon = ({
  iconName,
  selected,
  label,
  onClick,
  direction,
  className,
  testId,
  width,
  white,
  showBar
}: NavIconProps) => {
  const classes = useStyles()
  const [hover, setHover] = useState(false)
  return (
    <div
      className={classnames(
        classes.cont,
        { [classes.white]: white },
        { [classes.black]: !white },
        { [classes.selectedWhite]: selected && white },
        { [classes.selected]: selected && !white },
        { [classes.showBarSec]: showBar && white },
        { [classes.showBar]: showBar && !white },
        className
      )}
      onClick={onClick}
      style={{ width }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-testid={testId}
    >
      <Flexbox
        display="flex"
        direction={direction}
        justifyContent="center"
        alignItems="center"
        className={classes.flex}
      >
        <Icon
          iconName={iconName}
          size={iconSizes.base}
          className={classnames(classes.icon, {
            [classes.withOpacity]: hover && white
          })}
        />
        {label && (
          <Text micro current>
            <span
              className={classnames(
                classes.text,
                { [classes.withOpacity]: hover && white },
                { [classes.pushText]: direction !== 'col' }
              )}
            >
              {label}
            </span>
          </Text>
        )}
      </Flexbox>
    </div>
  )
}

export default NavIcon
