import Checkbox from '@/components/Checkbox'
import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'
import Radio from '@/components/Radio'
import SlideDown, { SlideDownProps } from '@/components/SlideDown'
import useWindowSize from '@/hooks/useWindowSize'
import grid from '@/tokens/grid'
import { useState } from 'react'

const CustomTitle = (
  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
    <p style={{ margin: 0 }}>
      Custom <b>SlideDown</b> Title
    </p>
    <Icon iconName="search" size={16} />
  </div>
)
const initialState: SlideDownProps = {
  title: 'SlideDown Title',
  customTitle: '',
  expanded: false,
  tag: '',
  onToggle: () => console.log('onToggle event'),
  textSize: 'md',
  strong: false,
  theme: 'default',
  noJustified: false,
  divider: false,
  icon: '',
  noPadding: false,
  children: 'SlideDown Content'
}

const radioMappedValued = {
  1: 'sm',
  2: 'md',
  3: 'lg'
}
export default function SlideDownMDX() {
  const [slideDownProps, setSlideDownProps] = useState(initialState)
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < grid.xs

  return (
    <Flexbox display="flex" direction="col">
      <SlideDown {...slideDownProps} />
      <Flexbox
        display="flex"
        direction={isMobile ? 'col' : 'row'}
        alignItems="start"
        style={{ gap: '48px' }}
      >
        <div style={{ flexShrink: 0 }}>
          <Radio
            options={[
              { value: 1, label: 'Title text size sm' },
              { value: 2, label: 'Title text size md' },
              { value: 3, label: 'Title text size lg' }
            ]}
            onChange={value =>
              setSlideDownProps({
                ...slideDownProps,
                textSize: radioMappedValued[value]
              })
            }
            selected={2}
          />
        </div>
        <Flexbox
          display="flex"
          direction={isMobile ? 'col' : 'row'}
          justifyContent="start"
          wrap="wrap"
          style={{ columnGap: '24px' }}
        >
          <Checkbox
            label="Expanded"
            value={slideDownProps.expanded}
            onChange={value =>
              setSlideDownProps({ ...slideDownProps, expanded: value })
            }
          />
          <Checkbox
            label="Strong title"
            value={slideDownProps.strong}
            onChange={value =>
              setSlideDownProps({ ...slideDownProps, strong: value })
            }
          />
          <Checkbox
            label="Divider"
            value={slideDownProps.divider}
            onChange={value =>
              setSlideDownProps({ ...slideDownProps, divider: value })
            }
          />
          <Checkbox
            label="No justified"
            value={slideDownProps.noJustified}
            onChange={value =>
              setSlideDownProps({ ...slideDownProps, noJustified: value })
            }
          />
          <Checkbox
            label="Without side paddings"
            value={slideDownProps.noPadding}
            onChange={value =>
              setSlideDownProps({ ...slideDownProps, noPadding: value })
            }
          />
          <Checkbox
            label="Blue theme"
            value={slideDownProps.theme === 'blue'}
            onChange={value =>
              setSlideDownProps({
                ...slideDownProps,
                theme: value ? 'blue' : 'default'
              })
            }
          />
          <Checkbox
            label="With left icon"
            value={!!slideDownProps.icon}
            onChange={value =>
              setSlideDownProps({
                ...slideDownProps,
                icon: value ? 'globe' : ''
              })
            }
          />
          <Checkbox
            label="With tag"
            value={!!slideDownProps.tag}
            onChange={value =>
              setSlideDownProps({
                ...slideDownProps,
                tag: value ? 'Etiqueta' : ''
              })
            }
          />
          <Checkbox
            label="Custom Title"
            value={!!slideDownProps.customTitle}
            onChange={value =>
              setSlideDownProps({
                ...slideDownProps,
                customTitle: value ? CustomTitle : ''
              })
            }
          />
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}
