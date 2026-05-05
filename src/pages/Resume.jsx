import { FiBookOpen, FiBriefcase, FiCode, FiGlobe, FiAward  } from 'react-icons/fi'
import './Resume.css'

const education = [
  {
    degree: 'S1 Teknik Informatika',
    school: 'Institut Teknologi Adhi Tama Surabaya',
    year: '2021 – 2026',
    desc: 'Lulus dengan IPK 3.65. Fokus pada pengembangan web, sistem backend, dan integrasi API. Aktif dalam proyek fullstack dan pengembangan solusi digital berbasis bisnis.',
    badge: 'Sarjana',
    badgeColor: 'badge-purple',
  },
]

const certificates = [
  {
    title: 'Junior Web Developer Certification',
    issuer: 'BNSP x NF Academy',
    year: '2024 - 2027',
    desc: 'Sertifikasi kompetensi resmi berbasis standar nasional.',
    link: 'https://drive.google.com/file/d/1TeoSpjdnXxObWQwVolVPATixwHtRnKTB/view?usp=sharing',
  },
  {
    title: 'Alibaba Cloud Certified Developer',
    issuer: 'Alibaba Cloud',
    year: '2024 - 2026',
    desc: 'Sertifikasi pengembangan aplikasi berbasis cloud.',
    link: 'https://drive.google.com/file/d/1Ahwig0UlFv9rVN9yJMAE7PIlHn0WYhRm/view?usp=sharing',
  },
  {
    title: 'Top 3 Best Participant MSIB Batch 6',
    issuer: 'NF Academy x Kampus Merdeka',
    year: '2024',
    desc: 'Penghargaan peserta terbaik program Fullstack.',
    link: 'https://drive.google.com/file/d/1u-wikt1LyaGhBqVbN2k39j4b2w26HTs-/view?usp=sharing',
  },
  {
    title: 'Junior Backend Developer (MSIB 7)',
    issuer: 'LLDIKTI Wilayah VII',
    year: '2024',
    desc: 'Pengalaman backend REST API skala instansi.',
    link: 'https://drive.google.com/file/d/1Dhe4pGTVHVb07H-wEUuabKwFYU1Hw1U1/view?usp=sharing',
  },
]

const experience = [
  {
    role: 'Full Stack Web Developer (Skripsi)',
    company: 'Chat AI Assistant (PC Sales)',
    year: '2025 – 2026',
    desc: 'Mengembangkan aplikasi AI berbasis Laravel dan Gemini API untuk rekomendasi rakitan PC. Mengintegrasikan payment gateway dan API logistik serta meningkatkan efisiensi operasional dan konversi penjualan.',
    tags: ['Laravel', 'AI Integration', 'REST API', 'Payment Gateway'],
    badge: 'Project',
    badgeColor: 'badge-purple',
  },
  {
    role: 'Junior Backend Developer (Magang)',
    company: 'LLDIKTI Wilayah VII',
    year: '2024',
    desc: 'Merancang dan mengelola RESTful API untuk sistem tunjangan dosen. Berkolaborasi dalam tim lintas platform untuk memastikan integrasi web dan mobile berjalan stabil.',
    tags: ['Laravel', 'REST API', 'MySQL', 'Backend'],
    badge: 'MSIB 7',
    badgeColor: 'badge-blue',
  },
  {
    role: 'Full Stack Web Developer (Freelance)',
    company: 'POS Hotel & Restaurant',
    year: '2024 – 2025',
    desc: 'Mengembangkan sistem Point of Sale (POS) untuk manajemen transaksi dan inventaris. Mengoptimalkan performa backend untuk mendukung operasional bisnis secara real-time.',
    tags: ['Laravel', 'Database', 'POS System', 'Fullstack'],
    badge: 'Freelance',
    badgeColor: 'badge-green',
  },
  {
    role: 'Full Stack Web Developer (Studi Independen)',
    company: 'Travel & Hotel Reservation System',
    year: '2024',
    desc: 'Membangun sistem reservasi hotel dengan fitur booking dan integrasi payment API. Fokus pada keamanan transaksi dan pengalaman pengguna.',
    tags: ['Laravel', 'Payment API', 'Fullstack'],
    badge: 'MSIB 6',
    badgeColor: 'badge-blue',
  },
  {
    role: 'Full Stack Web Developer (Kerja Praktek)',
    company: 'E-Learning Platform',
    year: '2024',
    desc: 'Mengembangkan platform e-learning untuk sekolah dasar dengan sistem manajemen materi dan evaluasi interaktif.',
    tags: ['Laravel', 'Education System', 'Fullstack'],
    badge: 'Project',
    badgeColor: 'badge-purple',
  },
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
  { name: 'Bahasa Indonesia', level: 'Native', percent: 100, color: '#43e97b' },
  { name: 'English', level: 'Intermediate', percent: 65, color: '#6c63ff' },
]

