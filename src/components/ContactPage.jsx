import { useState } from 'react'

import { Nav } from './Nav'
import { Contact } from './Contact'
import { Footer } from './Footer'

export const ContactPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
    <main>
        <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
        />
        <Contact />
        <Footer />
    </main>
    )
}

{/* Created by willemwebdev.com */}