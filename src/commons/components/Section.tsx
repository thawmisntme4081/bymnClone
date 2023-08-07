import { FC, ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title: string
}

const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className="py-7.5">
      <h2 className="uppercase mb-4 text-[28px] font-bold">{title}</h2>
      {children}
    </section>
  )
}

export default Section
