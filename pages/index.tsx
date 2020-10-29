import styles from '../styles/Home.module.css'
import { SideNav, LandingPage, AboutUsSection, ServicesSection, SeasonalMenu, ReviewSection, ContactSection, Footer } from '../components'

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <SideNav/>
        <div className="w-full">
          <LandingPage/>
          <AboutUsSection/>
          <ServicesSection/>
          <SeasonalMenu/>
          <ReviewSection/>
          <ContactSection/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
