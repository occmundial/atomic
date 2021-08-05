import { render } from '@testing-library/react'

import Text from './'

describe('Text', () => {
  it('should render', () => {
    const { getByText } = render(<Text>Test</Text>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should render with custom className', () => {
    const { getByText } = render(<Text className="custom">Test</Text>)
    expect(getByText('Test')).toHaveClass('custom')
  })

  it('should render with a custom tag', () => {
    const { container } = render(<Text tag="h1">Test</Text>)
    const text = container.firstChild as HTMLElement
    expect(text.tagName).toBe('H1')
  })

  it('should render with a specified size', () => {
    const { container } = render(<Text hero>Test</Text>)
    const text = container.firstChild as HTMLElement
    expect(text.className).toContain('hero')
  })

  it('should render with a specified color', () => {
    const { container } = render(<Text primary>Test</Text>)
    const text = container.firstChild as HTMLElement
    expect(text.className).toContain('primary')
  })

  it('should render with a specified alignment', () => {
    const { container } = render(<Text right>Test</Text>)
    const text = container.firstChild as HTMLElement
    expect(text.className).toContain('right')
  })

  it('should render with a specified spacing', () => {
    const { container } = render(
      <Text topSmall bottomLarge>
        Test
      </Text>
    )
    const text = container.firstChild as HTMLElement
    expect(text.className).toContain('topSmall')
    expect(text.className).toContain('bottomLarge')
  })
})
