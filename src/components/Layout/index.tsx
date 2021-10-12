import { ReactNode } from 'react'

import Header from '@/src/components/Header'
import Content from '@/src/components/Content'

export interface Doc {
  slug: string
  title: string
  section: 'components' | 'home'
  index?: number
}

interface LayoutProps {
  children: ReactNode
  docs: Doc[]
}

export default function Layout({ children, docs }: LayoutProps) {
  return (
    <div>
      <Header docs={docs} />
      <Content>{children}</Content>
    </div>
  )
}
