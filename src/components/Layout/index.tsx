import { ReactNode } from 'react'

import Header from '@/src/components/Header'
import Content from '@/src/components/Content'

export interface Doc {
  slug: string
  title: string
  section: 'components' | 'tokens' | 'hooks' | 'home'
  index?: number
}

interface LayoutProps {
  children: ReactNode
  docs: Doc[]
  doc?: Doc
}

export default function Layout({ children, docs, doc }: LayoutProps) {
  return (
    <div>
      <Header docs={docs} />
      {doc && doc.slug === 'Footer' ? children : <Content>{children}</Content>}
    </div>
  )
}
