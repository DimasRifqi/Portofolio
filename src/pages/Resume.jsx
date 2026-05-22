import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Code2, Globe, Award, Download, ExternalLink, Sparkles } from 'lucide-react'
import { FadeUp, StaggerContainer, StaggerItem, SectionHeading, ProgressBar } from '../components/AnimationUtils'

const education = [{
  degree: 'S1 Teknik Informatika',
  school: 'Institut Teknologi Adhi Tama Surabaya',
  year: '2021 – 2026',
  desc: 'Lulus dengan IPK 3.65. Fokus pada pengembangan web, sistem backend, dan integrasi API. Aktif dalam proyek fullstack dan pengembangan solusi digital berbasis bisnis.',
  badge: 'Sarjana', badgeClass: 'badge-violet',
}]

const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Chat AI Assistant (PC Sales)',
    location: 'Skripsi',
    year: '2025 – 2026',
    desc: 'Mengembangkan aplikasi AI berbasis Laravel dan Gemini API untuk rekomendasi rakitan PC. Mengintegrasikan payment gateway dan API logistik serta meningkatkan efisiensi operasional dan konversi penjualan.',
    tags: ['Laravel', 'AI', 'REST API', 'Payment'],
    badge: 'Project',
    badgeClass: 'badge-violet'
  },

  {
    role: 'Junior Backend Developer',
    company: 'Tunjangan Dosen',
    location: 'LLDIKTI Wilayah VII - Magang',
    year: '2024',
    desc: 'Merancang dan mengelola RESTful API untuk sistem tunjangan dosen. Berkolaborasi dalam tim lintas platform untuk memastikan integrasi web dan mobile berjalan stabil.',
    tags: ['Laravel', 'REST API', 'MySQL', 'Backend'],
    badge: 'MSIB 7',
    badgeClass: 'badge-cyan'
  },

  {
    role: 'Full Stack Web Developer',
    company: 'POS Hotel & Restaurant',
    location: 'Makassar - Freelance ',
    year: '2024 – 2025',
    desc: 'Mengembangkan sistem Point of Sale (POS) untuk manajemen transaksi dan inventaris. Mengoptimalkan performa backend untuk mendukung operasional bisnis secara real-time.',
    tags: ['Laravel', 'MySQL', 'POS', 'Fullstack'],
    badge: 'Freelance',
    badgeClass: 'badge-green'
  },

  {
    role: 'Full Stack Web Developer',
    company: 'Travel & Hotel Reservation System',
    location: 'NF Academy — Studi Independen',
    year: '2024',
    desc: 'Membangun sistem reservasi hotel dengan fitur booking dan integrasi payment API. Fokus pada keamanan transaksi dan pengalaman pengguna.',
    tags: ['Laravel', 'Payment API', 'Fullstack'],
    badge: 'MSIB 6',
    badgeClass: 'badge-cyan'
  },

  {
    role: 'Full Stack Web Developer',
    company: 'E-Learning Platform',
    location: 'MI Persmin Surabaya - Kerja Praktek',
    year: '2024',
    desc: 'Mengembangkan platform e-learning untuk sekolah dasar dengan sistem manajemen materi dan evaluasi interaktif.',
    tags: ['Laravel', 'Education', 'Fullstack'],
    badge: 'Project',
    badgeClass: 'badge-violet'
  },

  {
    role: 'Assistant Laboratorium IT',
    company: 'SMK PEMUDA KRIAN',
    location: 'PKL',
    year: '08/2019 – 10/2019',
    desc: 'Troubleshooting hardware, software, dan jaringan dasar. Membantu instalasi dan maintenance perangkat laboratorium.',
    tags: ['Hardware', 'Software', 'Networking'],
    badge: 'PKL',
    badgeClass: 'badge-amber'
  },
]

const certificates = [
  { title: 'Junior Web Developer Certification', issuer: 'BNSP x NF Academy', year: '2024 - 2027', desc: 'Sertifikasi kompetensi resmi berbasis standar nasional.', link: 'https://drive.google.com/file/d/1TeoSpjdnXxObWQwVolVPATixwHtRnKTB/view?usp=sharing' },
  { title: 'Alibaba Cloud Certified Developer', issuer: 'Alibaba Cloud', year: '2024 - 2026', desc: 'Sertifikasi pengembangan aplikasi berbasis cloud.', link: 'https://drive.google.com/file/d/1Ahwig0UlFv9rVN9yJMAE7PIlHn0WYhRm/view?usp=sharing' },
  { title: 'Top 3 Best Participant MSIB Batch 6', issuer: 'NF Academy x Kampus Merdeka', year: '2024', desc: 'Penghargaan peserta terbaik program Fullstack.', link: 'https://drive.google.com/file/d/1u-wikt1LyaGhBqVbN2k39j4b2w26HTs-/view?usp=sharing' },
  { title: 'Junior Backend Developer (MSIB 7)', issuer: 'LLDIKTI Wilayah VII', year: '2024', desc: 'Pengalaman backend REST API skala instansi.', link: 'https://drive.google.com/file/d/1Dhe4pGTVHVb07H-wEUuabKwFYU1Hw1U1/view?usp=sharing' },
]

const skills = [
  { name: 'Laravel', level: 88, color: '#FF2D20' },
  { name: 'PHP', level: 88, color: '#777BB4' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E' },
  { name: 'SQL', level: 85, color: '#336791' },
  { name: 'Git & GitHub', level: 90, color: '#F05032' },
  { name: 'React.js', level: 60, color: '#61DAFB' },
  { name: 'Golang', level: 50, color: '#00ADD8' },
  { name: 'C++', level: 77, color: '#00599C' },
  { name: 'Java', level: 77, color: '#EA2D2E' },
]

const languages = [
  { name: 'Bahasa Indonesia', level: 'Native', percent: 100, color: '#10b981', flag: '🇮🇩' },
  { name: 'English', level: 'Intermediate', percent: 65, color: '#6366f1', flag: '🇺🇸' },
]

function TimelineCard({ children, delay = 0 }) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ scale: 1.01, x: 4 }}
        className="glass-card"
        style={{ padding: '24px', marginBottom: '16px' }}
      >
        {children}
      </motion.div>
    </StaggerItem>
  )
}

