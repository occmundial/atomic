import { promises as fs } from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import glob from 'fast-glob'
import { CT } from '@/constants/index'

const showCT = process.env.ATOMIC_BRAND === CT
const excludedTitles = showCT ? ['Button', 'Tag'] : ['ButtonCT', 'TagCT']

export async function getMdxContent(source) {
  const contentGlob = `${source}/**/*.mdx`
  const files = glob.sync(contentGlob)

  if (!files.length) return []

  const content = await Promise.all(
    files.map(async filepath => {
      const slug = filepath
        .replace(source, '')
        .replace(/^\/+/, '')
        .replace(new RegExp(path.extname(filepath) + '$'), '')

      const mdxSource = await fs.readFile(filepath)
      const { content, data } = matter(mdxSource)
      const mdx = await serialize(content, { scope: data })

      return {
        filepath,
        slug,
        content,
        data,
        mdx
      }
    })
  )

  return content.filter(({ data }) => !excludedTitles.includes(data.title))
}
