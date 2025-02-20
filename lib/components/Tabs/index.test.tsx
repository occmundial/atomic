import { fireEvent, render } from '@testing-library/react'

import Tabs from './'
import { TabsProviderUncontrolled } from './context'
import Tab from './Tab'
import TabContent from './TabContent'

describe('Tab', () => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }))

  it('should throw an error', () => {
    expect(() => render(<Tabs size="large">Pruebas</Tabs>)).toThrow(
      'useTabsContext must be used within a TabsProvider'
    )
  })
  it('should not render text child', () => {
    const { queryByText } = render(
      <TabsProviderUncontrolled>
        <Tabs size="large">Tab prueba</Tabs>
      </TabsProviderUncontrolled>
    )
    expect(queryByText('Tab prueba')).not.toBeInTheDocument()
  })
  it('should render tabs children', () => {
    const { queryByText } = render(
      <TabsProviderUncontrolled>
        <Tabs size="large">
          <div>Tab prueba</div>
        </Tabs>
      </TabsProviderUncontrolled>
    )
    expect(queryByText('Tab prueba')).toBeInTheDocument()
  })
  it('should be selected the first child', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tabs size="large">
          <Tab title="child 1" testId="tab-child-1" />
          <Tab title="child 2" testId="tab-child-2" />
          <Tab title="child 3" testId="tab-child-3" />
        </Tabs>
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-child-1').getAttribute('class')).toContain(
      'selected'
    )
  })
  it('should be displayed the first child content', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tabs size="large">
          <Tab title="child 1" testId="tab-child-1" />
          <Tab title="child 2" testId="tab-child-2" />
          <Tab title="child 3" testId="tab-child-3" />
        </Tabs>
        <TabContent value={0} testId="tab-content-1">
          Tab child 1 content
        </TabContent>
        <TabContent value={1} testId="tab-content-2">
          Tab child 2 content
        </TabContent>
        <TabContent value={2} testId="tab-content-3">
          Tab child 3 content
        </TabContent>
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-child-1').getAttribute('class')).toContain(
      'selected'
    )
    expect(getByTestId('tab-child-2').getAttribute('class')).not.toContain(
      'selected'
    )
    expect(getByTestId('tab-child-3').getAttribute('class')).not.toContain(
      'selected'
    )

    expect(getByTestId('tab-content-1').getAttribute('class')).not.toContain(
      'hide'
    )
    expect(getByTestId('tab-content-2').getAttribute('class')).toContain('hide')
    expect(getByTestId('tab-content-3').getAttribute('class')).toContain('hide')
  })
  it('should display content on click', () => {
    const { getByTestId } = render(
      <TabsProviderUncontrolled>
        <Tabs size="large">
          <Tab title="child 1" testId="tab-child-1" />
          <Tab title="child 2" testId="tab-child-2" />
          <Tab title="child 3" testId="tab-child-3" />
        </Tabs>
        <TabContent value={0} testId="tab-content-1">
          Tab child 1 content
        </TabContent>
        <TabContent value={1} testId="tab-content-2">
          Tab child 2 content
        </TabContent>
        <TabContent value={2} testId="tab-content-3">
          Tab child 3 content
        </TabContent>
      </TabsProviderUncontrolled>
    )
    expect(getByTestId('tab-child-1').getAttribute('class')).toContain(
      'selected'
    )
    expect(getByTestId('tab-content-1').getAttribute('class')).not.toContain(
      'hide'
    )

    const thirdTab = getByTestId('tab-child-3')
    fireEvent.click(thirdTab)

    expect(getByTestId('tab-child-3').getAttribute('class')).toContain(
      'selected'
    )
    expect(getByTestId('tab-content-3').getAttribute('class')).not.toContain(
      'hide'
    )
  })
})