function SectionBlock({ icon, title, subtitle, children }) {
  return (
    <FadeUp style={{ marginBottom: '48px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <div style={{ width: 44, height: 44, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', flexShrink: 0 }}>
          {icon}
        </div>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '2px' }}>{title}</h2>
          {subtitle && <p style={{ color: '#475569', fontSize: '0.82rem' }}>{subtitle}</p>}
        </div>
      </div>
      {children}
    </FadeUp>
  )
}

export default function Resume() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '140px 0 80px', overflow: 'hidden', textAlign: 'center' }}>
        <div className="orb orb-1" style={{ opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionHeading
            eyebrow="My Journey"
            eyebrowIcon={<Sparkles size={12} />}
            title="Resume"
            subtitle="Perjalanan profesional saya — pendidikan, pengalaman, keahlian, dan kemampuan bahasa."
          />
          <FadeUp delay={0.2}>
            <a href="/CV/Dimas Rifqi Ramadhani - Resume.pdf" download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Download size={16} /> Download CV
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'start' }}>

            {/* LEFT */}
            <div>
              {/* Education */}
              <SectionBlock icon={<BookOpen size={20} />} title="Education" subtitle="Latar belakang akademik saya">
                <StaggerContainer staggerDelay={0.1}>
                  {education.map((edu, i) => (
                    <TimelineCard key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>{edu.degree}</h3>
                          <p style={{ color: '#6366f1', fontSize: '0.85rem', fontWeight: 500 }}>{edu.school}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                          <span className={`badge ${edu.badgeClass}`}>{edu.badge}</span>
                          <span style={{ color: '#475569', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{edu.year}</span>
                        </div>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.87rem', lineHeight: 1.75 }}>{edu.desc}</p>
                    </TimelineCard>
                  ))}
                </StaggerContainer>
              </SectionBlock>

              {/* Experience */}
              <SectionBlock icon={<Briefcase size={20} />} title="Experience" subtitle="Pengalaman kerja profesional saya">
                <StaggerContainer staggerDelay={0.08}>
                  {experience.map((exp, i) => (
                    <TimelineCard key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '10px' }}>
                        <div>
                          <h3
                            style={{
                              fontSize: '0.97rem',
                              fontWeight: 700,
                              color: '#f1f5f9',
                              marginBottom: '4px'
                            }}
                          >
                            {exp.role}
                          </h3>

                          <p
                            style={{
                              color: '#6366f1',
                              fontSize: '0.83rem',
                              fontWeight: 600,
                              marginBottom: '2px'
                            }}
                          >
                            {exp.company}
                          </p>

                          <p
                            style={{
                              color: '#64748b',
                              fontSize: '0.76rem',
                              fontWeight: 500
                            }}
                          >
                            {exp.location}
                          </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                          <span className={`badge ${exp.badgeClass}`}>{exp.badge}</span>
                          <span style={{ color: '#475569', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{exp.year}</span>
                        </div>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.75, marginBottom: '12px' }}>{exp.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {exp.tags.map((t, j) => <span key={j} className="badge badge-indigo">{t}</span>)}
                      </div>
                    </TimelineCard>
                  ))}
                </StaggerContainer>
              </SectionBlock>

              {/* Certificates */}
              <SectionBlock icon={<Award size={20} />} title="Certificates" subtitle="Sertifikasi & Achievement">
                <StaggerContainer staggerDelay={0.08}>
                  {certificates.map((c, i) => (
                    <TimelineCard key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '10px' }}>
                        <div>
                          <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>{c.title}</h3>
                          <p style={{ color: '#8b5cf6', fontSize: '0.83rem', fontWeight: 500 }}>{c.issuer}</p>
                        </div>
                        <span style={{ color: '#475569', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{c.year}</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.75, marginBottom: '16px' }}>{c.desc}</p>
                      <a href={c.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <ExternalLink size={13} /> View Certificate
                      </a>
                    </TimelineCard>
                  ))}
                </StaggerContainer>
              </SectionBlock>
            </div>

            {/* RIGHT */}
            <div style={{ position: 'sticky', top: '100px' }}>
              {/* Skills */}
              <FadeUp style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                    <Code2 size={20} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9' }}>Professional Skills</h2>
                    <p style={{ color: '#475569', fontSize: '0.82rem' }}>Keahlian teknis saya</p>
                  </div>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                  {skills.map((sk, i) => (
                    <ProgressBar key={i} label={sk.name} value={sk.level} percent={sk.level} color={sk.color} />
                  ))}
                </div>
              </FadeUp>

              {/* Languages */}
              <FadeUp delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9' }}>Languages</h2>
                    <p style={{ color: '#475569', fontSize: '0.82rem' }}>Kemampuan bahasa</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {languages.map((lang, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.02 }} className="glass-card" style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                        <span style={{ fontSize: '1.6rem' }}>{lang.flag}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.92rem' }}>{lang.name}</div>
                          <div style={{ color: lang.color, fontSize: '0.78rem', fontWeight: 500 }}>{lang.level}</div>
                        </div>
                        <span style={{ color: lang.color, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem' }}>{lang.percent}%</span>
                      </div>
                      <ProgressBar label="" value={lang.percent} percent={lang.percent} color={lang.color} />
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
