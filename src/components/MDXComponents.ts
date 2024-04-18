import { createElement } from 'react'
import slugify from 'slugify'

import Demo from './Demo'
import Code from './Code'
import InlineCode from './InlineCode'
import Table from './Table'
import Tr from './Table/Tr'
import Th from './Table/Th'
import Td from './Table/Td'
import Hr from './Hr'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Alert from '@/components/Alert'
import Tag from '@/components/Tag'
import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import colorsNew from '@/tokens/future/colors.json'

import Anchor from './Anchor'
import Tooltip from '@/components/Tooltip'

const mdxComponents = {
  // Library components
  Button,
  Text,
  Alert,
  Tag,
  Icon,
  Card,
  Flexbox,
  Tooltip,
  colorsNew,
  // Docs components
  Demo,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
  hr: Hr,
  p: Text,
  h1: props =>
    createElement(Text, {
      tag: 'h1',
      hero: true,
      children: props.children,
      topSmall: true,
      bottomTiny: true,
      id: slugify(props.children)
    }),
  h2: props =>
    createElement(Text, {
      tag: 'h2',
      headline: true,
      children: props.children,
      topSmall: true,
      bottomTiny: true,
      id: slugify(props.children)
    }),
  h3: props =>
    createElement(Text, {
      tag: 'h3',
      heading: true,
      children: props.children,
      topSmall: true,
      bottomTiny: true,
      id: slugify(props.children)
    }),
  h4: props =>
    createElement(Text, {
      tag: 'h4',
      subheading: true,
      children: props.children,
      id: slugify(props.children)
    }),
  li: props =>
    createElement(Text, {
      tag: 'li',
      children: props.children
    }),
  a: Anchor,
  blockquote: Alert
}

export default mdxComponents
