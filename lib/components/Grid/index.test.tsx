import { render } from '@testing-library/react'

import Grid from './'

describe('Grid', () => {
  it('should render', () => {
    const { container, getByText } = render(<Grid>Test</Grid>)
    expect(container.firstChild).toBeInTheDocument()
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should render with className', () => {
    const { container } = render(<Grid className="test">Test</Grid>)
    expect(container.firstChild).toHaveClass('test')
  })

  it('should render with fluid class', () => {
    const { container } = render(<Grid fluid>Test</Grid>)
    const grid = container.firstChild as HTMLElement
    expect(grid.className).toContain('conFluid')
  })
})
