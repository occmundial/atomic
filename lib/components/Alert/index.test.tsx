import { render } from '@testing-library/react'

import Alert from './'

describe('Alert', () => {
  it('should render', () => {
    const { getByText } = render(<Alert>Test</Alert>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('has a close icon button', () => {
    const { getByTestId } = render(
      <Alert icon onClose={() => console.log('Close')} testId="alert-test">
        Alert text
      </Alert>
    )
    const closeIconElement = getByTestId('alert-test__close-icon')
    expect(closeIconElement).toBeInTheDocument()
  })

  it('has a link', () => {
    const { getByTestId } = render(
      <Alert
        icon
        cta={{
          text: 'Click here.',
          onClick: () => alert('CTA clicked!')
        }}
        testId="alert-test"
      >
        Alert text
      </Alert>
    )
    const linkElement = getByTestId('alert-test__link')
    expect(linkElement).toBeInTheDocument()
  })
})
