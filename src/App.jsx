import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from './components/HomePage'
import { PrijslijstPage } from './components/PrijslijstPage'
import { WallOfFamePage } from './components/WallOfFamePage'
import { OverOnsPage } from './components/OverOnsPage'
import { ContactPage } from './components/ContactPage'
import { PrivacyBeleid } from './components/PrivacyBeleid'

import './App.css'

function App() {

  return (
    <BrowserRouter basename='/wiebes-autorijschool-app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/prijslijst' element={<PrijslijstPage />} />
        <Route path='/walloffame' element={<WallOfFamePage />} />
        <Route path='/overons' element={<OverOnsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/privacybeleid' element={<PrivacyBeleid />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

{/* Created by willemwebdev.com */}