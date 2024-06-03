import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Advantages from './Components/Advantages/Advantages'
import Faq from './Components/FAQ/Faq'
import Features from './Components/Features/Features'
import Home from './Components/Home/Home'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Advantages />
      <AboutUs />
      <Faq />
    </>
  )
}

export default App
