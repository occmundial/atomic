import { render } from '@testing-library/react'

import Col from './'

describe('Col', () => {
  it('should render', () => {
    const { container, getByText } = render(<Col>Test</Col>)
    expect(container.firstChild).toBeInTheDocument()
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should render with className', () => {
    const { container } = render(<Col className="test">Test</Col>)
    expect(container.firstChild).toHaveClass('test')
  })

  it('should have the right breakpoint classes', () => {
    const { container } = render(
      <Col sm={{ col: 6 }} md={{ col: 4 }} lg={{ col: 3 }}>
        Test
      </Col>
    )
    const col = container.firstChild as HTMLElement
    expect(col.className).toContain('sm6')
    expect(col.className).toContain('md4')
    expect(col.className).toContain('lg3')
  })

  it('should have the right offset classes', () => {
    const { container } = render(
      <Col sm={{ offset: 3 }} md={{ offset: 2 }} lg={{ offset: 1 }}>
        Test
      </Col>
    )
    const col = container.firstChild as HTMLElement
    expect(col.className).toContain('offset-sm3')
    expect(col.className).toContain('offset-md2')
    expect(col.className).toContain('offset-lg1')
  })

  it('should have the right push classes', () => {
    const { container } = render(
      <Col sm={{ push: 3 }} md={{ push: 2 }} lg={{ push: 1 }}>
        Test
      </Col>
    )
    const col = container.firstChild as HTMLElement
    expect(col.className).toContain('push-sm3')
    expect(col.className).toContain('push-md2')
    expect(col.className).toContain('push-lg1')
  })

  it('should have the right pull classes', () => {
    const { container } = render(
      <Col sm={{ pull: 3 }} md={{ pull: 2 }} lg={{ pull: 1 }}>
        Test
      </Col>
    )
    const col = container.firstChild as HTMLElement
    expect(col.className).toContain('pull-sm3')
    expect(col.className).toContain('pull-md2')
    expect(col.className).toContain('pull-lg1')
  })
})
