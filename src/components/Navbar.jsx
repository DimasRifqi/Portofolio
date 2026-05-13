import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled
            ? 'rgba(3, 7, 18, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              style={{
                width: 38, height: 38,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
              }}
            >
              <Code2 size={18} color="#fff" />
            </motion.div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#f1f5f9' }}>
              Dimas<span style={{ color: '#818cf8' }}>Dev</span>
            </span>
          </NavLink>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', listStyle: 'none', gap: '4px', alignItems: 'center' }}
            className="nav-desktop-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '8px 18px',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: isActive ? '#818cf8' : '#94a3b8',
                    background: isActive ? 'rgba(99,102,241,0.12)' : 'transparent',
                    border: isActive ? '1px solid rgba(99,102,241,0.2)' : '1px solid transparent',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  })}
                  onMouseEnter={e => {
                    if (!e.currentTarget.style.background.includes('0.12')) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.color = '#f1f5f9'
                    }
                  }}
                  onMouseLeave={e => {
                    const isActive = e.currentTarget.classList.contains('active')
                    if (!e.currentTarget.style.background.includes('0.12')) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#94a3b8'
                    }
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.a
              href="https://wa.me/6289604176955"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: '9px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Sparkles size={14} />
              Hire Me
            </motion.a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none',
                width: 38, height: 38,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                alignItems: 'center', justifyContent: 'center',
                color: '#f1f5f9', cursor: 'pointer',
              }}
              className="nav-hamburger"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '72px', left: '16px', right: '16px',
              zIndex: 999,
              background: 'rgba(10, 15, 30, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: isActive ? '#818cf8' : '#94a3b8',
                  background: isActive ? 'rgba(99,102,241,0.12)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/6289604176955"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '8px', justifyContent: 'center' }}
            >
              <Sparkles size={14} /> Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .navbar-cta-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}