import Code from './Code'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Flexbox from '@/components/Flexbox'
import Text from '@/components/Text'
import { createElement } from 'react'

const mdxComponents = {
  // Library components
  Button,
  Card,
  Flexbox,
  // Docs components
  code: Code,
  p: Text,
  h1: props =>
    createElement(Text, {
      tag: 'h1',
      hero: true,
      children: props.children
    }),
  h2: props =>
    createElement(Text, {
      tag: 'h2',
      headline: true,
      children: props.children
    }),
  h3: props =>
    createElement(Text, {
      tag: 'h3',
      heading: true,
      children: props.children
    }),
  h4: props =>
    createElement(Text, {
      tag: 'h4',
      subheading: true,
      children: props.children
    })
}

export default mdxComponents
