import { render } from '@testing-library/react'

import Alert from './'

describe('Alert', () => {
  it('should render', () => {
    const { getByText } = render(<Alert>Test</Alert>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should render with bold text', () => {
    const { getByText } = render(<Alert>*Bold* Not bold</Alert>)
    expect(getByText('Bold').className).toContain('strong')
    expect(getByText('Not bold').className).not.toContain('strong')
  })
})
