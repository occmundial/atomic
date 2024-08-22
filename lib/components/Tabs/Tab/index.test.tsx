import { render } from '@testing-library/react'

import Tab from './'
import { TabsProviderUncontrolled } from '../context'

describe('Tab', () => {
  it('should throw an error', () => {
    expect(() => render(<Tab title="Tab title" testId="tab-test" />)).toThrow(
      'useTabsContext must be used within a TabsProviderUncontrolled'
    )
  })
  it('should render', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tab title="Tab title" testId="tab-test" />
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-test')).toBeInTheDocument()
    expect(getByTestId('tab-test')).toHaveTextContent('Tab title')
  })
  it('should render large size', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tab title="Tab title" testId="tab-test" size="large" />
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-test')).toBeInTheDocument()
    expect(getByTestId('tab-test').getAttribute('class')).toContain('large')
  })
  it('should render medium size', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tab title="Tab title" testId="tab-test" size="medium" />
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-test')).toBeInTheDocument()
    expect(getByTestId('tab-test').getAttribute('class')).toContain('medium')
  })
  it('should render small size', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tab title="Tab title" testId="tab-test" size="small" />
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-test')).toBeInTheDocument()
    expect(getByTestId('tab-test').getAttribute('class')).toContain('small')
  })
  it('should render with icon', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tab title="Tab title" testId="tab-test" icon="search" />
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-test')).toBeInTheDocument()
    expect(getByTestId('tab-test').firstChild.nodeName).toBe('svg')
  })
  it('should render with counter', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tab title="Tab title" testId="tab-test" counter="12" />
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-test')).toBeInTheDocument()
    expect(getByTestId('tab-test').lastChild.textContent).toBe('12')
  })
  it('should be disabled', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tab
          title="Tab title"
          testId="tab-test"
          icon="search"
          counter="12"
          disabled
        />
      </TabsProviderUncontrolled>
    )
    const tab = getByTestId('tab-test')
    expect(tab).toBeInTheDocument()
    expect(tab.getAttribute('disabled')).toBe('')
    expect(tab.getAttribute('class')).toContain('disabled')

    const icon = tab.firstChild as HTMLElement
    expect(icon.getAttribute('class')).toContain('iconDisabled')
  })
})
