import { Fragment } from 'react'

import Button from '@/components/Button'
import Flexbox from '@/components/Flexbox'
import AtomicFooter from '@/components/Footer'
import useStyles from './styles'
import { bottomLinks } from './utils'

const copyText = <>Derechos reservados. Versión del sitio candy-home@1.44.0</>

const TopElement = ({ classes }) => (
  <Flexbox
    display="flex"
    // className={classes.bottomSection}
    alignItems="start"
    justifyContent="start"
  >
    <Button
      href="https://www.facebook.com/occoficial"
      target="_blank"
      theme="secondary"
      size="sm"
      iconRight="info-circle"
    >
      Centro de ayuda
    </Button>
  </Flexbox>
)

export default function FooterMDX() {
  const classes = useStyles()

  return (
    <Fragment>
      <AtomicFooter
        bottomLinks={bottomLinks(true)}
        topElement={<TopElement classes={classes} />}
        copyText={copyText}
        listClassName=""
        bottomLinksClassName={classes.bottomContainer}
      />
    </Fragment>
  )
}
