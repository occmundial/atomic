import spacing from '@/tokens/ct/spacing.json'

const styles = {
  autoComplete: {
    position: 'relative'
  },
  droplist: {
    position: 'absolute',
    zIndex: 2,
    top: `calc(100% + ${spacing['size-2']})`,
    left: 0,
    width: '100%'
  },
  pushDroplist: {
    top: `calc(100% - 28px)`
  },
  withoutText: {
    top: '100%'
  }
}

export default styles
