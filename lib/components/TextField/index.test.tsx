import { act, fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from './'

describe('TextField', () => {
  it('should render', () => {
    const { container } = render(<TextField />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render with value', () => {
    const { getByRole } = render(<TextField value="foo" />)
    const input = getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('foo')
  })

  it('should render with placeholder', () => {
    const { getByRole } = render(<TextField placeholder="foo" />)
    const input = getByRole('textbox') as HTMLInputElement
    expect(input.placeholder).toBe('foo')
  })

  it('should render with assistive text', () => {
    const { getByText } = render(<TextField assistiveText="Assistive text" />)
    expect(getByText('Assistive text')).toBeInTheDocument()
  })

  it('should render with error', () => {
    const { container, getByText } = render(
      <TextField error allowError assistiveText="Error" />
    )
    const wrapper = container.firstChild as HTMLInputElement
    expect(wrapper.className).toContain('error')
    const error = getByText('Error') as HTMLElement
    expect(error.className).toContain('error')
  })

  it('should change the value', () => {
    const { getByRole } = render(<TextField value="foo" />)
    const input = getByRole('textbox') as HTMLInputElement
    userEvent.type(input, 'bar')
    expect(input.value).toBe('foobar')
  })

  it('should limit the characters', () => {
    const { getByRole } = render(<TextField maxLength={3} />)
    const input = getByRole('textbox') as HTMLInputElement
    userEvent.type(input, 'foobar')
    expect(input.value).toBe('foo')
  })

  it('should display a counter', () => {
    const { getByRole, getByText } = render(<TextField maxLength={5} counter />)
    const input = getByRole('textbox') as HTMLInputElement
    const counter = getByText('0 / 5') as HTMLElement
    expect(counter).toBeInTheDocument()
    userEvent.type(input, 'Hey')
    expect(counter.textContent).toBe('3 / 5')
  })
})
