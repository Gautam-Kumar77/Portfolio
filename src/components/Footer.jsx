import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>[GK]_</span>
        <span className={styles.copy}>© 2025 Gautam Kumar · Software Developer</span>
        <div className={styles.socials}>
          <a href="https://github.com/Gautam-Kumar77" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/gautamkumar7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
