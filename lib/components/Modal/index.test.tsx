import { render } from '@testing-library/react'

import Modal from './'

describe('Modal', () => {
  it('should render', () => {
    const { container, getByText } = render(<Modal show>Test</Modal>)
    expect(container.firstChild).toBeInTheDocument()
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should render a close button', () => {
    const onClose = jest.fn()
    const { getByTestId } = render(
      <Modal show onClose={onClose} testId="modal">
        Test
      </Modal>
    )
    const closeButton = getByTestId('modal__close-icon')
    expect(closeButton).toBeInTheDocument()
    closeButton.click()
    expect(onClose).toHaveBeenCalled()
  })

  it('should render footer buttons', () => {
    const onMainClick = jest.fn()
    const onSecondaryClick = jest.fn()
    const { getByTestId } = render(
      <Modal
        show
        mainBtn={{
          text: 'Ok',
          onClick: onMainClick
        }}
        secBtn={{
          text: 'Cancel',
          onClick: onSecondaryClick
        }}
        testId="modal"
      >
        Test
      </Modal>
    )
    const mainBtn = getByTestId('modal__button-main')
    const secBtn = getByTestId('modal__button-secondary')
    expect(mainBtn).toBeInTheDocument()
    expect(secBtn).toBeInTheDocument()
    mainBtn.click()
    secBtn.click()
    expect(onMainClick).toHaveBeenCalled()
    expect(onSecondaryClick).toHaveBeenCalled()
  })
})
