import React, { useState } from 'react'
import Pill from '@/components/Pill'

const PILLS_DUMMY = [
  {
    id: 1,
    value: '10',
    label: 'Element 1'
  },
  {
    id: 2,
    value: '20',
    label: 'Element 2'
  },
  {
    id: 3,
    value: '30',
    label: 'Element 3',
    disabled: true
  },
  {
    id: 4,
    value: '40',
    label: 'Element 4'
  }
]

const PillExample = () => {
  const [pills, _] = useState(PILLS_DUMMY)
  const [selected, setSelected] = useState<null | number>(null)

  const onChange = (selected: number) => {
    setSelected(selected)
  }

  return (
    <Pill
      label="Label"
      group={pills}
      assistiveText="Assistive Text"
      onChange={onChange}
      selected={selected}
    />
  )
}

export default PillExample
