'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from '@/app/actions/send-email'
import Image from 'next/image'

export function ContactForm() {
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setSending(true)
    try {
      const response = await sendEmail(formData)
      setMessage(response.message)
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      setMessage('Hubo un error al enviar el mensaje')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-[#e8f3ee] rounded-lg overflow-hidden">
          {/* Left Column - Message */}
          <div className="p-4 md:p-8 flex flex-col items-center justify-center text-center md:text-left md:items-start relative">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{backgroundImage: "url('assets/bg-cf.webp')"}}
            ></div>
            {/* Contenido superpuesto */}
            <div className="relative z-10 w-full">
              <div className="mb-6 relative w-full">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-6">
                  <Image
                    src="/assets/caras-15.png"
                    alt="Character 1"
                    width={120}
                    height={120}
                    className="rounded-full md:mr-20 md:mt-4 md:-mb-10"
                  />
                  <Image
                    src="/assets/caras-16.png"
                    alt="Character 2"
                    width={120}
                    height={120}
                    className="rounded-full md:ml-20 md:-mt-5"
                  />
                </div>
              </div>
              <p className="text-base md:text-lg text-[#21211F] text-pretty max-w-md mx-auto md:mx-0 bg-white bg-opacity-75 p-4 rounded">
                Queremos ser parte de tu crecimiento y acompañarte en cada paso. Contanos en qué podemos ayudarte y nos pondremos en contacto pronto para empezar juntos.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#e8f3ee] p-4 md:p-8">
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre y Apellido
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-white border-gray-200 w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-white border-gray-200 w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="bg-white border-gray-200 w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[100px] bg-white border-gray-200 w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-purple-500 hover:bg-purple-600 py-2 md:py-3 text-white"
                disabled={sending}
              >
                {sending ? 'Enviando...' : 'Enviar'}
              </Button>
              {message && (
                <p className="text-center mt-4 text-sm font-medium text-gray-700">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

