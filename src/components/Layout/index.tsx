import NavTab from '@/components/NavTab'

export default function Layout({ children }) {
  return (
    <div>
      <NavTab blue fixed hideOnScroll />
      {children}
    </div>
  )
}
