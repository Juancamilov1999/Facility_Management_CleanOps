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
            ¿Gestionas múltiples{' '}
            <span className="text-red-600">contratistas</span> sin visibilidad
            ni control real?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-medium"
          >
            Supervisar múltiples contratistas sin una plataforma unificada es
            un caos diario que pone en riesgo tu operación y reputación.
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">
              Caos con Múltiples Contratistas
            </h3>
            <p className="text-dark-medium text-sm">
              Gestionar equipos mixtos (internos y externos) en WhatsApp, correos
              y Excel es insostenible. La mayoría de propietarios luchan con esto.
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
              Cero Trazabilidad
            </h3>
            <p className="text-dark-medium text-sm">
              Imposible rastrear quién hizo qué, cuándo y dónde. Sin evidencia
              de cumplimiento ni documentación confiable.
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">
              Riesgo Operacional y Reputacional
            </h3>
            <p className="text-dark-medium text-sm">
              Sin supervisión en tiempo real, los problemas estallan sin aviso.
              Tu reputación corporativa está en juego cada día.
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
            Gestiona todos tus contratistas desde una sola{' '}
            <span className="text-primary">plataforma unificada</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-medium mb-8"
          >
            CleanOps centraliza la supervisión de todos tus contratistas de
            Facility Management en una sola plataforma, dándote trazabilidad
            completa, visibilidad en tiempo real y evidencia de todo lo que pasa
            en tu infraestructura.
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
                  'Supervisión fragmentada de contratistas',
                  'Información en WhatsApp, correos y Excel',
                  'Cero trazabilidad de actividades',
                  'Sin evidencia de cumplimiento',
                  'Problemas descubiertos tarde',
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
                  'Control centralizado de todos los contratistas',
                  'Toda la información en una sola plataforma',
                  'Trazabilidad completa de cada actividad',
                  'Evidencia automática de cumplimiento',
                  'Supervisión y alertas en tiempo real',
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
