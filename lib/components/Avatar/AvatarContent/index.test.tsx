import { render } from '@testing-library/react'

import AvatarContent from './'

describe('AvatarContent', () => {
  it('should render gender', () => {
    const { container } = render(<AvatarContent gender="f" />)
    const avatarContent = container.firstChild as HTMLElement
    expect(avatarContent).toBeInTheDocument()
    const avatarGender = avatarContent.firstChild as HTMLElement
    expect(avatarGender.className).toContain('f-')
  })

  it('should render name', () => {
    const { container, getByText } = render(<AvatarContent name="John Doe" />)
    expect(container.firstChild).toBeInTheDocument()
    expect(getByText('JD')).toBeInTheDocument()
  })

  it('should render photo', () => {
    const photoUrl = 'https://example.com/photo.png'
    const { container } = render(<AvatarContent photo={photoUrl} />)
    const avatarContent = container.firstChild as HTMLElement
    console.log(avatarContent.className)
    expect(avatarContent).toBeInTheDocument()
    const avatarPhoto = avatarContent.firstChild as HTMLElement
    expect(avatarPhoto).toHaveStyle(
      `background: url(${photoUrl}) no-repeat center center/ cover`
    )
  })
})
