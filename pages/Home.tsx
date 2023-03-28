import { Footer } from '../components'
import { LandingPage, AboutUsSection, ServicesSection, ReviewSection, ContactSection } from '../components/home'
import { Menu } from '../components/services'

export default function Home() {
  return (
    <>
      <LandingPage/>
      <AboutUsSection/>
      <ServicesSection/>
      <Menu 
        menuType="Seasonal Menu"
        description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil." 
        img="home/6-1024x1024.jpg"
        xFlip={true} />
      <ReviewSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}
