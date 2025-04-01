import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Shops from './components/Shops/Shops'
import Features from './components/Features/Features'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Shops />
        <Features />
      </main>
    </>
  )
}

export default App
