'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BenefitsContractor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Ahorra 80% del Tiempo en Reportes',
      description:
        'Lo que antes te tomaba horas, ahora lo haces en segundos. Más tiempo para ganar nuevos contratos.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Imagen Profesional',
      description:
        'Impresiona a clientes con tecnología de punta. Reportes automáticos, dashboard en vivo, app móvil.',
      color: 'from-blue-500 to-primary',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Control Total de tu Equipo',
      description:
        'Sabe exactamente dónde está cada persona, qué está haciendo y si cumplió con su horario.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Clientes Más Satisfechos',
      description:
        'Acceso 24/7 a información, transparencia total, menos llamadas preguntando por avances.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'Escala tu Negocio',
      description:
        'Gestiona más contratos sin contratar más personal administrativo. Crece sin perder control.',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
            Transforma tu negocio con{' '}
            <span className="text-primary">CleanOps</span>
          </h2>
          <p className="text-lg text-dark-medium max-w-3xl mx-auto">
            Descubre cómo nuestra plataforma puede optimizar tu gestión de
            Facility Management y llevar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative bg-white border-2 border-dark-light hover:border-primary rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl overflow-hidden">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-medium">{benefit.description}</p>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} w-0 group-hover:w-full transition-all duration-300 rounded-b-2xl`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                80%
              </motion.div>
              <p className="text-blue-100">Reducción en tiempo de reportes</p>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                3x
              </motion.div>
              <p className="text-blue-100">Más contratos gestionados</p>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                95%
              </motion.div>
              <p className="text-blue-100">Satisfacción de clientes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
