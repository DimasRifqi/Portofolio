import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Lock, Grid3x3, Layers, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { FadeUp, StaggerContainer, StaggerItem, SectionHeading } from '../components/AnimationUtils'

const allProjects = [
  {
    title: 'Chat AI Assistant (PC Sales)',
    desc: 'Membangun aplikasi AI berbasis Laravel yang memberikan rekomendasi rakitan PC berdasarkan budget. Mengintegrasikan Gemini API, payment gateway, dan API logistik untuk mendukung transaksi end-to-end.',
    credentials: [
      { role: 'Admin',    email: 'admin@gmail.com',    password: 'password' },
      { role: 'Karyawan', email: 'karyawan@gmail.com', password: 'password' },
      { role: 'User',     email: 'dimas@gmail.com',    password: 'password' },
    ],
    tags: ['Laravel', 'AI', 'REST API', 'Payment'],
    category: 'Full Stack',
    github: null,
    demo: 'https://gasol.dimasrifqi.com/',
    private: false,
    featured: true,
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 60%, #06b6d4 100%)',
    emoji: '🤖',
    accentColor: '#6366f1',
  },
  {
    title: 'POS Hotel & Restaurant',
    desc: 'Mengembangkan sistem Point of Sale (POS) untuk manajemen transaksi dan inventaris. Mengoptimalkan backend agar mampu menangani proses real-time secara stabil.',
    tags: ['Laravel', 'MySQL', 'POS', 'Backend'],
    category: 'Full Stack',
    github: null, demo: null, private: true, featured: true,
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    emoji: '🍽️', accentColor: '#10b981',
  },
  {
    title: 'Tunjangan Dosen (LLDIKTI VII)',
    desc: 'Merancang dan mengelola RESTful API untuk sistem tunjangan dosen yang digunakan oleh aplikasi web dan mobile dalam tim lintas platform.',
    tags: ['Laravel', 'REST API', 'Backend', 'MySQL'],
    category: 'Backend',
    github: null, demo: null, private: true, featured: true,
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%)',
    emoji: '🏫', accentColor: '#f43f5e',
  },
  {
    title: 'Travel & Hotel Reservation',
    desc: 'Mengembangkan sistem reservasi hotel dengan fitur booking dan integrasi payment API untuk transaksi online yang aman.',
    tags: ['Laravel', 'Payment API', 'Fullstack'],
    category: 'Full Stack',
    github: null, demo: null, private: true, featured: false,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
    emoji: '🏨', accentColor: '#06b6d4',
  },
  {
    title: 'E-Learning Platform',
    desc: 'Membangun platform e-learning untuk sekolah dasar dengan sistem manajemen materi dan evaluasi interaktif.',
    tags: ['Laravel', 'Education', 'Fullstack'],
    category: 'Full Stack',
    github: null, demo: null, private: true, featured: false,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #f43f5e 100%)',
    emoji: '📚', accentColor: '#8b5cf6',
  },
]

const categories = ['All', 'Full Stack', 'Backend']

