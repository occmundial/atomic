import { render } from '@testing-library/react'

import AvatarContent from './'

describe('AvatarContent', () => {
  it('should render generic avatar', () => {
    const { container } = render(<AvatarContent />)
    const icon = container.firstChild.firstChild as HTMLElement
    expect(icon.innerHTML).toContain('person')
  })

  it('should render name', () => {
    const { getByText } = render(<AvatarContent name="John Doe" />)
    expect(getByText('JD')).toBeInTheDocument()
  })

  it('should render photo', () => {
    const photoUrl = 'https://example.com/photo.png'
    const { container } = render(<AvatarContent photo={photoUrl} />)
    const avatarContent = container.firstChild as HTMLElement
    expect(avatarContent).toHaveStyle(
      `background: url(${photoUrl}) no-repeat center center/ cover`
    )
  })
})
