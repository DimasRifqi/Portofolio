import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiCode, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <FiCode size={20} />
          </div>
          <span className="navbar__logo-text">
            Dimas<span>Dev</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://wa.me/6289604176955"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta btn btn-primary"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
            }
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
          Hire Me
        </a>
      </div>
    </nav>
  )
}