import Link from 'next/link'
import { useRouter } from 'next/router'

import Text from '@/components/Text'
import SlideDown from '@/components/SlideDown'
import { Doc } from '@/src/components/Layout'
import MenuItem from './MenuItem'

import useStyles from './styles'
import { useMemo } from 'react'

interface MenuProps {
  docs: Doc[]
  close: () => void
}

export default function Menu({ docs, close }: MenuProps) {
  const classes = useStyles()
  const route = useRouter()
  const selected = useMemo(
    () =>
      docs.find(
        doc => doc.slug === route.query?.slug || doc.section === 'home'
      ),
    [docs, route]
  )
  const home = useMemo(() => docs.find(doc => doc.section === 'home'), [docs])
  const components = useMemo(
    () => docs.filter(doc => doc.section === 'components'),
    [docs]
  )
  const tokens = useMemo(
    () => docs.filter(doc => doc.section === 'tokens'),
    [docs]
  )
  return (
    <div>
      <ul className={classes.list}>
        {home && (
          <MenuItem
            doc={home}
            close={close}
            link="/"
            selected={selected.slug === home.slug}
          />
        )}
      </ul>
      <SlideDown expanded title="Components" strong textSize="lg">
        <ul className={classes.list}>
          {components.map(doc => (
            <MenuItem
              key={doc.slug}
              doc={doc}
              close={close}
              link={doc.slug}
              selected={selected.slug === doc.slug}
            />
          ))}
        </ul>
      </SlideDown>
      <SlideDown expanded title="Tokens" strong textSize="lg">
        <ul className={classes.list}>
          {tokens.map(doc => (
            <MenuItem
              key={doc.slug}
              doc={doc}
              close={close}
              link={doc.slug}
              selected={selected.slug === doc.slug}
            />
          ))}
        </ul>
      </SlideDown>
    </div>
  )
}
