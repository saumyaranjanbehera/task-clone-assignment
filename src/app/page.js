import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Footerone from './component/Footerone'
import Footer from './component/Footer'
import Profile from './component/Profile'
import Card from './component/Card'
import CardOne from './CardOne'





const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Profile />
      <Card />
      <CardOne />
      <Footerone />
      <Footer />

    </div>
  )
}

export default page