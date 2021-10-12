import { render } from '@testing-library/react'

import Avatar from './'

describe('Avatar', () => {
  it('should render', () => {
    const { container } = render(<Avatar />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render with className', () => {
    const { container } = render(<Avatar className="test" />)
    const avatar = container.firstChild as HTMLElement
    expect(avatar.className).toContain('test')
  })
})
