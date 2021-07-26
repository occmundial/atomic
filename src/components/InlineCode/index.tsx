import useStyles from './styles'

interface InlineCodeProps {
  children: string
}

export default function InlineCode({ children }: InlineCodeProps) {
  const classes = useStyles()
  return <code className={classes.code}>{children}</code>
}
