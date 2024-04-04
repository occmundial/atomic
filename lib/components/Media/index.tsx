import { createMedia } from '@artsy/fresnel'
import grid from '@/tokens/grid'

const { xxs, xs, sm, md, lg, xl } = grid

const { MediaContextProvider, Media, createMediaStyle } = createMedia({
  breakpoints: {
    xxs,
    xs,
    sm,
    md,
    lg,
    xl
  }
})

const mediaStyle = createMediaStyle()
export { MediaContextProvider, Media, mediaStyle }
