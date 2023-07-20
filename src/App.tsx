import { Route, Routes } from 'react-router-dom'
import Footer from './commons/Footer'
import Header from './commons/Header'
import About from './pages/About'
import HomePage from './pages/Homepage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
