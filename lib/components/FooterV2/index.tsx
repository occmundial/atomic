import Grid from '../Grid'
import useStyles from './styles'

export default function FooterV2({ children }) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Grid className={classes.container}>{children}</Grid>
    </footer>
  )
}
