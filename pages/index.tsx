import { MDXRemote } from 'next-mdx-remote'

import Layout from '@/src/components/Layout'
import { getMdxContent } from '@/src/utils/getMDXContent'
import components from '@/src/components/MDXComponents'
import scope from '@/src/utils/scope'

export default function DocsPage({ docs, homeFile }) {
  return (
    <Layout docs={docs}>
      <MDXRemote {...homeFile.mdx} components={components} scope={scope} />
    </Layout>
  )
}

export async function getStaticProps() {
  const docsData = await getMdxContent('./src/docs')
  const docs = docsData.map(doc => ({
    slug: doc.slug,
    ...doc.data
  }))
  const homeFile = docsData.find(doc => doc.data.section === 'home')

  return {
    props: {
      docs,
      homeFile
    }
  }
}
