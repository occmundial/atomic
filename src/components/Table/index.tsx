import useStyles from './styles'

export default function Table({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <table className={classes.table}>{children}</table>
    </div>
  )
}
