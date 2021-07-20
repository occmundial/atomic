import classnames from 'classnames'

import Text from '@/components/Text'

import { PillType } from '../Pill'

import useStyles from './styles'

interface PillGroupProps {
  items: PillType[]
  onSelect: (id: string | number) => void
  selected: string | number
  idPrefix: string
}

const Group = ({ items, selected, onSelect, idPrefix }: PillGroupProps) => {
  const classes = useStyles()
  return (
    <div className={classes.pillGroup}>
      {items.map(item => (
        <button
          key={item.id}
          id={idPrefix ? `${idPrefix}${item.id}` : null}
          className={classnames(
            classes.pill,
            { [classes.selected]: selected === item.id },
            { [classes.disabled]: selected !== item.id && item.disabled }
          )}
          onClick={selected !== item.id ? () => onSelect(item.id) : null}
        >
          <Text
            disabled={selected !== item.id && item.disabled}
            className={classes.text}
          >
            {item.label}
          </Text>
        </button>
      ))}
    </div>
  )
}

export default Group
