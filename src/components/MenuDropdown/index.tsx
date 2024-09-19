import { useState } from 'react'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import NavAvatarButton from '@/components/NavAvatarButton'

export default function MenuDropdown({ placement }) {
  const [open, setOpen] = useState(false)

  const avatarButtonHandler = () => {
    setOpen(!open)
  }
  return (
    <div style={{ position: 'relative' }}>
      <Dropdown
        placement={placement}
        menuTrigger={
          <NavAvatarButton
            theme="ghost"
            mini
            className="only-destop"
            photo="https://i.pravatar.cc/300"
            onClick={avatarButtonHandler}
          />
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 12 }}>
          <Button>Prueba menu item 1</Button>
          <Button>Prueba menu item 2</Button>
          <Button>Prueba menu item 3</Button>
          <Button>Prueba menu item 4</Button>
        </div>
      </Dropdown>
    </div>
  )
}
