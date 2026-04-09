import Link from "next/link"
import Image from "next/image"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

export function Footer() {
  return (
    <footer id="footer" className="relative bg-[#21211F] text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image
              src="/assets/agencia.png"
              alt="Rayuela Logo"
              width={230}
              height={230}
              className="mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              En el tablero del marketing, Rayuela siempre tiene la jugada maestra. No competimos, lideramos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Enlaces
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#9966FF] transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-[#9966FF] transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-[#9966FF] transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-[#9966FF] transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link 
                  href="https://wa.me/5493815712204" 
                  className="text-gray-400 hover:text-[#9966FF] transition-colors text-sm block"
                >
                  +54 9 3815 71-2204
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:rayuelaagenciadigital@gmail.com" 
                  className="text-gray-400 hover:text-[#9966FF] transition-colors text-sm block"
                >
                  rayuelaagenciadigital@gmail.com
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/somosrayueladigital?mibextid=ZbWKwL" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#9966FF] transition-all duration-300"
              >
                <Image src="/assets/facebook.png" alt="Facebook" width={20} height={20} className="object-contain" />
              </Link>
              <Link 
                href="https://www.instagram.com/somos.rayuela/" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#9966FF] transition-all duration-300"
              >
                <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} className="object-contain" />
              </Link>
              <Link 
                href="https://wa.me/5493815712204" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#9966FF] transition-all duration-300"
              >
                <WhatsAppIcon size={20} alt="WhatsApp" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Rayuela. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

