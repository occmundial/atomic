import Flexbox from '@/components/Flexbox'
import Image from 'next/image'
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
        <Image
          src={img}
          alt={imgAlt}
          layout="fill"
          unoptimized
          {...{ fetchpriority: 'low' }}
        />
      </a>
    </Flexbox>
  )
}
