import { FC, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes, user } from './LayoutRoutes'
import { RouteConfig } from './commons/interfaces'
import AdminLayout from './layouts/AdminLayout'
import PublicLayout from './layouts/PublicLayout'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (!route.private) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PublicLayout>
                    {route.component && <route.component />}
                  </PublicLayout>
                }
              />
            )
          }
          if (route.private && route.roles?.includes(user.role)) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<AdminLayout />}
              >
                {route?.children?.map((routeChild: RouteConfig) => {
                  return (
                    <Route
                      key={routeChild.path}
                      path={routeChild.path}
                      index={route.path === routeChild.path}
                      element={
                        <Suspense fallback={<div>loading...</div>}>
                          {routeChild.component && <routeChild.component />}
                        </Suspense>
                      }
                    />
                  )
                })}
              </Route>
            )
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                user.role !== 'admin' ? (
                  <Navigate replace to="/" />
                ) : (
                  <Suspense fallback={<div>loading...</div>}>
                    {route.component && <route.component />}
                  </Suspense>
                )
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
