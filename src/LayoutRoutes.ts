import { lazy } from 'react'
import { RouteConfig, User } from './commons/interfaces'

const Admin = lazy(() => import('./pages/Admin'))
const Homepage = lazy(() => import('./pages/Homepage'))
const Contact = lazy(() => import('./pages/Contact'))
const Stadium = lazy(() => import('./pages/Stadium'))
const Club = lazy(() => import('./pages/Club'))

export const user: User = {
  role: 'admin',
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/stadium',
    component: Stadium,
  },
  {
    path: '/club',
    component: Club,
  },
  {
    path: '/admin',
    component: Admin,
    private: true,
    roles: ['admin'],
  },
]
