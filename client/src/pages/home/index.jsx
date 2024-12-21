import React from 'react'
import { Details, Download, FAQ, Footer, HeroSection, Navbar, Plans, Service, Steps } from '../../components'

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Steps/>
    <Details/>
    <Service/>
    <Plans/>
    <Download/>
    <FAQ/>
    <Footer/>
    
    </>
  )
}

export default Home