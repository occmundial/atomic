import { useState } from 'react'
import { render } from '@testing-library/react'

import Pager from './'

describe('Button', () => {
  it('should render', () => {
    const { getByText } = render(<Pager currentPage={1} />)
    expect(getByText('Previous')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('9')).toBeInTheDocument()
    expect(getByText('...')).toBeInTheDocument()
    expect(getByText('10')).toBeInTheDocument()
    expect(getByText('Next')).toBeInTheDocument()
  })

  it('should display custom labels', () => {
    const { getByText } = render(
      <Pager
        currentPage={1}
        previousLabel="Older"
        nextLabel="Newer"
        breakLabel="-"
      />
    )
    expect(getByText('Older')).toBeInTheDocument()
    expect(getByText('Newer')).toBeInTheDocument()
    expect(getByText('-')).toBeInTheDocument()
  })

  it('should call an onPageChange function', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pager currentPage={1} onPageChange={onPageChange} />
    )
    getByText('2').click()
    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('should disable the previous button', () => {
    const { getByText } = render(<Pager currentPage={1} />)
    expect(getByText('Previous').parentElement.className).toContain('disabled')
  })

  it('should disable the next button', () => {
    const { getByText } = render(<Pager currentPage={10} />)
    expect(getByText('Next').parentElement.className).toContain('disabled')
  })

  it('should highlight the current page', () => {
    const { getByText } = render(<Pager currentPage={5} />)
    expect(getByText('5').className).toContain('active')
  })

  it('should hide the numbers', () => {
    const { queryByText } = render(<Pager currentPage={5} hideNumbers />)
    expect(queryByText('5')).not.toBeInTheDocument()
  })

  it('should change the current page', () => {
    const Parent = () => {
      const [currentPage, setCurrentPage] = useState(1)
      return <Pager currentPage={currentPage} onPageChange={setCurrentPage} />
    }
    const { getByText } = render(<Parent />)
    expect(getByText('1').className).toContain('active')
    expect(getByText('2').className).not.toContain('active')
    getByText('2').click()
    expect(getByText('1').className).not.toContain('active')
    expect(getByText('2').className).toContain('active')
  })

  it('should display a custom pageCount', () => {
    const { getByText } = render(<Pager currentPage={1} pageCount={100} />)
    expect(getByText('100')).toBeInTheDocument()
  })
})
