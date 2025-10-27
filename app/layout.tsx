import './globals.css' 
import type { Metadata } from 'next' 
import { Inter } from 'next/font/google' 
import { NavBar } from '@/components/ui/nav-bar' 
import { Footer } from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { 
  title: 'Rayuela - Agencia de Marketing digital', 
  description: 'Servicios de marketing digital y diseño web', 
}

export default function RootLayout({ children, }: { children: React.ReactNode }) { 
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'
  
  return ( 
    <html lang="es"> 
      <body className={inter.className}> 
        {!isMaintenanceMode && <NavBar />}
        <main>{children}</main> 
        {!isMaintenanceMode && <Footer />}
      </body> 
    </html> 
  ) 
}