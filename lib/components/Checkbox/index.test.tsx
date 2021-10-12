import { fireEvent, render } from '@testing-library/react'

import Checkbox from './'

describe('Checkbox', () => {
  it('should render', () => {
    const { container } = render(<Checkbox />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render with a label', () => {
    const { getByText } = render(<Checkbox label="Checkbox" />)
    expect(getByText('Checkbox')).toBeInTheDocument()
  })

  it('should render with text on the right', () => {
    const { getByText } = render(<Checkbox right="Right text" />)
    expect(getByText('Right text')).toBeInTheDocument()
  })

  it('should call the onChange function with a true value', () => {
    const onChange = jest.fn()
    const { container } = render(<Checkbox onChange={onChange} />)
    fireEvent.click(container.firstChild)
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('should call the onChange function with a false value', () => {
    const onChange = jest.fn()
    const { container } = render(<Checkbox onChange={onChange} value />)
    fireEvent.click(container.firstChild)
    expect(onChange).toHaveBeenCalledWith(false)
  })
})
