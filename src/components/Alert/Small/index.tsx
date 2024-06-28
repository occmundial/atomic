import Alert from '@/components/Alert'
import useWindowSize from '@/hooks/useWindowSize'
import grid from '@/tokens/grid'

const AlertSmall = () => {
  const windowSize = useWindowSize()
  return (
    <Alert
      icon
      theme="info"
      onClose={() => alert('Closing Alert')}
      size={windowSize.width < grid.xs ? 'small' : 'large'}
      cta={{
        href: 'https://www.google.com',
        target: '_blank',
        text: 'Click here.',
        onClick: () => alert('CTA Clicked')
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat
    </Alert>
  )
}

export default AlertSmall
