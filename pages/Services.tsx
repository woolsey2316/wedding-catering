import React from 'react'
import { 
  DailyMenu,
  Footer } from '../components'
import { OurServices,
  ServicesSection,
  ReviewSection,
  SeasonalMenu,
  ContactSection
} from '../components/services'

export default function Services() {
  return (
    <>
      <OurServices/>
      <ServicesSection/>
      <ReviewSection/>
      <SeasonalMenu/>
      <DailyMenu/>
      <ContactSection/>
      <Footer/>
    </>
  )
}