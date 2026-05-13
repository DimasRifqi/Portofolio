import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/** Fade + slide up on scroll reveal */
export function FadeUp({ children, delay = 0, duration = 0.6, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Fade in on scroll reveal */
export function FadeIn({ children, delay = 0, duration = 0.5, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Staggered children container */
export function StaggerContainer({ children, className = '', style = {}, staggerDelay = 0.1 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Child item for StaggerContainer */
export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Section eyebrow label */
export function SectionEyebrow({ icon, label }) {
  return (
    <div className="section-eyebrow">
      {icon && <span style={{ display: 'flex' }}>{icon}</span>}
      {label}
    </div>
  )
}

/** Section heading block */
export function SectionHeading({ eyebrow, eyebrowIcon, title, subtitle, center = true }) {
  return (
    <FadeUp style={{ textAlign: center ? 'center' : 'left', marginBottom: '56px' }}>
      {eyebrow && <SectionEyebrow icon={eyebrowIcon} label={eyebrow} />}
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '16px',
        color: '#f1f5f9',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: 560, margin: center ? '0 auto' : '0', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </FadeUp>
  )
}

/** Animated progress bar */
export function ProgressBar({ percent, color, label, value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div ref={ref} style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500 }}>{label}</span>
        <span style={{ color: color, fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{value}%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }}
        />
      </div>
    </div>
  )
}
