'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isContractorPage = pathname === '/contratistas'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logos/Logo CleanOps Full Color.png"
              alt="CleanOps Logo"
              width={150}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href={isContractorPage ? '/' : '/contratistas'}
              className="text-sm font-medium text-dark-medium hover:text-primary transition-colors duration-200"
            >
              {isContractorPage ? '¿Eres Building Owner?' : '¿Eres contratista?'}
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-light rounded-lg transition-all duration-300"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
