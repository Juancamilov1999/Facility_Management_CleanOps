import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanOps - Tu operación de Facility Management en un solo lugar',
  description: 'La plataforma integral que conecta empresas contratistas y propietarios de edificios. Trazabilidad completa, gestión en tiempo real.',
  keywords: 'facility management, gestión de edificios, contratistas, building owners, trazabilidad, operaciones',
  authors: [{ name: 'CleanOps' }],
  openGraph: {
    title: 'CleanOps - Tu operación de Facility Management en un solo lugar',
    description: 'La plataforma integral que conecta empresas contratistas y propietarios de edificios.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CleanOps - Tu operación de Facility Management en un solo lugar',
    description: 'La plataforma integral que conecta empresas contratistas y propietarios de edificios.',
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
      <body>{children}</body>
    </html>
  )
}
