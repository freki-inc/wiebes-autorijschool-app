import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from './components/HomePage'
import { PrijslijstPage } from './components/PrijslijstPage'
import { WallOfFamePage } from './components/WallOfFamePage'
import { OverOnsPage } from './components/OverOnsPage'
import { ContactPage } from './components/ContactPage'
import { PrivacyBeleid } from './components/PrivacyBeleid'
import { AlgemeneVoorwaarden } from './components/AlgemeneVoorwaarden'
import { ExamenChecklistPage } from './components/ExamenChecklistPage'
import { MilieuPage } from './components/MilieuPage'
import { DankjewelPage } from './components/DankjewelPage'
import ScrollToTop from './components/ScrollToTop'

import './App.css'

function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/prijslijst' element={<PrijslijstPage />} />
        <Route path='/walloffame' element={<WallOfFamePage />} />
        <Route path='/overons' element={<OverOnsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/privacybeleid' element={<PrivacyBeleid />} />
        <Route path='/algemenevoorwaarden' element={<AlgemeneVoorwaarden />} />
        <Route path='/examenchecklist' element={<ExamenChecklistPage />} />
        <Route path='/milieu' element={<MilieuPage />} />
        <Route path='/dankjewel' element={<DankjewelPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

{/* Created by willemwebdev.com */}