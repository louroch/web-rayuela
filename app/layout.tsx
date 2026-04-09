import './globals.css' 
import type { Metadata } from 'next' 
import { Inter } from 'next/font/google' 
import { NavBar } from '@/components/ui/nav-bar' 
import { Footer } from '@/components/ui/footer'
import { HopscotchMenu } from '@/components/ui/hopscotch-menu'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = { 
  title: 'Rayuela - Agencia de Marketing digital', 
  description: 'Servicios de marketing digital y diseño web', 
}

export default function RootLayout({ children, }: { children: React.ReactNode }) { 
  return ( 
    <html lang="es"> 
      <body className={inter.className}> 
        <NavBar />
        <HopscotchMenu />
        <main>{children}</main> 
        <Footer />
      </body> 
    </html> 
  ) 
}