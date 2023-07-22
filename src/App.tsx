import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import store from './app/store'
import Footer from './commons/Footer'
import Header from './commons/Header'

const HomePage = lazy(() => import('./pages/Homepage'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Provider>
  )
}

export default App
