import { useState } from 'react'

import NavTab from '@/components/NavTab'
import NavAside from '@/components/NavAside'
import Portal from '@/components/Portal'

interface HeaderProps {
  docs: any
}

export default function Header({ docs }: HeaderProps) {
  console.log(docs)
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
            type: 'link',
            text: 'ATOMIC',
            link: '/'
          }
        ]}
      />
      <Portal show={showAside}>
        <NavAside onClose={() => setShowAside(false)}>Holi</NavAside>
      </Portal>
    </>
  )
}
