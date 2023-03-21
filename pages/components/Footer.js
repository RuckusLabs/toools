import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <aside className={styles.superfooter}>
        <p>Toools is a repository for frequently used tools by <a href="https://ruckuslabs.co">Ruckus Labs</a>. Learn more about this project on <a href="https://github.com/RuckusLabs/tools">GitHub</a>.</p>
      </aside>
      <aside className={styles.subfooter}>
        <p>© {new Date().getFullYear()}</p>
        <p>Made with love by <a href="https://ruckuslabs.co">{<img className={styles.ruckusLogo} src="/images/ruckus-logo.svg" alt="Ruckus Labs" />}</a></p>
      </aside>
    </footer>
  )
}

