import Header from "./components/1-header/Header"
import Home from "./components/2-home/Home"
import About from "./components/3-About/About"
import Projects from "./components/4-projects/Projects"
import Contact from "./components/5-contact/Contact"
import Footer from "./components/6-footer/Footer"
import { useEffect, useState } from "react"

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  useEffect (()=> {
    window.addEventListener("scroll" , ()=> {
      if (window.scrollY > 300) {
        setShowScrollBTN(true)
      } else {
        setShowScrollBTN(false)
      }
    })
  }, [])
  return (
    <div id="up" className="container">
      <Header />
      <Home />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Projects/>
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a style={{opacity: showScrollBTN ? 1 : 0, transition:'1s'}} href="#up"><button className="icon-keyboard_arrow_up scroll-up"></button></a>
    </div>
  )
}

export default App
