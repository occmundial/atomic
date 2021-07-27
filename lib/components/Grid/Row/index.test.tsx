import { render } from '@testing-library/react'

import Row from './'

describe('Row', () => {
  it('should render', () => {
    const { container, getByText } = render(<Row>Test</Row>)
    expect(container.firstChild).toBeInTheDocument()
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should render with className', () => {
    const { container } = render(<Row className="test">Test</Row>)
    expect(container.firstChild).toHaveClass('test')
  })
})
