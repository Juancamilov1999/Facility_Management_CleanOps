'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

interface DemoFormData {
  name: string
  email: string
  company: string
  userType: 'contractor' | 'owner'
  phone?: string
  message?: string
}

export default function DemoForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoFormData>()

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    // In production, replace with actual API endpoint
    console.log('Form Data:', data)

    // Store in localStorage for demo purposes
    const submissions = JSON.parse(
      localStorage.getItem('cleanops_demos') || '[]'
    )
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
    })
    localStorage.setItem('cleanops_demos', JSON.stringify(submissions))

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section
      id="demo"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-dark to-dark-medium relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-light rounded-full text-sm font-semibold mb-4">
              Solicita una Demo
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Descubre cómo CleanOps puede transformar tu operación
            </h2>

            <p className="text-lg text-dark-light mb-8">
              Agenda una demo personalizada y descubre cómo podemos ayudarte a
              centralizar y optimizar tu gestión de Facility Management.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
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
                  text: 'Demo personalizada de 30 minutos',
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
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
                  text: 'Sin compromisos ni costos',
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
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
                  text: 'Asesoría personalizada para tu caso',
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
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
                  text: 'Respuesta en menos de 24 horas',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 text-primary-light">
                    {item.icon}
                  </div>
                  <span className="text-dark-light">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-dark-medium">
                  Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    Solicita tu Demo Gratis
                  </h3>
                  <p className="text-dark-medium text-sm">
                    Completa el formulario y nos contactaremos contigo pronto.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', {
                      required: 'El nombre es requerido',
                      minLength: {
                        value: 2,
                        message: 'El nombre debe tener al menos 2 caracteres',
                      },
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-dark-light'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'El email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido',
                      },
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-dark-light'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                    placeholder="juan@empresa.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company', {
                      required: 'La empresa es requerida',
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.company ? 'border-red-500' : 'border-dark-light'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                    placeholder="Nombre de tu empresa"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                {/* User Type */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Tipo de usuario *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        value="contractor"
                        {...register('userType', {
                          required: 'Selecciona un tipo de usuario',
                        })}
                        className="peer sr-only"
                      />
                      <div className="border-2 border-dark-light peer-checked:border-primary peer-checked:bg-primary/10 rounded-lg p-4 text-center transition-all">
                        <div className="font-semibold text-dark">
                          Contratista
                        </div>
                      </div>
                    </label>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        value="owner"
                        {...register('userType', {
                          required: 'Selecciona un tipo de usuario',
                        })}
                        className="peer sr-only"
                      />
                      <div className="border-2 border-dark-light peer-checked:border-primary peer-checked:bg-primary/10 rounded-lg p-4 text-center transition-all">
                        <div className="font-semibold text-dark">
                          Building Owner
                        </div>
                      </div>
                    </label>
                  </div>
                  {errors.userType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.userType.message}
                    </p>
                  )}
                </div>

                {/* Message (optional) */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    {...register('message')}
                    className="w-full px-4 py-3 border border-dark-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Cuéntanos más sobre tus necesidades..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Solicitar Demo Gratis'
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-dark-medium text-center">
                  Al enviar este formulario, aceptas que CleanOps procese tus
                  datos para contactarte. Respetamos tu privacidad.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
