import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import BlogForm from './pages/blogForm'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar />
      <div className='content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/create' element={<BlogForm />} />
        <Route path='/details/:id' element={<BlogDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
