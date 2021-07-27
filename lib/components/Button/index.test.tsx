import { render } from '@testing-library/react'

import Button from './'

describe('Button', () => {
  it('should render', () => {
    const { getByText } = render(<Button>Test</Button>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should display a custom theme', () => {
    const { container } = render(<Button theme="secondary">Test</Button>)
    expect(container.firstChild.className).toContain('secondary')
  })

  it('should include a custom className', () => {
    const { container } = render(<Button className="test">Test</Button>)
    expect(container.firstChild).toHaveClass('test')
  })

  it('should include custom styles', () => {
    const { container } = render(<Button style={{ color: 'red' }}>Test</Button>)
    expect(container.firstChild).toHaveStyle('color: red')
  })

  it('should disable the button', () => {
    const { container } = render(<Button disabled>Test</Button>)
    expect(container.firstChild.className).toContain('disabled')
  })

  it('should call an onClick function', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Test</Button>)
    getByText('Test').click()
    expect(onClick).toHaveBeenCalled()
  })
})
