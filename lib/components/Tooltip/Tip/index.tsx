import {
  FloatingArrow,
  FloatingContext,
  FloatingPortal
} from '@floating-ui/react'
import classNames from 'classnames'
import { CSSProperties, ComponentProps, LegacyRef, ReactNode, Ref } from 'react'
import { Strategies, Themes, TooltipThemes, colorsArrow } from '../helper'
import useStyles from './styles'
import BeakIcon from './BeakIcon'

type TipProps = {
  children: ReactNode
  showArrow: boolean
  refArrow: Ref<SVGSVGElement>
  refFloating: LegacyRef<HTMLDivElement>
  propsTip: ComponentProps<'div'>
  propsFloating: ComponentProps<'div'>
  styleTip: CSSProperties
  classNameTip: string
  theme?: TooltipThemes
  context: FloatingContext
  strategy: Strategies
  zIndex?: number
}

export function Tip({
  refArrow,
  theme,
  showArrow,
  children,
  context,
  refFloating,
  propsTip,
  propsFloating,
  styleTip,
  classNameTip,
  strategy,
  zIndex
}: TipProps) {
  const classes = useStyles()

  return (
    <FloatingPortal>
      <div
        {...propsTip}
        className={classNames(
          classes.tooltip,
          classNameTip,
          classes[theme] || classes.purple
        )}
        ref={refFloating}
        style={{ ...styleTip, zIndex, position: strategy }}
        {...propsFloating}
      >
        {children}
        {showArrow && (
          <BeakIcon
            ref={refArrow}
            context={context}
            fill={colorsArrow[theme]?.fill || colorsArrow[Themes.PURPLE].fill}
            outline={
              colorsArrow[theme]?.outline || colorsArrow[Themes.PURPLE].outline
            }
          />
        )}
      </div>
    </FloatingPortal>
  )
}
