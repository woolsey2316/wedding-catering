import styles from '../styles/Home.module.css'
import {SideNav} from '../components'

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <main className="flex">
        <SideNav/>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
