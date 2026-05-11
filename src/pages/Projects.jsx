import { useState } from 'react'
import { FiGithub, FiExternalLink, FiGrid, FiLayers } from 'react-icons/fi'
import './Projects.css'

const allProjects = [
  {
    title: 'Chat AI Assistant (PC Sales)',
    desc: 'Membangun aplikasi AI berbasis Laravel yang memberikan rekomendasi rakitan PC berdasarkan budget. Mengintegrasikan Gemini API, payment gateway, dan API logistik untuk mendukung transaksi end-to-end.',
    credentials: [
      { role: 'Admin', email: 'admin@gmail.com', password: 'password' },
      { role: 'Karyawan', email: 'karyawan@gmail.com', password: 'password' },
      { role: 'User', email: 'dimas@gmail.com', password: 'password' },
    ],
    tags: ['Laravel', 'AI', 'REST API', 'Payment'],
    category: 'Full Stack',
    github: null,
    demo: 'https://gasol.dimasrifqi.com/',
    private: false,
    featured: true,
    gradient: 'linear-gradient(135deg, #6c63ff, #00c9ff)',
    emoji: '🤖',
  },
  {
    title: 'POS Hotel & Restaurant',
    desc: 'Mengembangkan sistem Point of Sale (POS) untuk manajemen transaksi dan inventaris. Mengoptimalkan backend agar mampu menangani proses real-time secara stabil.',
    tags: ['Laravel', 'MySQL', 'POS', 'Backend'],
    category: 'Full Stack',
    github: null,
    demo: null,
    private: true,
    featured: true,
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    emoji: '🍽️',
  },
  {
    title: 'Sistem Tunjangan Dosen (LLDIKTI)',
    desc: 'Merancang dan mengelola RESTful API untuk sistem tunjangan dosen yang digunakan oleh aplikasi web dan mobile dalam tim lintas platform.',
    tags: ['Laravel', 'REST API', 'Backend', 'MySQL'],
    category: 'Backend',
    github: null,
    demo: null,
    private: true,
    featured: true,
    gradient: 'linear-gradient(135deg, #ff6584, #f093fb)',
    emoji: '🏫',
  },
  {
    title: 'Travel & Hotel Reservation',
    desc: 'Mengembangkan sistem reservasi hotel dengan fitur booking dan integrasi payment API untuk transaksi online yang aman.',
    tags: ['Laravel', 'Payment API', 'Fullstack'],
    category: 'Full Stack',
    github: null,
    demo: null,
    private: true,
    featured: false,
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    emoji: '🏨',
  },
  {
    title: 'E-Learning Platform',
    desc: 'Membangun platform e-learning untuk sekolah dasar dengan sistem manajemen materi dan evaluasi interaktif.',
    tags: ['Laravel', 'Education', 'Fullstack'],
    category: 'Full Stack',
    github: null,
    demo: null,
    private: true,
    featured: false,
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    emoji: '📚',
  },
]

