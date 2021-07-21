import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet from 'react-jss'
import ModalComponent from './Modal'
import styles from './styles'

const Modal = injectSheet(styles)(ModalComponent)
// eslint-disable-next-line
const { classes, ...propTypes } = ModalComponent.propTypes;
Modal.propTypes = {
  ...propTypes
}

class ModalPortal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: false
    }
    this.onTransitionEnd = this.onTransitionEnd.bind(this)
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.show && !this.props.show) {
      this.setState({
        mount: true
      })
    }
  }

  onTransitionEnd() {
    this.setState({
      mount: false
    })
  }

  render() {
    const { mount } = this.state
    const { container, show } = this.props
    const ModalComponent = (
      <Modal
        {...this.props}
        onTransitionEnd={!show && mount ? this.onTransitionEnd : null}
      />
    )
    if (container) {
      return mount ? ReactDOM.createPortal(ModalComponent, container) : null
    } else {
      return mount ? ModalComponent : null
    }
  }
}

ModalPortal.propTypes = {
  ...Modal.propTypes
}

export default ModalPortal
