import { useState } from 'react';
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Price } from './components/Price'
import { Cars } from './components/Cars'
import { WallOfFame } from './components/WallOfFame'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const images = [
    { url: '../src/assets/images/wof1.WebP', alt: 'geslaagde leerling' },
    { url: '../src/assets/images/wof2.WebP', alt: 'geslaagde leerling' },
    { url: '../src/assets/images/wof3.WebP', alt: 'geslaagde leerling' },
    { url: '../src/assets/images/wof4.WebP', alt: 'geslaagde leerling' },
    { url: '../src/assets/images/wof5.WebP', alt: 'geslaagde leerling' },
  ];

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