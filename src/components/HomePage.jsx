import { Nav } from './Nav'
import { Hero } from './Hero'
import { PriceCardHome } from './PriceCardHome'
import { OverOns } from './OverOns'
import { GoogleMapEmbed } from './GoogleMapEmbed'
import { Contact } from './Contact'
import { Footer } from './Footer'

import '../App.css'

export const HomePage = () => {

  return (
    <main>
        <Nav />
        <Hero />
        <PriceCardHome />
        <OverOns />
        <GoogleMapEmbed />
        <Contact />
        <Footer />
    </main>
  )
}

{/* Created by willemwebdev.com */}