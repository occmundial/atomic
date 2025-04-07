import spacing from '@/tokens/ct/spacing.json'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  top: {
    height: 21,
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing['size-2']
  },
  left: {
    float: 'left'
  },
  bottom: {
    display: 'none'
  },
  validAssistiveText: {},
  errorAssistiveText: {},
  errorIcon: {},
  stackGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing['size-4']
  },
  choiceGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing['size-4']
  },
  label: {
    display: 'none'
  }
}

export default styles
