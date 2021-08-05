import { MDXRemote } from 'next-mdx-remote'

import Layout from '@/src/components/Layout'
import { getMdxContent } from '@/src/utils/getMDXContent'
import components from '@/src/components/MDXComponents'
import scope from '@/src/utils/scope'

export default function DocsPage({ docs, doc }) {
  return (
    <Layout docs={docs}>
      <MDXRemote {...doc.mdx} components={components} scope={scope} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const docs = await getMdxContent('./src/docs')
  const paths = docs.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const docsData = await getMdxContent('./src/docs')
  const docs = docsData.map(doc => ({
    slug: doc.slug,
    ...doc.data
  }))
  const doc = docsData.find(docs => docs.slug === slug)

  if (!doc) {
    console.warn(`No content found for slug ${slug}`)
  }

  return {
    props: {
      docs,
      doc
    }
  }
}
