import '../styles/globals.css'
import '../styles/tailwind.css'

import { LandingPage, AboutUsSection, ServicesSection, SeasonalMenu, ReviewSection, ContactSection, Footer } from '../components'

export default function Home() {
  return (
    <>
      <LandingPage/>
      <AboutUsSection/>
      <ServicesSection/>
      <SeasonalMenu/>
      <ReviewSection/>
      <ContactSection/>
      <Footer/>
    </>
        
  )
}
