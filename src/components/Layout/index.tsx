import { ReactNode } from 'react'

import Header from '@/src/components/Header'
import Content from '@/src/components/Content'

interface LayoutProps {
  children: ReactNode
  docs: any
}

export default function Layout({ children, docs }: LayoutProps) {
  return (
    <div>
      <Header docs={docs} />
      <Content>{children}</Content>
    </div>
  )
}
