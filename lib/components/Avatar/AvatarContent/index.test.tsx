import { render } from '@testing-library/react'

import AvatarContent from './'

describe('AvatarContent', () => {
  it('should render', () => {
    const { container } = render(<AvatarContent />)
    expect(container.firstChild.tagName).toBe('DIV')
  })
})
