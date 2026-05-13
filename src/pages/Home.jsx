import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Server, Code2, Layout, Sparkles, Zap, Globe, Cpu, Database, GitBranch } from 'lucide-react'
import { FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, SectionHeading } from '../components/AnimationUtils'

const techStack = [
  { label: 'Laravel', icon: <Code2 size={14} />, color: '#FF2D20' },
  { label: 'PHP', icon: <Cpu size={14} />, color: '#777BB4' },
  { label: 'JavaScript', icon: <Zap size={14} />, color: '#F7DF1E' },
  { label: 'React.js', icon: <Globe size={14} />, color: '#61DAFB' },
  { label: 'SQL', icon: <Database size={14} />, color: '#336791' },
  { label: 'Golang', icon: <Server size={14} />, color: '#00ADD8' },
  { label: 'Git', icon: <GitBranch size={14} />, color: '#F05032' },
  { label: 'C++', icon: <Code2 size={14} />, color: '#00599C' },
  { label: 'Java', icon: <Layout size={14} />, color: '#EA2D2E' },
]

const stats = [
  { number: '1.5+', label: 'Years Experience', color: '#6366f1' },
  { number: '5+', label: 'Real Projects', color: '#8b5cf6' },
  { number: '4+', label: 'Teams Worked', color: '#06b6d4' },
  { number: 'Top 3', label: 'MSIB Achievement', color: '#10b981' },
]

const services = [
  {
    icon: <Server size={24} />,
    title: 'Backend & API Development',
    desc: 'Membangun RESTful API yang scalable dan terintegrasi untuk web dan mobile menggunakan Laravel serta pengelolaan database yang optimal.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Full Stack Web Development',
    desc: 'Mengembangkan aplikasi web end-to-end mulai dari backend, database, hingga frontend yang responsif dan siap production.',
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(244,63,94,0.05))',
  },
  {
    icon: <Layout size={24} />,
    title: 'Business System & Integration',
    desc: 'Membangun sistem digital seperti POS, e-learning, dan AI assistant dengan integrasi payment gateway, API logistik, dan AI.',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.05))',
  },
]

function FloatBadge({ animDelay = 0, posStyle, children }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: animDelay }}
      style={{
        position: 'absolute',
        background: 'rgba(10,15,30,0.9)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '12px',
        padding: '8px 14px',
        display: 'flex', alignItems: 'center', gap: '8px',
        fontSize: '0.78rem', fontWeight: 600, color: '#f1f5f9',
        whiteSpace: 'nowrap', zIndex: 10,
        ...posStyle,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="container" style={{ width: '100%', zIndex: 2, padding: '80px 24px 60px' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center' }}>

            {/* Content */}
            <div>
              <FadeUp delay={0.1}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '999px', padding: '8px 18px', marginBottom: '28px' }}>
                  <span className="glow-dot" />
                  <span style={{ color: '#34d399', fontSize: '0.82rem', fontWeight: 600 }}>Available for Work</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <h1 style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '24px' }}>
                  Hi, I'm <span className="gradient-text">Dimas Rifqi</span>
                  <br />
                  <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75em' }}>Full Stack Web Developer</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.8, maxWidth: 520, marginBottom: '36px' }}>
                  Saya seorang web developer berpengalaman yang bersemangat membangun aplikasi web modern,
                  responsif, dan berkinerja tinggi. Siap mewujudkan ide digital Anda menjadi kenyataan.
                </p>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
                  <Link to="/projects" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Lihat Proyek <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Hubungi Saya
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.5}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { href: 'https://wa.me/6289604176955', icon: <FaWhatsapp size={18} />, color: '#25d366', label: 'WhatsApp' },
                    { href: 'https://www.linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/', icon: <FiLinkedin size={18} />, color: '#0a66c2', label: 'LinkedIn' },
                    { href: '/CV/Dimas Rifqi Ramadhani - CV.pdf', icon: <Download size={18} />, color: '#6366f1', label: 'Download CV', download: true },
                  ].map(s => (
                    <motion.a key={s.label} href={s.href}
                      target={s.download ? undefined : '_blank'}
                      rel={s.download ? undefined : 'noopener noreferrer'}
                      download={s.download || undefined}
                      aria-label={s.label}
                      whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.95 }}
                      style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Avatar */}
            <FadeIn delay={0.35}>
              <div
                className="hero-avatar-wrap"
                style={{
                  position: 'relative',
                  width: 320,
                  height: 320,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    width: 300,
                    height: 300,
                    border: '2px dashed rgba(99,102,241,0.3)',
                    borderRadius: '50%',
                    zIndex: 1,
                  }}
                />

                {/* Avatar Image */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    width: 240,
                    height: 240,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    padding: '4px',
                    boxShadow: '0 0 60px rgba(99,102,241,0.4)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: '#0a0f1e',
                    }}
                  >
                    <img
                      src="/foto/foto 3x4 berwarna.jpeg"
                      alt="Dimas Rifqi"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Floating Badge Backend */}
                <FloatBadge
                  posStyle={{
                    top: '15%',
                    right: '-5px',
                  }}
                  animDelay={0}
                >
                  <Server size={13} color="#10b981" /> Backend
                </FloatBadge>

                {/* Floating Badge Laravel */}
                <FloatBadge
                  posStyle={{
                    bottom: '28%',
                    left: '-20px',
                  }}
                  animDelay={1.5}
                >
                  <Code2 size={13} color="#f43f5e" /> Laravel
                </FloatBadge>

                {/* Floating Badge REST API */}
                <FloatBadge
                  posStyle={{
                    bottom: '12%',
                    right: '10px',
                  }}
                  animDelay={0.8}
                >
                  <Zap size={13} color="#f59e0b" /> REST API
                </FloatBadge>
              </div>
            </FadeIn>
          </div>

          {/* Tech Stack */}
          <FadeUp delay={0.6} style={{ marginTop: '60px' }}>
            <p style={{ color: '#475569', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {techStack.map((t, i) => (
                <motion.span key={i} whileHover={{ scale: 1.06, y: -2 }} className="tech-chip"
                  style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}10`, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  {t.icon} {t.label}
                </motion.span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px' }} staggerDelay={0.12}>
            {stats.map((s, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ scale: 1.04, y: -4 }} className="glass-card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em', color: s.color, marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>{s.number}</div>
                  <div style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionHeading eyebrow="What I Do" eyebrowIcon={<Sparkles size={12} />} title="My Services" subtitle="Saya menawarkan berbagai layanan pengembangan web untuk membantu bisnis Anda tumbuh secara digital." />
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }} staggerDelay={0.15}>
            {services.map((svc, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ scale: 1.02, y: -6 }} className="glass-card" style={{ padding: '36px 28px', height: '100%' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '16px', background: svc.gradient, border: `1px solid ${svc.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: svc.color, marginBottom: '20px', boxShadow: `0 8px 24px ${svc.color}20` }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '12px' }}>{svc.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.75 }}>{svc.desc}</p>
                  <div style={{ height: 2, marginTop: '24px', borderRadius: '999px', background: svc.gradient, opacity: 0.5 }} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp delay={0.2} style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/resume" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Lihat Resume Saya <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar-wrap { display: none !important; }
        }
      `}</style>
    </div>
  )
}
