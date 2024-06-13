import { FloatingContext } from '@floating-ui/react'
import { CSSProperties, forwardRef, useMemo } from 'react'
type BeakIconProps = {
  fill?: string
  outline?: string
  context: FloatingContext
}

const arrowPosition = {
  top: (x?: string, y?: string) => ({
    top: 'calc(100% - 14.6px)',
    left: x,
    transform: 'rotate(-90deg)'
  }),
  bottom: (x?: string, y?: string) => ({
    top: '0',
    left: x,
    transform: 'rotate(90deg) translateX(calc(-100% - 12.5px))'
  }),
  left: (x?: string, y?: string) => ({
    top: y,
    left: '100%',
    transform: 'rotate(180deg) translateX(1px)'
  }),
  right: (x?: string, y?: string) => ({
    top: y,
    left: '0',
    transform: 'translateX(calc(-100% + 1px))'
  })
}

const BeakIcon = forwardRef<SVGSVGElement, BeakIconProps>(
  (
    {
      outline = 'white',
      fill = 'black',
      context: {
        placement,
        middlewareData: { arrow }
      }
    },
    ref
  ) => {
    const computedStyles = useMemo<CSSProperties>(() => {
      const positionMain = placement.split('-')[0]
      return arrowPosition[positionMain](arrow?.x, arrow?.y)
    }, [arrow, placement])

    return (
      <svg
        ref={ref}
        width="9"
        height="36"
        viewBox="0 0 9 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          ...computedStyles
        }}
      >
        <path
          d="M1.70711 18.7071L8.12132 25.1213C8.68393 25.6839 9 26.447 9 27.2426L9 8.75736C9 9.55301 8.68393 10.3161 8.12132 10.8787L1.70711 17.2929C1.31658 17.6834 1.31658 18.3166 1.70711 18.7071Z"
          fill={fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 28.5C8.77614 28.5 9 28.2761 9 28V27.6569C9 26.4634 8.52589 25.3188 7.68198 24.4749L2.26777 19.0607C1.68198 18.4749 1.68198 17.5251 2.26777 16.9393L7.68198 11.5251C8.5259 10.6812 9 9.53662 9 8.34315V8C9 7.72386 8.77614 7.5 8.5 7.5C8.22386 7.5 8 7.72386 8 8V8.34315C8 9.2714 7.63125 10.1616 6.97487 10.818L1.56066 16.2322C0.58435 17.2085 0.584348 18.7915 1.56066 19.7678L6.97487 25.182C7.63125 25.8384 8 26.7286 8 27.6569V28C8 28.2761 8.22386 28.5 8.5 28.5Z"
          fill={fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 28.5C8.77614 28.5 9 28.2761 9 28V27.6569C9 26.4634 8.52589 25.3188 7.68198 24.4749L2.26777 19.0607C1.68198 18.4749 1.68198 17.5251 2.26777 16.9393L7.68198 11.5251C8.5259 10.6812 9 9.53662 9 8.34315V8C9 7.72386 8.77614 7.5 8.5 7.5C8.22386 7.5 8 7.72386 8 8V8.34315C8 9.2714 7.63125 10.1616 6.97487 10.818L1.56066 16.2322C0.58435 17.2085 0.584348 18.7915 1.56066 19.7678L6.97487 25.182C7.63125 25.8384 8 26.7286 8 27.6569V28C8 28.2761 8.22386 28.5 8.5 28.5Z"
          fill={outline}
          fillOpacity="0.2"
        />
      </svg>
    )
  }
)

export default BeakIcon
