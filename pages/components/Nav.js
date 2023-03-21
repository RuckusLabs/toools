import styles from './nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="/"><img className={styles.toolsLogo} src="images/tools-logo.svg" /></a></li>
        <li><a href="/rate-calculator">Rate Calculator</a></li>
      </ul>
    </nav>
  )
}