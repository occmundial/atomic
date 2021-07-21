import Modal from '@/components/Modal2'
import Button from '@/components/Button'
import Text from '@/components/Text'
import { useState } from 'react'

export default function ModalPage() {
  const [show, setShow] = useState(false)
  return (
    <div style={{ height: 3000 }}>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      <Modal show={show} onClose={() => setShow(false)}>
        <Text>Hey</Text>
      </Modal>
    </div>
  )
}
