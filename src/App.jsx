import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  const spotRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (spotRef.current) {
        spotRef.current.style.left = e.clientX + 'px'
        spotRef.current.style.top  = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="page-root">
      <div className="noise" />
      <div className="spotlight" ref={spotRef} />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/resume"  element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  )
}
