import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Autocomplete from '@/components/Autocomplete'
import { Doc } from '../Layout'

import useStyles from './styles'

interface SearchProps {
  docs: Doc[]
}

export default function Search({ docs }: SearchProps) {
  const classes = useStyles()
  const route = useRouter()
  const [term, setTerm] = useState('')
  const items = useMemo(
    () =>
      docs.map(doc => ({
        text: doc.title,
        id: doc.slug,
        textRight: doc.section
      })),
    [docs]
  )

  const goToDoc = useCallback(item => route.push(item.id), [route])

  return (
    <div className={classes.searchWrap}>
      <Autocomplete
        textfieldProps={{
          placeholder: 'Search in docs',
          value: term
        }}
        droplistProps={{
          items,
          term
        }}
        onChange={setTerm}
        onMouseDown={goToDoc}
        onEnter={goToDoc}
      />
    </div>
  )
}
