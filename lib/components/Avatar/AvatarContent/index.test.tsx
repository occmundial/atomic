import { render } from '@testing-library/react'

import AvatarContent from './'

describe('AvatarContent', () => {
  it('should render gender', () => {
    const { getByTestId } = render(<AvatarContent gender="f" />)
    expect(getByTestId('avatar-content')).toBeInTheDocument()
  })

  it('should render name', () => {
    const { getByTestId, getByText } = render(<AvatarContent name="John Doe" />)
    expect(getByTestId('avatar-content')).toBeInTheDocument()
    expect(getByText('JD')).toBeInTheDocument()
  })

  it('should render photo', () => {
    const { getByTestId } = render(
      <AvatarContent photo="http://placehold.it/64x64" />
    )
    expect(getByTestId('avatar-content')).toBeInTheDocument()
  })
})
