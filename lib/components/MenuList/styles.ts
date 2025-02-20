import { createUseStyles } from 'react-jss'
import { spacing } from '@/tokens/future'

type SpacingClasses = {
  [Property in keyof typeof spacing]: { padding: string }
}

function generateSpacingClasses() {
  const spacingClasses: Record<string, object> = {}
  for (const [key, value] of Object.entries(spacing)) {
    spacingClasses[key] = { padding: value }
  }
  return spacingClasses as SpacingClasses
}

export default createUseStyles({
  container: {
    marginBlock: 0,
    paddingBlock: 0,
    paddingInline: 0
  },
  ...generateSpacingClasses()
})
