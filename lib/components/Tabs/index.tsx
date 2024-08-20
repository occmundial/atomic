import {
  ReactNode,
  Children,
  cloneElement,
  ReactElement,
  JSXElementConstructor,
  useRef,
  Dispatch,
  SetStateAction,
  isValidElement,
  forwardRef
} from 'react'
import useStyles from './styles'
import TabIndicator, { TabIndicatorProps } from './TabIndicator'
import TabList, { TabListProps } from './TabList'

interface TabsProps {
  size: 'large' | 'medium' | 'small'
  children: ReactNode
  value?: string | number
  onChange?: Dispatch<SetStateAction<string>>
}

const TabListRef = forwardRef((props: any, ref) => {
  return (
    <TabList tabRef={ref} {...props}>
      {props.children}
    </TabList>
  )
})

const TabIndicatorRef = forwardRef((props: any, ref) => {
  return <TabIndicator tabRef={ref} {...props} />
})

function Tabs(props: TabsProps) {
  const ref = useRef(null)
  const { children, size, onChange } = props
  const indexValueMap = new Map()
  const classes = useStyles()

  const renderTab = () => {
    return Children.map(children, (child, index) => {
      if (!isValidElement(child)) return null
      const childTyped = child as ReactElement<
        any,
        string | JSXElementConstructor<any>
      >
      const childValue =
        childTyped.props.value === undefined ? index : childTyped.props.value

      indexValueMap.set(childValue, index)
      return cloneElement(childTyped, {
        value: childValue,
        index,
        size,
        onClick: onChange
      })
    })
  }

  return (
    <div className={classes.container}>
      <TabListRef indexValueMap={indexValueMap} ref={ref}>
        {renderTab()}
      </TabListRef>
      <TabIndicator tabRef={ref} indexValueMap={indexValueMap} />
    </div>
  )
}

export default Tabs
