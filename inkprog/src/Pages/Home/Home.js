import React from 'react'
import About from '../../Components/About/About'
import AI from '../../Components/AI/AI'
import Faq from '../../Components/Faq/Faq'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import History from '../../Components/History/History'
import Navbar from '../../Components/Navbar/Navbar'
import Services from '../../Components/Services/Services'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <AI/>
        <History/>
        <Services/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home