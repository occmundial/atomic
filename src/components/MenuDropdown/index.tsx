import { useState } from 'react'
import Button from '@/components/Button'
import Menu from '@/components/Menu'
import NavAvatarButton from '@/components/NavAvatarButton'
import useWindowSize from '@/hooks/useWindowSize'

export default function MenuMDX({ placement }) {
  const [open, setOpen] = useState(false)
  const { width } = useWindowSize()

  const avatarButtonHandler = () => {
    setOpen(!open)
  }
  return (
    <div style={{ position: 'relative' }}>
      <Menu
        placement={placement}
        triggerElement={
          <NavAvatarButton
            theme="ghost"
            mini
            className="only-destop"
            photo="https://i.pravatar.cc/300"
            onClick={avatarButtonHandler}
          />
        }
        drawer={width < 768}
      >
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 12 }}>
          <Button>Prueba menu item 1</Button>
          <Button>Prueba menu item 2</Button>
          <Button>Prueba menu item 3</Button>
          <Button>Prueba menu item 4</Button>
        </div>
      </Menu>
    </div>
  )
}
