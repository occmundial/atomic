import React, { useState } from 'react'
import Pill from '@/components/Pill'

const PILLS_DUMMY = [
  {
    id: 1,
    value: 10,
    label: 'Label',
    leftIcon: 'person',
    rightIcon: 'x'
  },
  {
    id: 2,
    value: 20,
    label: 'Label',
    selected: true,
    leftIcon: 'person',
    rightIcon: 'x'
  },
  {
    id: 3,
    value: 30,
    label: 'Label',
    selected: true,
    disabled: true,
    leftIcon: 'person',
    rightIcon: 'x'
  },
  {
    id: 4,
    value: 40,
    label: 'Label',
    disabled: true,
    leftIcon: 'person',
    rightIcon: 'x'
  },
  {
    id: 5,
    value: 50,
    label: 'Label',
    leftIcon: 'person',
    rightIcon: 'x'
  }
]

const PillExample = () => {
  const [pills, setPills] = useState(PILLS_DUMMY)

  const onChange = (id: number) => {
    const updatedPills = pills.map(pill =>
      pill.id === id ? { ...pill, selected: !pill.selected } : pill
    )
    setPills(updatedPills)
  }

  return (
    <Pill
      label="Label"
      choice={pills}
      assistiveText="Assistive Text"
      onChange={onChange}
    />
  )
}

export default PillExample
