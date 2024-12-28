import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rayuela - Agencia de Marketing digital',
  description: 'Servicios de marketing digital y diseño web',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

