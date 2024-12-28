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
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 bg-[#e8f3ee] rounded-lg overflow-hidden">
          {/* Left Column - Message */}
          <div className="p-8 flex flex-col items-center justify-center text-center relative min-h-[400px] md:min-h-0">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{backgroundImage: "url('assets/bg-cf.webp')"}}
            ></div>
            {/* Contenido superpuesto */}
            <div className="relative z-10 w-full">
              <div className="mb-6 relative w-full">
                <div className="relative h-[300px] md:h-[200px]">
                  <Image
                    src="/assets/caras-15.png"
                    alt="Character 1"
                    width={180}
                    height={180}
                    className="rounded-full absolute left-0 top-0 md:mr-40 md:mt-4 md:-mb-20"
                  />
                  <Image
                    src="/assets/caras-16.png"
                    alt="Character 2"
                    width={180}
                    height={180}
                    className="rounded-full absolute right-0 bottom-0 md:ml-60 md:-mt-5"
                  />
                </div>
              </div>
              <p className="text-lg text-[#21211F] text-pretty max-w-md mx-auto p-4 rounded">
                Queremos ser parte de tu crecimiento y acompañarte en cada paso. Contanos en qué podemos ayudarte y nos pondremos en contacto pronto para empezar juntos.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#e8f3ee] p-4 md:p-8">
            <form action={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre y Apellido
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-white border-gray-200 w-full h-10"
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
                  className="bg-white border-gray-200 w-full h-10"
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
                  className="bg-white border-gray-200 w-full h-10"
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
                className="w-full bg-[#9966FF] hover:bg-[#8a5ce6] text-white py-2 h-10"
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

