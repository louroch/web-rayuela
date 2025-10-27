import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <Image
              src="/assets/agencia.png"
              alt="Rayuela Logo"
              width={230}
              height={230}
              className="mb-6 mr-8"
            />
            <p className="text-white text-sm leading-relaxed">
              En el tablero del marketing, <br /> Rayuela siempre tiene la jugada maestra. <br />No competimos, lideramos.
            </p>
          </div>

          {/* Contact and Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">CONTACTO</h3>
              <Link 
                href="https://wa.me/5493815712204" 
                className="text-gray-300 hover:text-white transition-colors block mb-2"
              >
                Tel: +549 381 571-2204
              </Link>
              <Link 
                href="mailto:contacto@somosrayuela.com" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                contacto@somosrayuela.com

              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">NUESTRAS REDES</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/somosrayueladigital?mibextid=ZbWKwL" className="text-gray-300 hover:text-white transition-colors">
               <Image src="/assets/facebook.png" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/somos.rayuela/" className="text-gray-300 hover:text-white transition-colors">
                  <Image src="/assets/instagram.png" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="https://wa.me/5493815712204" className="text-gray-300 hover:text-white transition-colors">
                  <Image src="/assets/whatsapp.png" alt="WhatsApp" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">SUSCRÍBETE</h3>
            <div className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Ingresa tu mail"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button 
                className="bg-[#96D4BE] hover:bg-[#7BC3A9] text-black font-medium"
              >
                SUSCRIBIRME
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

