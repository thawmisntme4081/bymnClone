import { lazy } from 'react'

const Homepage = lazy(() => import('./pages/Homepage'))
const Contact = lazy(() => import('./pages/Contact'))
const Stadium = lazy(() => import('./pages/Stadium'))

interface ILayouts {
  path: string
  component: JSX.Element
}

export const LAYOUTS: ILayouts[] = [
  {
    path: '/',
    component: <Homepage />,
  },
  {
    path: '/contact',
    component: <Contact />,
  },
  {
    path: '/stadium',
    component: <Stadium />,
  },
]
