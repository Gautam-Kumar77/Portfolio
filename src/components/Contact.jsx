import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.sec}>
      <div className="section">
        <div className="section-tag">contact</div>

        <div className={styles.layout}>
          <div className={styles.left}>
            <h2 className={`section-title ${styles.h2}`}>
              Let's Build<br />
              Something<br />
              <span className="glow-cyan">Intelligent.</span>
            </h2>
            <p className={styles.sub}>
              Open to research collaborations, internships, and full-time Software Developer roles.
              Reach out directly — I respond within 24 hours.
            </p>
          </div>

          <div className={styles.right}>
            {[
              { icon: '✉', label: 'Email',    val: 'imgautii5177@gmail.com',          href: 'mailto:imgautii5177@gmail.com' },
              { icon: '📞', label: 'Phone',    val: '+91-8581925177',                    href: 'tel:+918581925177' },
              { icon: 'GH', label: 'GitHub',   val: 'github.com/Gautam-Kumar77',             href: 'https://github.com/Gautam-Kumar77',                        ext: true },
              { icon: 'in', label: 'LinkedIn', val: 'linkedin.com/in/gautamkumar7',     href: 'https://www.linkedin.com/in/gautamkumar7/',      ext: true },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.ext ? '_blank' : undefined}
                rel={l.ext ? 'noopener noreferrer' : undefined}
                className={styles.clink}
              >
                <span className={styles.clinkIcon}>{l.icon}</span>
                <div>
                  <div className={styles.clinkLabel}>{l.label}</div>
                  <div className={styles.clinkVal}>{l.val}</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}