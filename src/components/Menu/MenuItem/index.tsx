import Link from 'next/link'
import classnames from 'classnames'

import Text from '@/components/Text'
import { Doc } from '@/src/components/Layout'

import useStyles from './styles'

interface MenuItemProps {
  doc: Doc
  close: () => void
  link: string
  selected: boolean
}

export default function MenuItem({
  doc,
  close,
  link,
  selected
}: MenuItemProps) {
  const classes = useStyles()

  return (
    <Text tag="li" strong className={classes.item} key={doc.title}>
      {selected ? (
        <span
          className={classnames(classes.link, { [classes.selected]: selected })}
        >
          {doc.title}
        </span>
      ) : (
        <Link href={link}>
          <a className={classes.link} onClick={close}>
            {doc.title}
          </a>
        </Link>
      )}
    </Text>
  )
}
