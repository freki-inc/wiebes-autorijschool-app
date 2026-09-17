import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { PrivacyPopup } from './components/PrivacyPopup';
import { PrijslijstPage } from './components/PrijslijstPage';
import { WallOfFamePage } from './components/WallOfFamePage';
import { OverOnsPage } from './components/OverOnsPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyBeleid } from './components/PrivacyBeleid';
import { CookieBeleid } from './components/CookieBeleid';
import { AlgemeneVoorwaarden } from './components/AlgemeneVoorwaarden';
import { ExamenChecklistPage } from './components/ExamenChecklistPage';
import { MilieuPage } from './components/MilieuPage';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function AppContent() {
  const location = useLocation()

  // Hide the popup on these two pages
  const hidePopup =
    location.pathname === '/privacybeleid' ||
    location.pathname === '/cookiebeleid'

  return (
    <>
      {!hidePopup && <PrivacyPopup />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/prijslijst' element={<PrijslijstPage />} />
        <Route path='/overons' element={<OverOnsPage />} />
        <Route path='/milieu' element={<MilieuPage />} />
        <Route path='/walloffame' element={<WallOfFamePage />} />
        <Route path='/examenchecklist' element={<ExamenChecklistPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/cookiebeleid' element={<CookieBeleid />} />
        <Route path='/privacybeleid' element={<PrivacyBeleid />} />
        <Route path='/algemenevoorwaarden' element={<AlgemeneVoorwaarden />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  )
}

export default App

{/* Created by willemwebdev.com */}