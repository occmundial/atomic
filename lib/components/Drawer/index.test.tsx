import { render } from '@testing-library/react'

import Drawer from './'

describe('Drawer', () => {
  it('should render', () => {
    const { container, getByText } = render(<Drawer show>Test</Drawer>)
    expect(container.firstChild).toBeInTheDocument()
    expect(getByText('Test')).toBeInTheDocument()
  })
})
