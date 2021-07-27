import { render } from '@testing-library/react'

import Avatar from './'

describe('Avatar', () => {
  it('should render', () => {
    const { container } = render(<Avatar />)
    expect(container.firstChild.tagName).toBe('DIV')
  })

  it('should render with className', () => {
    const { container } = render(<Avatar className="test" />)
    expect(container.firstChild.className).toContain('test')
  })
})
