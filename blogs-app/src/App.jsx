import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='content'>
      <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
