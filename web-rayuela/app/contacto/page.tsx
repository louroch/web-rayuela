import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react'; // Eliminamos Phone

const socialMedia = [
  { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/somosrayueladigital?mibextid=ZbWKwL' },
  { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/somos.rayuela/' },
  { name: 'WhatsApp', icon: MessageCircle, link: 'https://wa.me/5493815712204' },
];



export default function ContactoPage() {
  return (
    <div className="bg-[#9966FF] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#21211F] mb-8 text-center">Contacto</h1>
          
          <Card className="mb-8 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[#9966FF]">Conéctate con nosotros</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 mb-4">
                Estamos aquí para ayudarte. Si tienes alguna pregunta o quieres discutir cómo podemos 
                ayudarte con tus necesidades de marketing digital, no dudes en ponerte en contacto con nosotros.
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9966FF] hover:text-[#7433FE] transition-colors duration-300"
                  >
                    <social.icon size={24} className="transform transition-transform duration-300 hover:scale-110" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center text-gray-800">
                <Mail size={24} className="mr-2 text-[#9966FF]" />
                <a href="mailto:info@rayuela.com" className="hover:text-[#7433FE] transition-colors duration-300 transform hover:scale-105">
                  info@rayuela.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[#21211F]">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <Input id="name" placeholder="Tu nombre" className="bg-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="bg-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="bg-white" />
                </div>
                <Button type="submit" className="w-full bg-[#9966FF] hover:bg-[#7433FE] text-white transition-colors duration-300 transform hover:scale-105">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