function CredentialsPanel({ credentials, open, onToggle }) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '16px', overflow: 'hidden' }}>
      <button
        onClick={onToggle}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', color: '#f1f5f9', fontSize: '0.85rem', fontWeight: 600 }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🔐 Akun Demo</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#22d3ee', fontSize: '0.78rem', background: 'rgba(6,182,212,0.1)', padding: '3px 10px', borderRadius: '6px' }}>
          {open ? <><ChevronUp size={12} /> Tutup</> : <><ChevronDown size={12} /> Lihat Detail</>}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px', padding: '0 16px 16px' }}>
              {credentials.map((c, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '10px 12px', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ color: '#22d3ee', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px' }}>{c.role}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '2px' }}>{c.email}</div>
                  <div style={{ color: '#475569', fontSize: '0.72rem' }}>PW: {c.password}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FeaturedCard({ proj, expandedCreds, onToggleCreds }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="glass-card"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Gradient header */}
      <div style={{ height: 160, background: proj.gradient, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '4rem', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }}
        >
          {proj.emoji}
        </motion.div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', borderRadius: '8px', padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>
          ⭐ Featured
        </div>
        {/* Shimmer */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)', pointerEvents: 'none' }} />
      </div>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span className="badge badge-indigo">{proj.category}</span>
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '10px' }}>{proj.title}</h3>
        <p style={{ color: '#64748b', fontSize: '0.87rem', lineHeight: 1.75, marginBottom: '16px', flex: 1 }}>{proj.desc}</p>

        {proj.credentials && (
          <CredentialsPanel
            credentials={proj.credentials}
            open={expandedCreds[proj.title]}
            onToggle={() => onToggleCreds(proj.title)}
          />
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {proj.tags.map((t, j) => <span key={j} className="badge badge-cyan">{t}</span>)}
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {proj.private ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#475569', fontSize: '0.82rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '6px 14px' }}>
              <Lock size={13} /> Private / NDA
            </span>
          ) : (
            <>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.83rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <FiGithub size={14} /> GitHub
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.83rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ proj, expandedCreds, onToggleCreds }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="glass-card"
      style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ width: 52, height: 52, borderRadius: '14px', background: proj.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', boxShadow: `0 8px 24px ${proj.accentColor}30` }}>
          {proj.emoji}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {proj.private ? (
            <span title="Private Project" style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
              <Lock size={15} />
            </span>
          ) : (
            <>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                  <FiGithub size={15} />
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" style={{ width: 32, height: 32, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                  <ExternalLink size={15} />
                </a>
              )}
            </>
          )}
        </div>
      </div>

      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '8px' }}>{proj.title}</h3>
      <p style={{ color: '#64748b', fontSize: '0.84rem', lineHeight: 1.75, marginBottom: '14px', flex: 1 }}>{proj.desc}</p>

      {proj.credentials && (
        <CredentialsPanel
          credentials={proj.credentials}
          open={expandedCreds[proj.title]}
          onToggle={() => onToggleCreds(proj.title)}
        />
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {proj.tags.slice(0, 3).map((t, j) => <span key={j} className="badge badge-violet">{t}</span>)}
      </div>

      {/* Accent line */}
      <div style={{ height: 2, marginTop: '16px', borderRadius: '999px', background: proj.gradient, opacity: 0.4 }} />
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const [expandedCreds, setExpandedCreds] = useState({})
  const toggleCreds = (title) => setExpandedCreds(p => ({ ...p, [title]: !p[title] }))

  const featured = allProjects.filter(p => p.featured)
  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active)

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '140px 0 80px', overflow: 'hidden', textAlign: 'center' }}>
        <div className="orb orb-2" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionHeading
            eyebrow="My Work"
            eyebrowIcon={<Sparkles size={12} />}
            title="Projects"
            subtitle="Kumpulan proyek yang saya kerjakan — dari sistem backend, REST API, hingga aplikasi full-stack. Sebagian bersifat private (NDA)."
          />
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#818cf8', fontWeight: 600, fontSize: '0.85rem', marginBottom: '28px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              <Grid3x3 size={16} /> Featured Projects
            </div>
          </FadeUp>
          <StaggerContainer
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}
            staggerDelay={0.12}
          >
            {featured.map((proj, i) => (
              <StaggerItem key={i}>
                <FeaturedCard proj={proj} expandedCreds={expandedCreds} onToggleCreds={toggleCreds} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Projects */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#818cf8', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                <Layers size={16} /> All Projects
              </div>
              {/* Filter tabs */}
              <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '4px' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    style={{
                      padding: '7px 18px', borderRadius: '9px', border: 'none', cursor: 'pointer',
                      fontWeight: 600, fontSize: '0.83rem', transition: 'all 0.2s',
                      background: active === cat ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
                      color: active === cat ? '#fff' : '#64748b',
                      boxShadow: active === cat ? '0 4px 12px rgba(99,102,241,0.35)' : 'none',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}
            >
              {filtered.map((proj, i) => (
                <ProjectCard key={proj.title} proj={proj} expandedCreds={expandedCreds} onToggleCreds={toggleCreds} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}