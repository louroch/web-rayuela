'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from '@/app/actions/send-email'
import { MessageCircle, Mail } from 'lucide-react'

export function ContactForm() {
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('email')

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

  function handleWhatsAppSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string

    const whatsappMessage = `Hola! Me llamo ${name}.\n\nEmail: ${email}\nTeléfono: ${phone}\n\n${message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/5493815712204?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="jugamos" className="relative py-16 md:py-20 px-4 bg-[#21211F] overflow-hidden">
      {/* Efectos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9966FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8BC1A7]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            ¿Jugamos?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Tenés un producto, un servicio o una idea que te quita el sueño. Nosotros tenemos la creatividad, la gestión y las herramientas para materializarlo. No busques atajos genéricos. Vení a diseñar el camino exacto que tu proyecto necesita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg overflow-hidden">
          {/* Left Column - Message */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-[#21211F] text-white">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 mb-8 text-center lg:text-left">
              <div className="w-48 lg:w-56 flex-shrink-0">
                <img 
                  src={encodeURI("/svgs/cajasorpresa.svg")} 
                  alt="" 
                  role="presentation"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Agendar una reunión<br />descubrimiento
                </h3>
                <p className="text-lg text-gray-300">
                  Elegí cómo querés contactarnos:
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                type="button"
                onClick={() => setContactMethod('whatsapp')}
                className={`flex-1 flex items-center justify-center gap-2 py-6 text-lg font-medium rounded-lg transition-all duration-300 ${
                  contactMethod === 'whatsapp'
                    ? 'bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
              <Button
                type="button"
                onClick={() => setContactMethod('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-6 text-lg font-medium rounded-lg transition-all duration-300 ${
                  contactMethod === 'email'
                    ? 'bg-[#9966FF] hover:bg-[#8a5ce6] text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="text-[#9966FF] mr-3">→</span>
                <span>Respuesta en menos de 24hs</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-[#9966FF] mr-3">→</span>
                <span>Consulta gratuita sin compromiso</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-[#9966FF] mr-3">→</span>
                <span>Propuesta personalizada</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <form 
              action={contactMethod === 'email' ? handleSubmit : undefined}
              onSubmit={contactMethod === 'whatsapp' ? handleWhatsAppSubmit : undefined}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre y Apellido
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-white border-gray-300 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF] w-full h-12 rounded-lg transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-white border-gray-300 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF] w-full h-12 rounded-lg transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="bg-white border-gray-300 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF] w-full h-12 rounded-lg transition-all"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[120px] bg-white border-gray-300 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF] w-full rounded-lg transition-all"
                  placeholder="Cuéntanos: ¿Cuál es el desafío de hoy?"
                />
              </div>
              <Button 
                type="submit" 
                className={`w-full py-3 h-12 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  contactMethod === 'whatsapp'
                    ? 'bg-[#25D366] hover:bg-[#20BA5A] text-white'
                    : 'bg-[#9966FF] hover:bg-[#8a5ce6] text-white'
                }`}
                disabled={sending}
              >
                {sending 
                  ? 'Enviando...' 
                  : contactMethod === 'whatsapp' 
                    ? 'Abrir WhatsApp' 
                    : 'Enviar mensaje'
                }
              </Button>
              {message && (
                <div className={`p-4 rounded-lg text-center text-sm font-medium ${
                  message.includes('error') || message.includes('Error') 
                    ? 'bg-red-50 text-red-700 border border-red-200' 
                    : 'bg-green-50 text-green-700 border border-green-200'
                }`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

