'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
              El Problema
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6"
          >
            ¿Cansado de operar con{' '}
            <span className="text-red-600">múltiples herramientas</span>, sin
            trazabilidad y sin visibilidad real de tu operación?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-medium"
          >
            La gestión tradicional de Facility Management es fragmentada,
            ineficiente y costosa.
          </motion.p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-red-50 p-6 rounded-xl"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">
              Información Fragmentada
            </h3>
            <p className="text-dark-medium text-sm">
              Datos dispersos en múltiples plataformas, correos y hojas de
              cálculo.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-red-50 p-6 rounded-xl"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">
              Falta de Trazabilidad
            </h3>
            <p className="text-dark-medium text-sm">
              Imposible rastrear quién hizo qué, cuándo y dónde en tiempo real.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-red-50 p-6 rounded-xl"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-600"
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
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">
              Pérdida de Tiempo
            </h3>
            <p className="text-dark-medium text-sm">
              Horas perdidas consolidando información y generando reportes
              manualmente.
            </p>
          </motion.div>
        </motion.div>

        {/* Solution */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              La Solución
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6"
          >
            Una <span className="text-primary">plataforma unificada</span> que
            centraliza toda tu operación
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-medium mb-8"
          >
            CleanOps integra todas las herramientas y procesos de Facility
            Management en una sola plataforma intuitiva, brindando visibilidad
            total y control en tiempo real.
          </motion.p>

          {/* Before/After Comparison */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            {/* Before */}
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-dark mb-4">Sin CleanOps</h3>
              <ul className="space-y-3 text-left">
                {[
                  'Múltiples plataformas y herramientas',
                  'Reportes manuales y desactualizados',
                  'Comunicación por email y WhatsApp',
                  'Sin visibilidad en tiempo real',
                  'Difícil tomar decisiones informadas',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-dark-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-primary/10 p-8 rounded-2xl border-2 border-primary">
              <h3 className="text-xl font-bold text-dark mb-4">Con CleanOps</h3>
              <ul className="space-y-3 text-left">
                {[
                  'Una sola plataforma integrada',
                  'Reportes automáticos en tiempo real',
                  'Comunicación centralizada',
                  'Trazabilidad completa 24/7',
                  'Decisiones basadas en datos',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
