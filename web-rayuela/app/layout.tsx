import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rayuela - Estrategias que Transforman',
  description: 'Somos arquitectos de experiencias digitales que convierten ideas en resultados tangibles.',
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

