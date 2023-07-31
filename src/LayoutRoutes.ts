import { lazy } from 'react'
import { RouteConfig, User } from './commons/interfaces'

const Homepage = lazy(() => import('./pages/Homepage'))
const Contact = lazy(() => import('./pages/Contact'))
const Stadium = lazy(() => import('./pages/Stadium'))
const Club = lazy(() => import('./pages/Club'))
const AdminClub = lazy(() => import('./pages/Admin/Layouts/Club'))
const Dashboard = lazy(() => import('./pages/Admin/Layouts/Dashboard'))
const AdminPartners = lazy(() => import('./pages/Admin/Layouts/Partners'))

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
    private: true,
    roles: ['admin'],
    children: [
      {
        path: '/admin',
        component: Dashboard,
        private: true,
        roles: ['admin'],
      },
      {
        path: '/admin/club',
        component: AdminClub,
        private: true,
        roles: ['admin'],
      },
      {
        path: '/admin/partners',
        component: AdminPartners,
        private: true,
        roles: ['admin'],
      },
    ]
  },
]
