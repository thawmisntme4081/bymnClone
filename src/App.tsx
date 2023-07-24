import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { LAYOUTS } from './LayoutRoutes'
import store from './app/store'
import Footer from './commons/Footer'
import Header from './commons/Header'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        {LAYOUTS.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {route.component}
              </Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </Provider>
  )
}

export default App
