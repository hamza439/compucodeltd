import React from 'react'
import HeroSection from '../components/HeroSection'
// import Unlocking from '../components/Unlocking'
import OurClient from '../components/OurClient'
import PartnerSection from '../components/PartnerSection'
import Datamaskingsection from '../components/Datamaskingsection'
import OurCommitment from '../components/OurCommitment'
import Footer from '../components/Footer'
import Whychooseus from '../components/Whychooseus'

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Unlocking/> */}
      <Whychooseus/>
      <Datamaskingsection/>
      <OurClient/>
      <PartnerSection/>
      <OurCommitment/>
      <Footer/>
    </>
  )
}

export default Home