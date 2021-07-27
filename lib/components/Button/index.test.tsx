import { render } from '@testing-library/react'

import Button from './'

describe('Button', () => {
  it('should render', () => {
    const { getByText, getByRole } = render(<Button>Test</Button>)
    expect(getByText('Test')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should display a custom theme', () => {
    const { getByRole } = render(<Button theme="secondary">Test</Button>)
    const button = getByRole('button')
    expect(button.className).toContain('secondary')
  })

  it('should include a custom className', () => {
    const { getByRole } = render(<Button className="test">Test</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('test')
  })

  it('should include custom styles', () => {
    const { getByRole } = render(<Button style={{ color: 'red' }}>Test</Button>)
    const button = getByRole('button')
    expect(button).toHaveStyle('color: red')
  })

  it('should disable the button', () => {
    const { getByRole } = render(<Button disabled>Test</Button>)
    const button = getByRole('button')
    expect(button.className).toContain('disabled')
  })

  it('should call an onClick function', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Test</Button>)
    getByText('Test').click()
    expect(onClick).toHaveBeenCalled()
  })
})
