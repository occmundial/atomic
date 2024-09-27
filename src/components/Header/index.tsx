import { useState } from 'react'
import Link from 'next/link'

import NavTab, { NavTabProps } from '@/components/NavTab'
import NavAside from '@/components/NavAside'
import Portal from '@/components/Portal'
import Menu from '@/src/components/Menu'
import Search from '@/src/components/Search'
import { Doc } from '@/src/components/Layout'
import { Media } from '@/components/Media'

import useStyles from './styles'

interface HeaderProps {
  docs: Doc[]
}

export default function Header({ docs }: HeaderProps) {
  const classes = useStyles()
  const [showAside, setShowAside] = useState(false)

  const navTabContent: NavTabProps = {
    left: [
      {
        key: 'icon',
        type: 'navButton',
        iconName: 'menu',
        onClick: () => setShowAside(true)
      },
      {
        key: 'custom',
        type: 'custom',
        custom: (
          <Link href="/">
            <a className={classes.title}>Atomic</a>
          </Link>
        )
      }
    ],
    right: [
      {
        key: 'link',
        type: 'link',
        link: 'https://github.com/occmundial/atomic',
        text: 'View on Github'
      }
    ],
    center: [
      {
        key: 'custom2',
        type: 'custom',
        custom: <Search docs={docs} />
      }
    ]
  }

  return (
    <>
      <Media lessThan="xs">
        <NavTab fixed hideOnScroll {...navTabContent} isFluid />
      </Media>
      <Media greaterThanOrEqual="xs">
        <NavTab fixed hideOnScroll {...navTabContent} isFluid={false} />
      </Media>
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
