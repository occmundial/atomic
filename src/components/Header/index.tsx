import { useState } from 'react'
import Link from 'next/link'

import NavTab from '@/components/NavTab'
import NavAside from '@/components/NavAside'
import Portal from '@/components/Portal'
import Menu from '@/src/components/Menu'
import Search from '@/src/components/Search'
import { Doc } from '@/src/components/Layout'

import useStyles from './styles'

interface HeaderProps {
  docs: Doc[]
}

export default function Header({ docs }: HeaderProps) {
  const classes = useStyles()
  const [showAside, setShowAside] = useState(false)

  return (
    <>
      <NavTab
        fixed
        hideOnScroll
        left={[
          {
            key: 0,
            type: 'icon',
            iconName: 'bars',
            onClick: () => setShowAside(true)
          },
          {
            key: 1,
            type: 'custom',
            custom: (
              <Link href="/">
                <a className={classes.title}>Atomic</a>
              </Link>
            )
          }
        ]}
        right={[
          {
            key: 0,
            type: 'link',
            link: 'https://github.com/occmundial/atomic',
            text: 'View on Github'
          }
        ]}
        center={[
          {
            key: 0,
            type: 'custom',
            custom: <Search docs={docs} />
          }
        ]}
      />
      <Portal show={showAside}>
        <NavAside
          onClose={() => setShowAside(false)}
          top={<span className={classes.titleBig}>Atomic</span>}
        >
          <Menu docs={docs} close={() => setShowAside(false)} />
        </NavAside>
      </Portal>
    </>
  )
}
