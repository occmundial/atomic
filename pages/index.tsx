import { getMdxContent } from '@/src/utils/getMDXContent'

export default function DocsPage({ allMdx }) {
  console.log(allMdx)
  return <div>Hey</div>
}

export async function getStaticProps() {
  const posts = await getMdxContent('./src/docs')
  const allMdx = posts.map(post => ({
    slug: post.slug,
    ...post.data
  }))

  return {
    props: {
      allMdx
    }
  }
}
