import styles from '../styles/Home.module.css'
import { SideNav, LandingPage, AboutUsSection } from '../components'

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <main className="flex">
        <SideNav/>
        <div className="w-full">
          <LandingPage/>
          <AboutUsSection/>
        </div>
      </main>
    </div>
  )
}
