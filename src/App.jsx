import { useEffect } from "react"
import { initLenis } from "./utils/lenis"

import Navbar from "./components/Navbar"
import Cursor from "./components/cursor"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Pages/contact"
import About from "./Pages/about"
import Clients from "./Pages/clients"
import Portfolio from "./Pages/Portfolio"           // NEW
import Services from "./Pages/Services"             // NEW
import PortfolioDetail from "./Pages/PortfolioDetail"
import TrustedBy from "./Pages/TrustedBy"

function App() {
  useEffect(() => {
    initLenis()
  }, [])

  return (
    <>
      <Cursor />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />       {/* FIXES broken nav link */}
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trusted-by" element={<TrustedBy />} />
        </Routes>
      </Router>
    </>
  )
}

export default App