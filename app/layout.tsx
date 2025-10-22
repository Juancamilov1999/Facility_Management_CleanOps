import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'CleanOps - Plataforma de Facility Management',
  description: 'La plataforma integral para Building Owners y Contratistas. Trazabilidad completa, gestión en tiempo real.',
  keywords: 'facility management, gestión de edificios, contratistas, building owners, trazabilidad, operaciones',
  authors: [{ name: 'CleanOps' }],
  openGraph: {
    title: 'CleanOps - Plataforma de Facility Management',
    description: 'La plataforma integral para Building Owners y Contratistas.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CleanOps - Plataforma de Facility Management',
    description: 'La plataforma integral para Building Owners y Contratistas.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A7BC1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
