import { useState } from 'react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare, FiPhone } from 'react-icons/fi'
import './Contact.css'

const contactCards = [
  {
    icon: <FaWhatsapp size={26} />,
    label: 'WhatsApp',
    value: '+62 89604176955',
    sub: 'Aktif 08.00 – 22.00 WIB',
    href: 'https://wa.me/6289604176955',
    color: '#25d366',
    bgColor: 'rgba(37, 211, 102, 0.08)',
    border: 'rgba(37, 211, 102, 0.25)',
  },
  {
    icon: <FaLinkedin size={26} />,
    label: 'LinkedIn',
    value: 'Dimas Rifqi Ramadhani',
    sub: 'linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/',
    href: 'https://www.linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/',
    color: '#0a66c2',
    bgColor: 'rgba(10, 102, 194, 0.08)',
    border: 'rgba(10, 102, 194, 0.25)',
  },
  {
    icon: <FiMail size={26} />,
    label: 'Email',
    value: 'dimasrifqiramadhani@gmail.com',
    sub: 'Respon dalam 24 jam',
    href: 'mailto:dimasrifqiramadhani@gmail.com',
    color: '#ff6584',
    bgColor: 'rgba(255, 101, 132, 0.08)',
    border: 'rgba(255, 101, 132, 0.25)',
  },
  {
    icon: <FiMapPin size={26} />,
    label: 'Lokasi',
    value: 'Surabaya, Indonesia',
    sub: 'Available Remote & Onsite',
    href: '#',
    color: '#6c63ff',
    bgColor: 'rgba(108, 99, 255, 0.08)',
    border: 'rgba(108, 99, 255, 0.25)',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // WhatsApp integration
    const msg = `Halo Dimas Rifqi Ramadhani! 👋\n\nNama: ${form.name}\nEmail: ${form.email}\nSubjek: ${form.subject}\n\nPesan:\n${form.message}`
    window.open(`https://wa.me/6289604176955?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="page-wrapper">
      {/* Header */}
      <section className="contact-hero">
        <div className="hero__bg-orb hero__bg-orb--1" style={{ opacity: 0.4 }} />
        <div className="hero__bg-orb hero__bg-orb--3" style={{ opacity: 0.3 }} />
        <div className="container">
          <h1 className="section-title">Let's Connect</h1>
          <p className="section-subtitle">
            Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui
            berbagai platform di bawah ini. Saya siap membantu!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT: Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info-title">Hubungi Saya</h2>
              <p className="contact-info-desc">
                Pilih metode kontak yang paling nyaman untuk Anda. Saya biasanya merespons dalam waktu 24 jam.
              </p>

              <div className="contact-cards">
                {contactCards.map((card, i) => (
                  <a
                    key={i}
                    href={card.href}
                    target={card.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-card"
                    style={{
                      '--card-color': card.color,
                      '--card-bg': card.bgColor,
                      '--card-border': card.border,
                    }}
                  >
                    <div className="contact-card__icon">
                      {card.icon}
                    </div>
                    <div className="contact-card__body">
                      <span className="contact-card__label">{card.label}</span>
                      <span className="contact-card__value">{card.value}</span>
                      <span className="contact-card__sub">{card.sub}</span>
                    </div>
                    <div className="contact-card__arrow">→</div>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div className="quick-links">
                <a
                  href="https://wa.me/6289604176955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn quick-btn quick-btn--wa"
                >
                  <FaWhatsapp size={20} />
                  Chat via WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn quick-btn quick-btn--li"
                >
                  <FaLinkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="contact-form-wrapper card">
              <div className="form-header">
                <FiMessageSquare size={22} />
                <h3>Kirim Pesan</h3>
              </div>
              <p className="form-sub">Pesan akan dikirim langsung ke WhatsApp saya</p>

              {submitted ? (
                <div className="form-success">
                  <span className="form-success__icon">✅</span>
                  <h4>Pesan Terkirim!</h4>
                  <p>WhatsApp telah terbuka. Terima kasih telah menghubungi saya!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <FiUser size={14} /> Nama Lengkap
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <FiMail size={14} /> Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <FiPhone size={14} /> Subjek
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className="form-input"
                      placeholder="Konsultasi Proyek Web"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      <FiMessageSquare size={14} /> Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit" id="submit-btn">
                    <FiSend size={16} />
                    Kirim via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
