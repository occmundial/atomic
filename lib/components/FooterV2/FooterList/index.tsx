import Grid from '@/components/Grid'
import useStyles from './styles'

export interface ListLink {
  text: string
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}

export interface FooterList {
  title: string
  links: ListLink[]
}

export default function FooterList(props: FooterList) {
  const { links, title } = props
  const classes = useStyles()

  return (
    <div className={classes.flexContainer}>
      <h5 className={classes.title}>{title}</h5>
      <ul className={classes.list}>
        {links.map(link => (
          <li key={`footer-list-li-${link.text}`}>
            <a
              href={link.href}
              target={link.target || '_blank'}
              className={classes.link}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
