import Logo from '@/components/Logo'
import NavAvatarButton from '@/components/NavAvatarButton'
import NavTab, { NavPosition } from '@/components/NavTab'
import useWindowSize from '@/hooks/useWindowSize'
import Menu from '@/components/Menu'
import grid from '@/tokens/grid'
import { Fragment, useState } from 'react'
import MenuList from '@/components/MenuList'
import MenuUser from '@/components/MenuUser'
import MenuDivider from '@/components/MenuDivider'
import MenuItem from '@/components/MenuItem'
import Drawer from '@/components/Drawer'
import Portal from '@/components/Portal'
import Icon from '@/components/Icon'

import useStyles from './styles'

export default function NavTabHeader() {
  const [selected, setSelected] = useState('Vacantes')
  const [open, setOpen] = useState(false)
  const [reference, setReference] = useState(null)
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < grid.xs
  const classes = useStyles()

  const left: NavPosition = [
    {
      key: 0,
      type: 'logo',
      logo: (
        <a href="#NavTab" style={{ display: 'flex' }}>
          <Logo variant="occLogo" theme="white" />
        </a>
      )
    },
    {
      key: 1,
      type: 'navButton',
      label: 'Vacantes',
      className: classes.onlyDesktop,
      selected: selected === 'Vacantes',
      showBar: selected === 'Vacantes',
      onClick: () => setSelected('Vacantes')
    },
    {
      key: 2,
      type: 'navButton',
      label: 'Talento',
      className: classes.onlyDesktop,
      selected: selected === 'Talento',
      showBar: selected === 'Talento',
      onClick: () => setSelected('Talento')
    },
    {
      key: 3,
      type: 'navButton',
      label: 'Ayuda',
      className: classes.onlyDesktop,
      selected: selected === 'Ayuda',
      showBar: selected === 'Ayuda',
      onClick: () => setSelected('Ayuda')
    }
  ]
  const right: NavPosition = [
    {
      key: 0,
      type: 'button',
      iconLeft: 'cart'
    },
    {
      key: 1,
      type: 'custom',
      custom: (
        <Fragment>
          {!isMobile ? (
            <Fragment>
              <NavAvatarButton
                theme="ghostWhite"
                photo="https://i.pravatar.cc/300"
                onClick={() => setOpen(open => !open)}
                ref={setReference}
              />
              <Menu
                open={open}
                setOpen={setOpen}
                placement="bottom-end"
                triggerRef={reference}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 12
                  }}
                >
                  <MenuList component="nav" margin="size-3">
                    <MenuUser
                      title="Nombre Apellido"
                      subtitle="ejemplo@correo.com"
                      dense
                      avatarProps={{
                        photo: 'https://i.pravatar.cc/300'
                      }}
                    />
                    <MenuDivider style={{ margin: '4px 0' }} />
                    <MenuItem component="a" href="#MenuList" dense>
                      Configuración
                    </MenuItem>
                    <MenuItem component="a" href="#MenuList" dense>
                      Administrador de cuentas
                    </MenuItem>
                    <MenuItem component="a" href="#MenuList" dense>
                      Datos de facturación
                    </MenuItem>
                    <MenuItem component="a" href="#MenuList" dense>
                      Reporte de uso
                    </MenuItem>
                    <MenuItem component="a" href="#MenuList" dense>
                      Estado de cuenta
                    </MenuItem>
                    <MenuDivider style={{ margin: '4px 0' }} />
                    <MenuItem component="a" href="#MenuList" dense>
                      Sitio de candidatos
                    </MenuItem>
                    <MenuItem onClick={() => console.log('logged-out')} dense>
                      Cerrar sesión
                    </MenuItem>
                  </MenuList>
                </div>
              </Menu>
            </Fragment>
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
                        key: 0,
                        type: 'logo',
                        logo: (
                          <a href="#NavTab" style={{ display: 'flex' }}>
                            <Logo variant="occLogo" theme="blue" />
                          </a>
                        )
                      }
                    ]}
                    right={[
                      {
                        key: 0,
                        type: 'button',
                        iconLeft: 'cart'
                      },
                      {
                        key: 'icon',
                        type: 'button',
                        iconLeft: 'x-o',
                        onClick: () => setOpen(false),
                        className: `${classes.closeIcon} ${
                          open
                            ? classes.animateCloseIconShow
                            : classes.animateCloseIconHide
                        }`
                      }
                    ]}
                  />
                }
              >
                <MenuList component="nav" margin="size-3" padding="empty">
                  <div className={open ? classes.animateTranslateY : ''}>
                    <MenuUser
                      title="Nombre Apellido"
                      subtitle="ejemplo@correo.com"
                      avatarProps={{
                        photo: 'https://i.pravatar.cc/300'
                      }}
                    />
                  </div>
                  <MenuDivider
                    style={{ margin: '4px 0', animationDelay: '0.05s' }}
                    className={open ? classes.animateTranslateY : ''}
                  />
                  <div
                    className={open ? classes.animateTranslateY : ''}
                    style={{ animationDelay: '0.1s' }}
                  >
                    <MenuItem component="a" href="#MenuList">
                      Vacantes
                    </MenuItem>
                    <MenuItem component="a" href="#MenuList">
                      Talento
                    </MenuItem>
                    <MenuItem component="a" href="#MenuList">
                      Ayuda
                    </MenuItem>
                  </div>
                  <MenuDivider
                    style={{ margin: '4px 0', animationDelay: '0.15s' }}
                    className={open ? classes.animateTranslateY : ''}
                  />
                  <div
                    style={{ animationDelay: '0.15s' }}
                    className={open ? classes.animateTranslateY : ''}
                  >
                    <MenuItem component="a" href="#MenuList">
                      Configuración
                    </MenuItem>
                    <MenuItem component="a" href="#MenuList">
                      Sitio de candidatos
                    </MenuItem>
                  </div>
                  <MenuDivider
                    style={{ margin: '4px 0', animationDelay: '0.15s' }}
                    className={open ? classes.animateTranslateY : ''}
                  />
                  <div
                    style={{ animationDelay: '0.15s' }}
                    className={open ? classes.animateTranslateY : ''}
                  >
                    <MenuItem onClick={() => console.log('logged-out')}>
                      Cerrar sesión
                    </MenuItem>
                  </div>
                </MenuList>
              </Drawer>
            </Portal>
          )}
        </Fragment>
      )
    },
    {
      key: 3,
      type: 'button',
      className: `${classes.onlyMobile} ${
        open ? classes.animateIconShow : classes.animateIconHide
      }`,
      onClick: () => setOpen(open => !open),
      iconLeft: 'menu'
    }
  ]

  return (
    <>
      <NavTab isFluid blue left={left} right={right} />
    </>
  )
}
