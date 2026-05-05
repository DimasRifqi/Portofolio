import { Link } from 'react-router-dom'
import {
  FiArrowRight, FiGithub, FiLinkedin, FiDownload,
  FiCode, FiLayout, FiServer, FiStar
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Home.css'

const techStack = [
  'Laravel',
  'PHP',
  'JavaScript',
  'SQL',
  'React.js',
  'Golang',
  'Git',
  'C++',
  'java',
]

const stats = [
  { number: '2+ Years', label: 'Experience' },
  { number: '5+', label: 'Real Projects' },
  { number: '4+', label: 'Teams Collaborated' },
  { number: 'Top 3', label: 'MSIB Achievement' },
]

const services = [
  {
    icon: <FiServer size={28} />,
    title: 'Backend & API Development',
    desc: 'Membangun RESTful API yang scalable dan terintegrasi untuk web dan mobile, menggunakan Laravel serta pengelolaan database yang optimal.',
    color: '#43e97b',
  },
  {
    icon: <FiCode size={28} />,
    title: 'Full Stack Web Development',
    desc: 'Mengembangkan aplikasi web end-to-end mulai dari backend, database, hingga frontend yang responsif dan siap production.',
    color: '#ff6584',
  },
  {
    icon: <FiLayout size={28} />,
    title: 'Business System & Integration',
    desc: 'Membangun sistem digital seperti POS, e-learning, dan AI assistant dengan integrasi payment gateway, API logistik, dan AI.',
    color: '#6c63ff',
  },

]

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />

        <div className="container hero__inner">
          <div className="hero__content">
            {/* Badge */}
            <div className="hero__badge">
              <span className="glow-dot" />
              <span>Available for Work</span>
            </div>

            {/* Heading */}
            <h1 className="hero__title">
              Hi, I'm <span className="gradient-text">Dimas Rifqi Ramadhani</span>
              <br />
              <span className="hero__title-sub">Web Developer</span>
            </h1>

            {/* Description */}
            <p className="hero__desc">
              Saya seorang web developer berpengalaman yang bersemangat membangun
              aplikasi web modern, responsif, dan berkinerja tinggi. Siap mewujudkan
              ide digital Anda menjadi kenyataan.
            </p>

            {/* CTA Buttons */}
            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                Lihat Proyek <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Hubungi Saya
              </Link>
            </div>

            {/* Social Links */}
            <div className="hero__socials">
              <a
                href="https://wa.me/6289604176955"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-btn hero__social-btn--wa"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-btn hero__social-btn--li"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              {/* <a
                href="https://github.com/ahmadrizky"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-btn hero__social-btn--gh"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a> */}
              <a
                href="/CV/Dimas Rifqi Ramadhani - CV.pdf"
                className="hero__social-btn"
                aria-label="Download CV"
                download
              >
                <FiDownload size={20} />
              </a>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="hero__visual">
            <div className="hero__avatar-wrapper animate-float">
              <div className="hero__avatar-ring" />
              <div className="hero__avatar">
                <img
                  src="/foto/foto 3x4 berwarna.jpeg"
                  alt="Profile"
                  className="hero__avatar-img"
                />
              </div>

              {/* Floating badges */}
              <div className="hero__float-badge hero__float-badge--1">
                <FiServer size={14} style={{ color: '#43e97b' }} />
                <span>Backend</span>
              </div>

              <div className="hero__float-badge hero__float-badge--2">
                <FiCode size={14} style={{ color: '#ff2d20' }} />
                <span>Laravel</span>
              </div>

              <div className="hero__float-badge hero__float-badge--3">
                <span>⚡</span>
                <span>REST API</span>
              </div>

            </div>
          </div>
        </div>

        {/* Tech Stack Scroll */}
        <div className="hero__tech-strip">
          <div className="container">
            <p className="hero__tech-label">Tech Stack</p>
            <div className="hero__tech-list">
              {techStack.map((tech, i) => (
                <span key={i} className="hero__tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-number gradient-text">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Layanan Saya</h2>
            <p className="section-subtitle">
              Saya menawarkan berbagai layanan pengembangan web untuk membantu bisnis Anda tumbuh secara digital.
            </p>
          </div>

          <div className="services-grid">
            {services.map((svc, i) => (
              <div key={i} className="service-card card">
                <div
                  className="service-icon"
                  style={{ color: svc.color, background: `${svc.color}18`, border: `1px solid ${svc.color}30` }}
                >
                  {svc.icon}
                </div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/resume" className="btn btn-outline">
              Lihat Resume Saya <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
