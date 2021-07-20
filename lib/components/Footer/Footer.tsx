import React, { MouseEvent, ReactElement, ReactNode } from 'react'

import Grid from '../Grid'
import Flexbox from '../Flexbox'
import List from './List'
import Text from '../Text'
import Button from '../Button'
import grid from '@/tokens/grid'

import useWindowSize from '@/hooks/useWindowSize'

import useStyles from './styles'
import { ListItem } from './List/List'

interface ColumnItem {
  key: string | number
  title: string
  collapse: boolean
  items: ListItem[]
}

interface Column extends Array<ColumnItem> {}

interface BottomLink {
  key: string | number
  text: string
  onClick: (e: MouseEvent) => void
  href: string
  target: string
  rel: string
}

interface Aux {
  text: string
  icon: string
  href: string
  target: string
  iconRight: string
}

interface FooterProps {
  columns: Column[]
  bottomLinks: BottomLink[]
  copyText: string | ReactElement
  aux: Aux
}

const Footer = ({ columns, bottomLinks, copyText, aux }: FooterProps) => {
  const classes = useStyles()
  const { width } = useWindowSize()
  const { text, icon, href, target, iconRight } = aux
  const isMobile = width < grid.sm

  return (
    <div
      className={
        columns.length > 0 ? classes.footer : classes.footerWithoutColumns
      }
    >
      <Grid fluid={width < grid.xl}>
        <Grid.Row>
          <Flexbox
            display="flex"
            direction={isMobile ? 'col' : 'row'}
            className={classes.column}
          >
            {columns.map((column, index) => (
              <Flexbox key={index} flex="1">
                {column.map(list => (
                  <List list={list} isMobile={isMobile} key={list.key} />
                ))}
              </Flexbox>
            ))}
          </Flexbox>
          <div className={classes.footerBottom}>
            <Flexbox
              display="flex"
              alignItems="start"
              className={classes.bottomWrap}
              direction={isMobile ? 'col' : 'row'}
            >
              <Flexbox flex="1">
                <Text small mid bottomTiny tag="div">
                  {bottomLinks.map(item => (
                    <div
                      className={
                        isMobile
                          ? classes.mobileListElement
                          : classes.listElement
                      }
                      key={item.key}
                    >
                      <Text tag="label" small mid>
                        <a
                          className={classes.link}
                          href={item.href}
                          target={item.target}
                          rel={item.rel}
                          onClick={item.onClick}
                        >
                          {item.text}
                        </a>
                      </Text>
                    </div>
                  ))}
                </Text>
                {copyText && (
                  <Text small mid>
                    {copyText}
                  </Text>
                )}
              </Flexbox>
              {aux && (
                <Button
                  href={href}
                  target={target}
                  icon={icon}
                  iconRight={iconRight}
                  size="md"
                  theme="ghostPink"
                  className={isMobile ? classes.buttonMobile : ''}
                >
                  {text}
                </Button>
              )}
            </Flexbox>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  )
}

Footer.defaultProps = {
  bottomLinks: [],
  columns: []
}

export default Footer
