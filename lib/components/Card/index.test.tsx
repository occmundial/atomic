import { render } from '@testing-library/react'

import Card from './'

describe('Card', () => {
  it('should render', () => {
    const { getByText } = render(<Card>Test</Card>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should render with custom className', () => {
    const { container } = render(<Card className="custom">Test</Card>)
    expect(container.firstChild).toHaveClass('custom')
  })

  it('should render with elevation', () => {
    const { container } = render(<Card raised>Test</Card>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('raised')
  })
})
