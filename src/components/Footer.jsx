import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code2, Mail, Heart } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const links = [
  { to: '/', label: 'Home' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com', icon: <FiGithub size={18} />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
  { href: 'mailto:dimasrifqiramadhani@gmail.com', icon: <Mail size={18} />, label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(3,7,18,0.8)',
      backdropFilter: 'blur(20px)',
      padding: '48px 0 28px',
      marginTop: '80px',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Code2 size={16} color="#fff" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#f1f5f9' }}>
                Dimas<span style={{ color: '#818cf8' }}>Dev</span>
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 260 }}>
              Full Stack Web Developer yang bersemangat membangun solusi digital modern dan berkinerja tinggi.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px', letterSpacing: '0.05em' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{
                    color: '#64748b', fontSize: '0.88rem', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#818cf8'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px', letterSpacing: '0.05em' }}>
              CONNECT
            </h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 40, height: 40,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8',
                    transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexWrap: 'wrap', gap: '8px',
        }}>
          <p style={{ color: '#475569', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with <Heart size={13} color="#f43f5e" fill="#f43f5e" /> by{' '}
            <span style={{ color: '#818cf8', fontWeight: 600 }}>Dimas Rifqi Ramadhani</span>
            {' '}· {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
