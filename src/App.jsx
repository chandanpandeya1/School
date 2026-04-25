import React from 'react'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/school/Navbar'
import HeroSection from '@/components/school/HeroSection'
import AboutSection from '@/components/school/AboutSection'
import FeaturesSection from '@/components/school/FeaturesSection'
import DayCareStrip from '@/components/school/DayCareStrip'
import LeadershipSection from '@/components/school/LeadershipSection'
import ContactSection from '@/components/school/ContactSection'
import CampusGallery from '@/components/school/CampusGallery'
import Footer from '@/components/school/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CampusGallery />
      <DayCareStrip />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </LanguageProvider>
  )
}
