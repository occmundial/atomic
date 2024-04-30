import { useMemo } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'
import Text from '@/components/Text'

import useStyles from './styles'

interface CodeProps {
  children: string
  className?: string
}

export default function Code({ children, className }: CodeProps) {
  const classes = useStyles()

  const language = useMemo(
    () => className?.replace(/language-/, ''),
    [className]
  ) as Language

  const { title, code } = useMemo(() => {
    let code = children
    const title =
      children.indexOf('//') === 0
        ? children.split('\n')[0].replace('// ', '')
        : ''
    if (title) {
      code = children.split('\n').slice(1).join('\n')
    }
    return { title, code }
  }, [children])

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={classnames(classes.code, className)}>
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
              <Text white strong className={classes.title}>
                {title}
              </Text>
            )}
          </Flexbox>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
