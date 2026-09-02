import { useState } from 'react'

import { Nav } from './Nav'
import { ExamenChecklist } from './ExamenChecklist'
import { Footer } from './Footer'

export const ExamenChecklistPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
    <main>
        <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
        />
        <ExamenChecklist />
        <Footer />
    </main>
    )
}

{/* Created by willemwebdev.com */}