function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="resume-section-header">
      <div className="resume-section-icon">{icon}</div>
      <div>
        <h2 className="resume-section-title">{title}</h2>
        {subtitle && <p className="resume-section-subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <div className="page-wrapper">
      <div className="resume-hero">
        <div className="hero__bg-orb hero__bg-orb--1" style={{ opacity: 0.5 }} />
        <div className="container">
          <h1 className="section-title">My Resume</h1>
          <p className="section-subtitle">
            Perjalanan profesional saya dalam dunia pengembangan web — pendidikan, pengalaman, keahlian, dan kemampuan bahasa.
          </p>
          <a
            href="/CV/Dimas Rifqi Ramadhani - CV.pdf"
            download
            className="btn btn-primary"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="section">
        <div className="container resume-grid">

          {/* LEFT COLUMN */}
          <div className="resume-left">

            {/* Education */}
            <div className="resume-block" id="education">
              <SectionHeader
                icon={<FiBookOpen size={22} />}
                title="Education"
                subtitle="Latar belakang akademik saya"
              />
              <div className="timeline">
                {education.map((edu, i) => (
                  <div key={i} className="timeline-item card">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{edu.degree}</h3>
                        <p className="timeline-org">{edu.school}</p>
                      </div>
                      <div className="timeline-meta">
                        <span className={`badge ${edu.badgeColor}`}>{edu.badge}</span>
                        <span className="timeline-year">{edu.year}</span>
                      </div>
                    </div>
                    <p className="timeline-desc">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="resume-block" id="experience">
              <SectionHeader
                icon={<FiBriefcase size={22} />}
                title="Experience"
                subtitle="Pengalaman kerja profesional saya"
              />
              <div className="timeline">
                {experience.map((exp, i) => (
                  <div key={i} className="timeline-item card">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{exp.role}</h3>
                        <p className="timeline-org">{exp.company}</p>
                      </div>
                      <div className="timeline-meta">
                        <span className={`badge ${exp.badgeColor}`}>{exp.badge}</span>
                        <span className="timeline-year">{exp.year}</span>
                      </div>
                    </div>
                    <p className="timeline-desc">{exp.desc}</p>
                    <div className="timeline-tags">
                      {exp.tags.map((tag, j) => (
                        <span key={j} className="badge badge-purple">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="resume-block" id="certificates">
              <SectionHeader
                icon={<FiAward size={22} />}
                title="Certificates"
                subtitle="Sertifikasi & Achievement"
              />

              <div className="timeline">
                {certificates.map((c, i) => (
                  <div key={i} className="timeline-item card">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{c.title}</h3>
                        <p className="timeline-org">{c.issuer}</p>
                      </div>
                      <span className="timeline-year">{c.year}</span>
                    </div>

                    <p className="timeline-desc">{c.desc}</p>

                    {/* BUTTON GOOGLE DRIVE */}
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline cert-btn"
                    >
                      View Certificate
                    </a>
                  </div>
                ))}
              </div>
            </div>


            
          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-right">

            {/* Professional Skills */}
            <div className="resume-block" id="skills">
              <SectionHeader
                icon={<FiCode size={22} />}
                title="Professional Skills"
                subtitle="Keahlian teknis saya"
              />
              <div className="skills-list card">
                {skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="resume-block" id="languages">
              <SectionHeader
                icon={<FiGlobe size={22} />}
                title="Language"
                subtitle="Kemampuan bahasa saya"
              />
              <div className="languages-list">
                {languages.map((lang, i) => (
                  <div key={i} className="language-card card">
                    <div className="language-header">
                      <div className="language-info">
                        <span className="language-flag">
                          {lang.name === 'Bahasa Indonesia' ? '🇮🇩' : lang.name === 'English' ? '🇺🇸' : '🗣️'}
                        </span>
                        <div>
                          <h4 className="language-name">{lang.name}</h4>
                          <span className="language-level">{lang.level}</span>
                        </div>
                      </div>
                      <div
                        className="language-circle"
                        style={{ '--lang-color': lang.color, '--lang-percent': lang.percent }}
                      >
                        <span style={{ color: lang.color }}>{lang.percent}%</span>
                      </div>
                    </div>
                    <div className="progress-bar" style={{ marginTop: '16px' }}>
                      <div
                        className="progress-fill"
                        style={{ width: `${lang.percent}%`, background: `linear-gradient(90deg, ${lang.color}80, ${lang.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </div>
  )
}
