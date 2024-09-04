/* eslint-disable @next/next/no-img-element */
import Flexbox from '@/components/Flexbox'
import classnames from 'classnames'

import useStyles from './styles'

interface AppButtonProps {
  show?: boolean
  href: string
  title: string
  id: string
  img: string
  imgAlt: string
}

export default function AppButton({
  show,
  href,
  title,
  id,
  img,
  imgAlt
}: AppButtonProps) {
  const classes = useStyles()

  return (
    <Flexbox
      display="flex"
      justifyContent="center"
      className={classnames(classes.logoApp, {
        [classes.hide]: !show
      })}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        title={title}
        id={id}
        className={classes.appImage}
      >
        <img src={img} alt={imgAlt} loading="lazy" />
      </a>
    </Flexbox>
  )
}
