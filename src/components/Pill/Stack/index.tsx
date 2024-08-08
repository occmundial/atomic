import React, { useState } from 'react'
import Pill from '@/components/Pill'
import Text from '@/components/Text'

const PILLS_DUMMY = [
  {
    id: 1,
    value: 10,
    label: 'Label',
    rightIcon: 'x'
  },
  {
    id: 2,
    value: 20,
    label: 'Label',
    rightIcon: 'x'
  },
  {
    id: 3,
    value: 30,
    label: 'Label',
    disabled: true,
    rightIcon: 'x'
  },
  {
    id: 4,
    value: 40,
    label: 'Label',
    disabled: true,
    rightIcon: 'x'
  },
  {
    id: 5,
    value: 50,
    label: 'Label',
    rightIcon: 'x'
  }
]

const PillExample = () => {
  const [pills, setPills] = useState(PILLS_DUMMY)
  const [pillSelected, setPillSelected] = useState<null | number>(null)

  const onClick = (id: number) => {
    setPillSelected(id)
  }

  const onClose = (id: number) => {
    const updatedPills = pills.filter(pill => pill.id !== id)
    setPills(updatedPills)
  }

  return (
    <div>
      <Pill
        label="Label"
        stack={pills}
        assistiveText="Assistive Text"
        onClick={onClick}
        onClose={onClose}
      />
      {pillSelected && (
        <Text>You clicked the item with the id: {pillSelected}</Text>
      )}
    </div>
  )
}

export default PillExample
