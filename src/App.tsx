import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import store from './app/store'
import Footer from './commons/Footer'
import Header from './commons/Header'
import Contact from './pages/Contact'
import HomePage from './pages/Homepage'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Provider>
  )
}

export default App
