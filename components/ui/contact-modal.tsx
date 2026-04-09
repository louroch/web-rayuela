'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { sendEmail } from '@/app/actions/send-email'
import Image from 'next/image'
import Link from 'next/link'

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setSending(true)
    try {
      const response = await sendEmail(formData)
      setMessage(response.message)
      if (response.message.includes('éxito') || response.message.includes('enviado')) {
        setTimeout(() => {
          onOpenChange(false)
          setMessage('')
        }, 2000)
      }
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      setMessage('Hubo un error al enviar el mensaje')
    } finally {
      setSending(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#21211F] border-white/10 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-white text-center">
            Hablemos de tu <span className="text-[#9966FF]">proyecto</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center text-base">
            Elige cómo quieres contactarnos
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Redes Sociales */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Nuestras redes</h3>
            <div className="space-y-4">
              <Link
                href="https://wa.me/5493815712204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#9966FF]/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#9966FF]/20 to-[#8BC1A7]/20 group-hover:from-[#9966FF]/30 group-hover:to-[#8BC1A7]/30 transition-all">
                  <Image src="/assets/whatsapp.png" alt="WhatsApp" width={24} height={24} className="filter brightness-0 invert" />
                </div>
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div className="text-sm text-gray-400">+54 9 3815 71-2204</div>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/somos.rayuela/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#9966FF]/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#9966FF]/20 to-[#8BC1A7]/20 group-hover:from-[#9966FF]/30 group-hover:to-[#8BC1A7]/30 transition-all">
                  <Image src="/assets/instagram.png" alt="Instagram" width={24} height={24} className="filter brightness-0 invert" />
                </div>
                <div>
                  <div className="font-semibold text-white">Instagram</div>
                  <div className="text-sm text-gray-400">@somos.rayuela</div>
                </div>
              </Link>

              <Link
                href="https://www.facebook.com/somosrayueladigital?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#9966FF]/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#9966FF]/20 to-[#8BC1A7]/20 group-hover:from-[#9966FF]/30 group-hover:to-[#8BC1A7]/30 transition-all">
                  <Image src="/assets/facebook.png" alt="Facebook" width={24} height={24} className="filter brightness-0 invert" />
                </div>
                <div>
                  <div className="font-semibold text-white">Facebook</div>
                  <div className="text-sm text-gray-400">Somos Rayuela Digital</div>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#9966FF]/20 to-[#8BC1A7]/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <Link 
                    href="mailto:rayuelaagenciadigital@gmail.com"
                    className="text-sm text-[#9966FF] hover:text-[#8BC1A7] transition-colors"
                  >
                    rayuelaagenciadigital@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Envíanos un mensaje</h3>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-white mb-2">
                  Nombre y Apellido
                </label>
                <Input
                  id="modal-name"
                  name="name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF]"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF]"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-white mb-2">
                  Teléfono
                </label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF]"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-white mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="modal-message"
                  name="message"
                  required
                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#9966FF] focus:ring-1 focus:ring-[#9966FF]"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#9966FF] hover:bg-[#8a5ce6] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={sending}
              >
                {sending ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
              {message && (
                <div className={`p-4 rounded-lg text-center text-sm font-medium ${
                  message.includes('error') || message.includes('Error') 
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                    : 'bg-green-500/20 text-green-300 border border-green-500/30'
                }`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

