import { useState } from 'react'
import Menu from '@/components/Menu'
import NavAvatarButton from '@/components/NavAvatarButton'
import MenuList from '@/components/MenuList'
import MenuUser from '@/components/MenuUser'
import MenuDivider from '@/components/MenuDivider'
import MenuItem from '@/components/MenuItem'

export default function MenuMDX({ placement, darkMode = false, className }) {
  const [open, setOpen] = useState(false)

  const avatarButtonHandler = () => {
    setOpen(!open)
  }
  return (
    <div style={{ position: 'relative' }}>
      <Menu
        placement={placement}
        className={className?.menu}
        triggerElement={
          <NavAvatarButton
            darkMode={darkMode}
            mini
            className={className.button}
            photo="https://i.pravatar.cc/300"
            onClick={avatarButtonHandler}
          />
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 12 }}>
          <MenuList component="nav" margin="size-3" dense>
            <MenuUser
              title="Nombre Apellido"
              subtitle="ejemplo@correo.com"
              avatarProps={{
                photo: 'https://i.pravatar.cc/300'
              }}
            />
            <MenuDivider style={{ margin: '4px 0' }} />
            <MenuItem component="a" href="#MenuList">
              Configuración
            </MenuItem>
            <MenuItem component="a" href="#MenuList">
              Administrador de cuentas
            </MenuItem>
            <MenuItem component="a" href="#MenuList">
              Datos de facturación
            </MenuItem>
            <MenuItem component="a" href="#MenuList">
              Reporte de uso
            </MenuItem>
            <MenuItem component="a" href="#MenuList">
              Estado de cuenta
            </MenuItem>
            <MenuDivider style={{ margin: '4px 0' }} />
            <MenuItem component="a" href="#MenuList">
              Sitio de candidatos
            </MenuItem>
            <MenuItem onClick={() => console.log('logged-out')}>
              Cerrar sesión
            </MenuItem>
          </MenuList>
        </div>
      </Menu>
    </div>
  )
}
