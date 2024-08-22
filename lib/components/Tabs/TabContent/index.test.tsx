import { render } from '@testing-library/react'

import TabContent from './'
import { TabsProviderUncontrolled } from '../context'

describe('Tab', () => {
  it('should throw an error', () => {
    expect(() =>
      render(
        <TabContent value="1" testId="tab-content-1">
          Tab Content
        </TabContent>
      )
    ).toThrow('useTabsContext must be used within a TabsProviderUncontrolled')
  })
  it('should render', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled value="1">
        <TabContent value="1" testId="tab-content-1">
          Tab Content
        </TabContent>
      </TabsProviderUncontrolled>
    )
    const tabContent = getByTestId('tab-content-1')
    expect(tabContent).toBeInTheDocument()
    expect(tabContent.firstChild.firstChild).toHaveTextContent('Tab Content')
  })
  it('should be visible', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled value="1">
        <TabContent value="1" testId="tab-content-1">
          Tab Content
        </TabContent>
      </TabsProviderUncontrolled>
    )
    const tabContent = getByTestId('tab-content-1')
    expect(tabContent).toBeInTheDocument()
    expect(tabContent.getAttribute('class')).not.toContain('hide')
  })
  it('should be hide', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled value="1">
        <TabContent value="2" testId="tab-content-1">
          Tab Content
        </TabContent>
      </TabsProviderUncontrolled>
    )
    const tabContent = getByTestId('tab-content-1')
    expect(tabContent).toBeInTheDocument()
    expect(tabContent.getAttribute('class')).toContain('hide')
  })
})