const categories = ['All', 'Full Stack', 'Backend']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [expandedCreds, setExpandedCreds] = useState({})

  const toggleCreds = (title) => {
    setExpandedCreds(prev => ({ ...prev, [title]: !prev[title] }))
  }

  const filtered =
    active === 'All'
      ? allProjects
      : allProjects.filter(p => p.category === active)

  const featured = allProjects.filter(p => p.featured)

  return (
    <div className="page-wrapper">

      {/* Header */}
      <section className="projects-hero">
        <div className="hero__bg-orb hero__bg-orb--2" style={{ opacity: 0.4 }} />
        <div className="container">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            Kumpulan proyek yang saya kerjakan — mulai dari pengembangan sistem backend, REST API, hingga aplikasi full-stack berbasis kebutuhan bisnis.
            Sebagian besar proyek bersifat private (NDA).
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-section">
        <div className="container">
          <div className="feat-label">
            <FiGrid size={16} />
            <span>Featured Projects</span>
          </div>

          <div className="featured-grid">
            {featured.map((proj, i) => (
              <div key={i} className="featured-card card">
                <div className="featured-card__top" style={{ background: proj.gradient }}>
                  <span className="featured-emoji">{proj.emoji}</span>
                  <span className="featured-badge">Featured</span>
                </div>

                <div className="featured-card__body">
                  <div className="proj-category badge badge-purple">{proj.category}</div>
                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-desc">{proj.desc}</p>

                  {proj.credentials && (
                    <div className="proj-credentials" style={{ marginBottom: '1.25rem', background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div 
                        style={{ fontWeight: '600', color: '#fff', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                        onClick={() => toggleCreds(proj.title)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span>🔐</span> Akun Demo
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#00c9ff', background: 'rgba(0, 201, 255, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                          {expandedCreds[proj.title] ? 'Tutup' : 'Lihat Detail'}
                        </span>
                      </div>
                      
                      {expandedCreds[proj.title] && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                          {proj.credentials.map((cred, idx) => (
                            <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
                              <div style={{ color: '#00c9ff', fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.4rem' }}>{cred.role}</div>
                              <div style={{ color: '#d1d5db', fontSize: '0.8rem', marginBottom: '0.2rem' }}>{cred.email}</div>
                              <div style={{ color: '#9ca3af', fontSize: '0.75rem' }}>PW: {cred.password}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="proj-tags">
                    {proj.tags.map((tag, j) => (
                      <span key={j} className="badge badge-blue">{tag}</span>
                    ))}
                  </div>

                  <div className="proj-links">
                    {proj.private ? (
                      <span className="proj-private">🔒 Private Project (NDA)</span>
                    ) : (
                      <>
                        {proj.github && (
                          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                            <FiGithub size={16} /> GitHub
                          </a>
                        )}
                        {proj.demo && (
                          <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-link proj-link--demo">
                            <FiExternalLink size={16} /> Live Demo
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section all-projects-section">
        <div className="container">
          <div className="feat-label">
            <FiLayers size={16} />
            <span>All Projects</span>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${active === cat ? 'filter-tab--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {filtered.map((proj, i) => (
              <div key={i} className="project-card card">
                <div className="project-card__icon" style={{ background: proj.gradient }}>
                  <span>{proj.emoji}</span>
                </div>

                <div className="project-card__header">
                  <h3 className="proj-title">{proj.title}</h3>

                  <div className="proj-actions">
                    {proj.private ? (
                      <span className="proj-private-icon" title="Private Project">🔒</span>
                    ) : (
                      <>
                        {proj.github && (
                          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-icon-btn">
                            <FiGithub size={18} />
                          </a>
                        )}
                        {proj.demo && (
                          <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-icon-btn">
                            <FiExternalLink size={18} />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <p className="proj-desc">{proj.desc}</p>

                {proj.credentials && (
                  <div className="proj-credentials" style={{ marginBottom: '1.25rem', background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div 
                      style={{ fontWeight: '600', color: '#fff', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                      onClick={() => toggleCreds(proj.title)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>🔐</span> Akun Demo
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#00c9ff', background: 'rgba(0, 201, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {expandedCreds[proj.title] ? 'Tutup' : 'Lihat Detail'}
                      </span>
                    </div>

                    {expandedCreds[proj.title] && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                        {proj.credentials.map((cred, idx) => (
                          <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
                            <div style={{ color: '#00c9ff', fontWeight: '600', fontSize: '0.8rem', marginBottom: '0.3rem' }}>{cred.role}</div>
                            <div style={{ color: '#d1d5db', fontSize: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                              <span>{cred.email}</span>
                              <span style={{ color: '#6b7280', fontSize: '0.65rem' }}>•</span>
                              <span>PW: {cred.password}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="proj-tags">
                  {proj.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} className="badge badge-purple">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}