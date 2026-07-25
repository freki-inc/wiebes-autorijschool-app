import { useState } from 'react';
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Price } from './components/Price'
import { Cars } from './components/Cars'
import { WallOfFame } from './components/WallOfFame'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import './App.css'

import wof1 from './assets/images/wof1.webp'
import wof2 from './assets/images/wof2.webp'
import wof3 from './assets/images/wof3.webp'
import wof4 from './assets/images/wof4.webp'
import wof5 from './assets/images/wof5.webp'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const images = [
    { url: wof1, alt: 'geslaagde leerling' },
    { url: wof2, alt: 'geslaagde leerling' },
    { url: wof3, alt: 'geslaagde leerling' },
    { url: wof4, alt: 'geslaagde leerling' },
    { url: wof5, alt: 'geslaagde leerling' },
  ]

  return (
    <main>
      <Nav 
          isOpen={isNavOpen}
          onOpen={() => setIsNavOpen(true)}
          onClose={() => setIsNavOpen(false)}
      />
      <Hero />
      <Price />
      <Cars />
      <WallOfFame 
        images={images} 
        autoPlayInterval={4000}
        pauseOnHover={true}
      />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

{/* Created by willemwebdev.com */}