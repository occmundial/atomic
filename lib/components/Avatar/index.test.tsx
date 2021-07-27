import { render } from '@testing-library/react'

import Avatar from './'

describe('Avatar', () => {
  it('should render', () => {
    const { getByTestId } = render(<Avatar />)
    expect(getByTestId('avatar')).toBeInTheDocument()
  })

  it('should render with className', () => {
    const { getByTestId } = render(<Avatar className="test" />)
    expect(getByTestId('avatar').className).toContain('test')
  })
})
