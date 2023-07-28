import { FC, Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import { routes, user } from './LayoutRoutes'
import Footer from './commons/Footer'
import Header from './commons/Header'
import Navbar from './commons/Header/Navbar'
import { RouteConfig } from './commons/interfaces'
import Menu from './pages/Admin/Menu'

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
                  <>
                    <Header />
                    <Suspense fallback={<div>loading...</div>}>
                      <route.component />
                    </Suspense>
                    <Footer />
                  </>
                }
              />
            )
          }
          if (route.private && route.roles?.includes(user.role)) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <div className="bg-[#2a3447]">
                    <Navbar />
                    <div className="flex">
                      <Menu />
                      <Outlet />
                    </div>
                  </div>
                }
              >
                {route?.children?.map((routeChild: RouteConfig) => {
                  console.log(routeChild)
                  return (
                    <Route
                      key={routeChild.path}
                      path={routeChild.path}
                      element={
                        <Suspense fallback={<div>loading...</div>}>
                          <routeChild.component />
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
                    <route.component />
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
