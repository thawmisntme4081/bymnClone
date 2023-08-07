import { FC, ReactNode } from 'react'

interface SectionsLayoutProps {
  children: ReactNode
}

const SectionsLayout: FC<SectionsLayoutProps> = ({ children }) => {
  return <div className="bg-[#000e29] px-6">{children}</div>
}

export default SectionsLayout
