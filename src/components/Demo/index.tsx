import { ReactNode } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Flexbox from '@/components/Flexbox'

import useStyles from './styles'

interface DemoProps {
  children: ReactNode
  background: string
  title: string
}

export default function Demo({ children, background, title }: DemoProps) {
  const classes = useStyles()

  return (
    <div>
      <Flexbox
        display="flex"
        justifyContent="start"
        alignItems="center"
        className={classes.header}
      >
        <span className={classnames(classes.button, classes.red)} />
        <span className={classnames(classes.button, classes.yellow)} />
        <span className={classnames(classes.button, classes.green)} />
        {title && (
          <Text strong className={classes.title}>
            {title}
          </Text>
        )}
      </Flexbox>
      <div className={classes.screen} style={{ background }}>
        {children}
      </div>
    </div>
  )
}
