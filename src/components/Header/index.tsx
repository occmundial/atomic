import { useState } from 'react'
import Link from 'next/link'

import Text from '@/components/Text'
import NavTab from '@/components/NavTab'
import NavAside from '@/components/NavAside'
import Portal from '@/components/Portal'
import Menu from '@/src/components/Menu'

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
      />
      <Portal show={showAside}>
        <NavAside
          onClose={() => setShowAside(false)}
          top={<Text heading>Atomic</Text>}
        >
          <Menu docs={docs} close={() => setShowAside(false)} />
        </NavAside>
      </Portal>
    </>
  )
}
