import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, User, MessageSquare, Sparkles, CheckCircle } from 'lucide-react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { FadeUp, StaggerContainer, StaggerItem, SectionHeading } from '../components/AnimationUtils'

const contactCards = [
  {
    icon: <FaWhatsapp size={22} />,
    label: 'WhatsApp',
    value: '+62 89604176955',
    sub: 'Aktif 08.00 – 22.00 WIB',
    href: 'https://wa.me/6289604176955',
    color: '#25d366',
    gradient: 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.05))',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'Dimas Rifqi Ramadhani',
    sub: 'Connect & collaborate',
    href: 'https://www.linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/',
    color: '#0a66c2',
    gradient: 'linear-gradient(135deg, rgba(10,102,194,0.15), rgba(10,102,194,0.05))',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'dimasrifqiramadhani@gmail.com',
    sub: 'Respon dalam 24 jam',
    href: 'mailto:dimasrifqiramadhani@gmail.com',
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(244,63,94,0.05))',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Lokasi',
    value: 'Surabaya, Indonesia',
    sub: 'Available Remote & Onsite',
    href: '#',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.05))',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Halo Dimas Rifqi Ramadhani! 👋\n\nNama: ${form.name}\nEmail: ${form.email}\nSubjek: ${form.subject}\n\nPesan:\n${form.message}`
    window.open(`https://wa.me/6289604176955?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 3500)
  }

  const inputStyle = (name) => ({
    width: '100%',
    background: focused === name ? 'rgba(99,102,241,0.06)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === name ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#f1f5f9',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.25s',
    boxShadow: focused === name ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
    resize: 'none',
  })

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '140px 0 80px', overflow: 'hidden', textAlign: 'center' }}>
        <div className="orb orb-1" style={{ opacity: 0.4 }} />
        <div className="orb orb-3" style={{ opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionHeading
            eyebrow="Get In Touch"
            eyebrowIcon={<Sparkles size={12} />}
            title="Let's Connect"
            subtitle="Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya. Saya siap membantu!"
          />
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'start' }}>

            {/* LEFT – Contact info */}
            <div>
              <FadeUp style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                  Hubungi Saya
                </h2>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  Pilih metode kontak yang paling nyaman. Saya biasanya merespons dalam 24 jam.
                </p>
              </FadeUp>

              {/* Contact cards */}
              <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }} staggerDelay={0.1}>
                {contactCards.map((card, i) => (
                  <StaggerItem key={i}>
                    <motion.a
                      href={card.href}
                      target={card.href !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-card"
                      style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <div style={{
                        width: 48, height: 48, borderRadius: '14px',
                        background: card.gradient,
                        border: `1px solid ${card.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: card.color, flexShrink: 0,
                        boxShadow: `0 4px 16px ${card.color}20`,
                      }}>
                        {card.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '2px' }}>
                          {card.label}
                        </div>
                        <div style={{ color: '#f1f5f9', fontSize: '0.88rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {card.value}
                        </div>
                        <div style={{ color: '#475569', fontSize: '0.78rem' }}>{card.sub}</div>
                      </div>
                      <div style={{ color: card.color, fontSize: '1.1rem', flexShrink: 0 }}>→</div>
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Quick action buttons */}
              <FadeUp delay={0.3} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <motion.a
                  href="https://wa.me/6289604176955"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    padding: '14px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.08))',
                    border: '1px solid rgba(37,211,102,0.25)',
                    color: '#4ade80', fontWeight: 700, fontSize: '0.9rem',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  <FaWhatsapp size={20} /> Chat via WhatsApp
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dimas-rifqi-ramadhani-6a9030404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    padding: '14px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(10,102,194,0.15), rgba(10,102,194,0.08))',
                    border: '1px solid rgba(10,102,194,0.25)',
                    color: '#60a5fa', fontWeight: 700, fontSize: '0.9rem',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  <FaLinkedin size={20} /> Connect on LinkedIn
                </motion.a>
              </FadeUp>
            </div>

            {/* RIGHT – Form */}
            <FadeUp delay={0.2}>
              <div className="glass-card" style={{ padding: '36px' }}>
                {/* Form header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                    <MessageSquare size={18} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '1.1rem' }}>Kirim Pesan</h3>
                </div>
                <p style={{ color: '#475569', fontSize: '0.83rem', marginBottom: '28px' }}>
                  Pesan akan dikirim langsung ke WhatsApp saya
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      style={{ textAlign: 'center', padding: '48px 24px' }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: '16px' }}
                      >
                        <CheckCircle size={56} color="#10b981" style={{ margin: '0 auto' }} />
                      </motion.div>
                      <h4 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Pesan Terkirim!</h4>
                      <p style={{ color: '#64748b', fontSize: '0.88rem' }}>WhatsApp telah terbuka. Terima kasih telah menghubungi saya!</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      id="contact-form"
                      onSubmit={handleSubmit}
                      style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
                    >
                      {/* Name + Email row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>
                            <User size={12} /> NAMA LENGKAP
                          </label>
                          <input
                            id="name" type="text" name="name"
                            placeholder="John Doe"
                            value={form.name} onChange={handleChange}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused('')}
                            style={inputStyle('name')} required
                          />
                        </div>
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>
                            <Mail size={12} /> EMAIL
                          </label>
                          <input
                            id="email" type="email" name="email"
                            placeholder="john@email.com"
                            value={form.email} onChange={handleChange}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused('')}
                            style={inputStyle('email')} required
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>
                          <Sparkles size={12} /> SUBJEK
                        </label>
                        <input
                          id="subject" type="text" name="subject"
                          placeholder="Konsultasi Proyek Web"
                          value={form.subject} onChange={handleChange}
                          onFocus={() => setFocused('subject')}
                          onBlur={() => setFocused('')}
                          style={inputStyle('subject')} required
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>
                          <MessageSquare size={12} /> PESAN
                        </label>
                        <textarea
                          id="message" name="message" rows={5}
                          placeholder="Ceritakan kebutuhan proyek Anda..."
                          value={form.message} onChange={handleChange}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused('')}
                          style={inputStyle('message')} required
                        />
                      </div>

                      <motion.button
                        type="submit"
                        id="submit-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn btn-primary"
                        style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.92rem' }}
                      >
                        <Send size={16} /> Kirim via WhatsApp
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
