import React, {
  Fragment,
  isValidElement,
  MouseEvent,
  ReactElement,
  ReactNode
} from 'react'

import Grid from '@/components/Grid'

import List, { ListItem } from './List'
import useStyles from './styles'
import classNames from 'classnames'

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
  aux?: ReactNode
  bottomItem?: ReactElement
  listClassName?: string
  /** The recommendation is to set the breakpoint at `grid.xl` */
  isFluid?: boolean
  topElement?: ReactNode
  bottomLinksClassName?: string
  sectionDivider?: boolean
}

const Footer = ({
  columns = [],
  bottomLinks = [],
  copyText,
  aux,
  bottomItem,
  listClassName,
  isFluid,
  topElement,
  bottomLinksClassName,
  sectionDivider
}: FooterProps) => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Grid fluid={isFluid} className={classes.footerContainer}>
        {isValidElement(topElement) ? <div>{topElement}</div> : ''}
        {columns.length ? (
          <section className={classes.column}>
            {columns.map((column, index) => (
              <div key={index} className={classes.listContainer}>
                {column.map(list => (
                  <List
                    key={list.key}
                    list={list}
                    listClassName={listClassName}
                  />
                ))}
              </div>
            ))}
          </section>
        ) : (
          ''
        )}
        {sectionDivider ? <div className={classes.divider} /> : ''}
        <section className={classes.bottomSection}>
          {isValidElement(aux) ? aux : ''}
          <div className={classes.bottomContainer}>
            <div
              className={classNames(
                classes.bottomLinksContainer,
                bottomLinksClassName
              )}
            >
              {bottomLinks.map((item, index) => (
                <Fragment key={item.key}>
                  {index === 0 || index === bottomLinks.length ? (
                    ''
                  ) : (
                    <div className={classes.linkDivider} />
                  )}
                  <div className={classes.listElement}>
                    <a
                      className={classes.link}
                      href={item.href}
                      target={item.target}
                      rel={item.rel}
                      onClick={item.onClick}
                    >
                      {item.text}
                    </a>
                  </div>
                </Fragment>
              ))}
            </div>
            {copyText && <div className={classes.copyright}>{copyText}</div>}
          </div>
          {bottomItem}
        </section>
      </Grid>
    </footer>
  )
}

export default Footer
