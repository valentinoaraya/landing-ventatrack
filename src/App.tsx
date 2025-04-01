import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Shops from './components/Shops/Shops'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Shops />
        <Features />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}

export default App
