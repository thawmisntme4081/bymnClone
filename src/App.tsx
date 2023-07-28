import { FC, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes, user } from './LayoutRoutes'
import Footer from './commons/Footer'
import Header from './commons/Header'

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
                  <Suspense fallback={<div>loading...</div>}>
                    <route.component />
                  </Suspense>
                }
              />
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
