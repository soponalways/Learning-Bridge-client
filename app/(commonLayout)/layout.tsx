import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/shared/Footer'
import React from 'react'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=''>
            <Navbar />
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
