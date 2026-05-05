import { useState } from 'react'
import { FiGithub, FiExternalLink, FiGrid, FiLayers } from 'react-icons/fi'
import './Projects.css'

const allProjects = [
  {
    title: 'Chat AI Assistant (PC Sales)',
    desc: 'Membangun aplikasi AI berbasis Laravel yang memberikan rekomendasi rakitan PC berdasarkan budget. Mengintegrasikan Gemini API, payment gateway, dan API logistik untuk mendukung transaksi end-to-end.',
    tags: ['Laravel', 'AI', 'REST API', 'Payment'],
    category: 'Full Stack',
    github: null,
    demo: null,
    private: true,
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
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                          <FiGithub size={16} /> GitHub
                        </a>
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-link proj-link--demo">
                          <FiExternalLink size={16} /> Live Demo
                        </a>
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
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-icon-btn">
                          <FiGithub size={18} />
                        </a>
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-icon-btn">
                          <FiExternalLink size={18} />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <p className="proj-desc">{proj.desc}</p>

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