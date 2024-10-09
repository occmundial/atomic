import { useState } from 'react'
import Menu from '@/components/Menu'
import NavAvatarButton from '@/components/NavAvatarButton'
import MenuList from '@/components/MenuList'
import MenuUser from '@/components/MenuUser'
import MenuDivider from '@/components/MenuDivider'
import MenuItem from '@/components/MenuItem'
import { Placement } from '@floating-ui/react'
import useWindowSize from '@/hooks/useWindowSize'
import grid from '@/tokens/grid'
import Portal from '@/components/Portal'
import Drawer from '@/components/Drawer'
import NavTab from '@/components/NavTab'
import colors from '@/tokens/colors'

type MenuDx = {
  placement: Placement
  darkMode: boolean
  className: { menu: string; button: string }
}

export default function MenuMDX({
  placement = 'bottom-end',
  darkMode = false,
  className
}: MenuDx) {
  const [open, setOpen] = useState(false)
  const [reference, setReference] = useState(null)
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < grid.xs

  const avatarButtonHandler = () => {
    setOpen(!open)
  }
  return (
    <div style={{ position: 'relative' }}>
      <NavAvatarButton
        theme="ghost"
        className="only-destop"
        photo="https://i.pravatar.cc/300"
        onClick={avatarButtonHandler}
        ref={setReference}
      />
      {!isMobile ? (
        <Menu
          open={open}
          setOpen={setOpen}
          placement={placement}
          triggerRef={reference}
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
      ) : (
        <Portal
          show={open}
          container={typeof window !== 'undefined' ? document.body : null}
        >
          <Drawer
            header={
              <NavTab
                noShadow
                left={[
                  {
                    key: 'icon',
                    type: 'navButton',
                    iconName: 'x',
                    onClick: () => setOpen(false)
                  },
                  {
                    key: 'custom',
                    type: 'custom',
                    custom: (
                      <span
                        style={{
                          fontFamily: '"Pacifico", sans-serif',
                          color: colors.sec,
                          textDecoration: 'none',
                          fontSize: 28,
                          lineHeight: '32px'
                        }}
                      >
                        Atomic
                      </span>
                    )
                  }
                ]}
              />
            }
          >
            This is a default Drawer
          </Drawer>
        </Portal>
      )}
    </div>
  )
}
