import occHorizontal from './icons/occHorizontal'
import occVertical from './icons/occVertical'
import occIcon from './icons/occIcon'
import male from './icons/male'
import female from './icons/female'

const icons = {
  base: function (icon) {
    let encoded = Buffer.from(icon).toString('base64')
    return `url(data:image/svg+xml;base64,${encoded})`
  },
  occHorizontal,
  occVertical,
  occIcon,
  male,
  female
}

export default icons
