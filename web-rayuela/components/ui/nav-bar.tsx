"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Brush, Megaphone, Share2, FileEdit, BarChart3, Globe } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const services = [
  {
    title: "Diseño Gráfico",
    href: "/servicios/diseno-grafico",
    description: "Creación de identidad visual y materiales gráficos impactantes",
    icon: Brush
  },
  {
    title: "Publicidad Online",
    href: "/servicios/publicidad-online",
    description: "Campañas publicitarias efectivas en plataformas digitales",
    icon: Megaphone
  },
  {
    title: "Social Media",
    href: "/servicios/social-media",
    description: "Gestión estratégica de redes sociales y comunidad",
    icon: Share2
  },
  {
    title: "Creación de contenido",
    href: "/servicios/creacion-contenido",
    description: "Contenido relevante y atractivo para tu audiencia",
    icon: FileEdit
  },
  {
    title: "Consultoría y análisis",
    href: "/servicios/consultoria",
    description: "Análisis de datos y estrategias basadas en resultados",
    icon: BarChart3
  },
  {
    title: "Presencia en Web",
    href: "/servicios/desarrollo-web",
    description: "Desarrollo web y optimización de tu presencia digital",
    icon: Globe
  }
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="bg-[#21211F] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/rayuelalogo.svg"
              alt="Logo de Rayuela"
              width={95}
              height={95}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white sm:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Abrir menú"
          >
            <span className="sr-only">Abrir menú</span>
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
              <span className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'}`} />
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
            </div>
          </button>

          {/* Menú de navegación (pantallas grandes) */}
          <div className="hidden sm:flex sm:space-x-8 sm:ml-auto">
            <Link
              href="/"
              className="text-white hover:text-[#8BC1A7] px-1 pt-1 border-b-2 border-transparent hover:border-[#9966FF]"
            >
              Inicio
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-[#9966FF] text-white px-2 pt-2 border-b-2 border-transparent hover:border-[#9966FF] hover:bg-[#9966FF] hover:text-white">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#9966FF] scrollbar-track-gray-200">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="mt-1 flex-shrink-0">
                              <service.icon className="h-5 w-5 text-[#9966FF] group-hover:text-[#8BC1A7]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-[#9966FF]">
                                {service.title}
                              </div>
                              <p className="text-sm text-gray-500 group-hover:text-gray-900">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/contacto"
              className="text-white hover:text-[#8BC1A7] px-1 pt-1 border-b-2 border-transparent hover:border-[#9966FF]"
            >
              Contacto
            </Link>
            <Link
              href="/nosotros"
              className="text-white hover:text-[#8BC1A7] px-1 pt-1 border-b-2 border-transparent hover:border-[#9966FF]"
            >
              Nosotros
            </Link>
          </div>
        </div>

        {/* Menú hamburguesa (pantallas pequeñas) */}
        {isOpen && (
          <div 
            className="sm:hidden bg-[#21211F] space-y-4 mt-4 p-4 absolute w-full left-0 transform transition-transform duration-300 ease-in-out"
            style={{
              animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
            }}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#8BC1A7]"
            >
              Inicio
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className=" text-white hover:text-[#8BC1A7] flex items-center justify-between w-full"
              aria-expanded={isServicesOpen}
            >
              Servicios
              {isServicesOpen ? (
                <span className="ml-2">-</span>
              ) : (
                <span className="ml-2">+</span>
              )}
            </button>
            {isServicesOpen && (
              <div className="pl-4 pr-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#9966FF] scrollbar-track-gray-800">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-[#8BC1A7] py-2"
                  >
                    <div className="flex items-center gap-2">
                      <service.icon className="h-4 w-4 flex-shrink-0" />
                      <span>{service.title}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#8BC1A7]"
            >
              Contacto
            </Link>
            <Link
              href="/nosotros"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#8BC1A7]"
            >
              Nosotros
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

// Estilos para la barra de desplazamiento personalizada
const scrollbarStyles = `
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #9966FF;
    border-radius: 3px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background-color: #7744CC;
  }
`;

const menuAnimation = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Agrega los estilos al documento
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = scrollbarStyles + menuAnimation;
  document.head.appendChild(style);
}

