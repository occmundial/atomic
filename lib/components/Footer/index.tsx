import React, { MouseEvent, ReactElement } from 'react'
import classnames from 'classnames'

import Grid from '@/components/Grid'
import Flexbox from '@/components/Flexbox'
import Text from '@/components/Text'
import Button from '@/components/Button'

import List, { ListItem } from './List'
import useStyles from './styles'

export interface ColumnItem {
  key: string | number
  title?: string
  collapse?: boolean
  items: ListItem[]
}

export interface Column extends Array<ColumnItem> {}

export interface BottomLink {
  key: string | number
  text: string
  onClick?: (e: MouseEvent) => void
  href?: string
  target?: string
  rel?: string
  id?: string
}

export interface Aux {
  text: string
  href?: string
  target?: string
  iconLeft?: string
  iconRight?: string
  className?: string
}

export interface FooterProps {
  columns?: Column[]
  bottomLinks?: BottomLink[]
  copyText?: string | ReactElement
  aux?: Aux
  bottomItem?: ReactElement
  listClassName?: string
  /** The recommendation is to set the breakpoint at `grid.sm` */
  isMobile?: boolean
  /** The recommendation is to set the breakpoint at `grid.xl` */
  isFluid?: boolean
}

const Footer = ({
  columns = [],
  bottomLinks = [],
  copyText,
  aux,
  bottomItem,
  listClassName,
  isMobile,
  isFluid
}: FooterProps) => {
  const classes = useStyles()

  return (
    <div
      className={
        columns.length > 0 ? classes.footer : classes.footerWithoutColumns
      }
    >
      <Grid fluid={isFluid}>
        <Grid.Row>
          <Flexbox
            display="flex"
            direction={isMobile ? 'col' : 'row'}
            className={classes.column}
          >
            {columns.map((column, index) => (
              <Flexbox
                key={index}
                flex="1"
                className={classnames({ [classes.list]: !isMobile })}
              >
                {column.map(list => (
                  <List
                    key={list.key}
                    list={list}
                    isMobile={isMobile}
                    listClassName={listClassName}
                  />
                ))}
              </Flexbox>
            ))}
          </Flexbox>
          <div className={classes.footerBottom}>
            <Flexbox
              display="flex"
              alignItems={isMobile ? 'start' : 'end'}
              className={classes.bottomWrap}
              direction={isMobile ? 'col' : 'row'}
            >
              <Flexbox flex="1">
                {aux && (
                  <Button
                    href={aux.href}
                    target={aux.target}
                    iconLeft={aux.iconLeft}
                    iconRight={aux.iconRight}
                    size="md"
                    theme="ghostPink"
                    className={classnames(
                      { [classes.buttonMobile]: isMobile },
                      aux.className
                    )}
                  >
                    {aux.text}
                  </Button>
                )}
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
                      <Text tag="label" small mid id={item.id}>
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
                {copyText && <Text small>{copyText}</Text>}
              </Flexbox>
              {bottomItem}
            </Flexbox>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Footer
