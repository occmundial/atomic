import { MDXRemote } from 'next-mdx-remote'

import { getMdxContent } from '@/src/utils/getMDXContent'
import components from '@/src/components/MDXComponents'
import scope from '@/src/utils/scope'

export default function DocsPage({ post }) {
  return (
    <div>
      <MDXRemote {...post.mdx} components={components} scope={scope} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getMdxContent('./src/docs')
  const paths = posts.map(({ slug }) => ({
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
  const posts = await getMdxContent('./src/docs')
  const [post] = posts.filter(post => post.slug === slug)

  if (!post) {
    console.warn(`No content found for slug ${slug}`)
  }

  return {
    props: {
      post
    }
  }
}
