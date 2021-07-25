import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'

import useStyles from './styles'

export default function Code({ children, className }) {
  const classes = useStyles()
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={classnames(classes.code, className)}>
          <Flexbox
            display="flex"
            justifyContent="start"
            alignItems="start"
            className={classes.buttons}
          >
            <span className={classnames(classes.button, classes.red)} />
            <span className={classnames(classes.button, classes.yellow)} />
            <span className={classnames(classes.button, classes.green)} />
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
