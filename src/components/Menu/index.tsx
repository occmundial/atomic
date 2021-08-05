import Link from 'next/link'

import Text from '@/components/Text'
import SlideDown from '@/components/SlideDown'
import { Doc } from '@/src/components/Layout'

import useStyles from './styles'

interface MenuProps {
  docs: Doc[]
  close: () => void
}

export default function Menu({ docs, close }: MenuProps) {
  const classes = useStyles()
  const home = docs.find(doc => doc.section === 'home')
  const components = docs.filter(doc => doc.section === 'components')
  return (
    <div>
      <ul className={classes.list}>
        {home && (
          <Text tag="li" strong className={classes.item}>
            <Link href="/">
              <a className={classes.link} onClick={close}>
                {home.title}
              </a>
            </Link>
          </Text>
        )}
      </ul>
      <SlideDown expanded title="Components" strong textSize="lg">
        <ul className={classes.list}>
          {components.map(doc => (
            <Text tag="li" strong className={classes.item} key={doc.title}>
              <Link href={doc.slug}>
                <a className={classes.link} onClick={close}>
                  {doc.title}
                </a>
              </Link>
            </Text>
          ))}
        </ul>
      </SlideDown>
    </div>
  )
}
