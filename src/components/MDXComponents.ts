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
import TextField from '@/components/TextField'
import Autocomplete from '@/components/Autocomplete'
import colorsNew from '@/tokens/future/colors.json'

import Anchor from './Anchor'
import Tooltip from '@/components/Tooltip'
import Radio from '@/components/Radio'
import Droplist from '@/components/Droplist'
import PillGroup from './Pill/Group'
import PillChoice from './Pill/Choice'
import PillStack from './Pill/Stack'
import Toggle from '@/components/Toggle'
import AlertSmall from './Alert/Small'
import Checkbox from '@/components/Checkbox'
import Toaster from '@/components/Toaster'
import SimpleToaster from './Toaster/Simple'
import Avatar from '@/components/Avatar'
import Pager from '@/components/Pager'
import Modal from '@/components/Modal'
import Portal from '@/components/Portal'
import { Function } from './Function'
import { default as Grid } from './Grid'
import Placeholder from '@/components/Placeholder'
import SlideDown from './SlideDown'
import Tabs from './Tabs'
import TabsUncontrolled from './TabsUncontrolled'
import NavTop from '@/components/NavTop'
import NavItem from '@/components/NavItem'
import NavTab from '@/components/NavTab'
import NavIcon from '@/components/NavIcon'
import NavAside from '@/components/NavAside'
import Logo from '@/components/Logo'
import Footer from './Footer'
import FooterMini from './FooterMini'
import NavAvatarButton from '@/components/NavAvatarButton'
import Drawer from '@/components/Drawer'
import Dropdown from '@/components/Dropdown'
import MenuDropdown from './MenuDropdown'
import MenuList from '@/components/MenuList'
import MenuItem from '@/components/MenuItem'
import MenuUser from '@/components/MenuUser'
import MenuDivider from '@/components/MenuDivider'

const mdxComponents = {
  // Library components
  Button,
  Text,
  TextField,
  Autocomplete,
  Alert,
  Tag,
  Icon,
  Card,
  Flexbox,
  Tooltip,
  Toggle,
  Radio,
  Droplist,
  Checkbox,
  Avatar,
  Pager,
  Modal,
  Portal,
  Function,
  colorsNew,
  Toaster,
  Grid,
  Placeholder,
  SlideDown,
  Tabs,
  TabsUncontrolled,
  NavTop,
  NavItem,
  NavTab,
  NavIcon,
  NavAside,
  Logo,
  Footer,
  FooterMini,
  NavAvatarButton,
  Drawer,
  Dropdown,
  MenuDropdown,
  MenuList,
  MenuItem,
  MenuUser,
  MenuDivider,
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
  SimpleToaster,
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
  blockquote: Alert,
  PillGroup,
  PillChoice,
  PillStack,
  AlertSmall
}

export default mdxComponents
