import { Globe, Code, Smartphone, Zap } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'

export default function DesarrolloWebPage() {
  return (
    <ServicePageLayout
      icon={<Globe className="h-12 w-12 inline-block" />}
      title="Desarrollo Web"
      description="Creamos experiencias web impactantes y funcionales que representan tu marca y convierten visitantes en clientes."
      features={[
        {
          title: "Diseño y Desarrollo Web",
          description: "Creamos sitios web atractivos y funcionales que ofrecen una excelente experiencia de usuario y reflejan la identidad de tu marca.",
          icon: <Code className="h-6 w-6 text-white" />,
        },
        {
          title: "Optimización para Móviles",
          description: "Aseguramos que tu sitio web se vea y funcione perfectamente en todos los dispositivos, desde smartphones hasta desktops.",
          icon: <Smartphone className="h-6 w-6 text-white" />,
        },
        {
          title: "Optimización de Velocidad",
          description: "Mejoramos el rendimiento de tu sitio web para garantizar tiempos de carga rápidos y una experiencia de usuario fluida.",
          icon: <Zap className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Desarrollo Web: Tu Ventana al Mundo Digital</h2>
        <p className="text-lg text-white mb-6">
          En la era digital, tu sitio web es a menudo la primera impresión que los clientes tienen de tu marca. En Rayuela, entendemos que un sitio web efectivo no solo debe ser visualmente atractivo, sino también funcional, rápido y optimizado para convertir visitantes en clientes. Nuestro enfoque de desarrollo web combina diseño creativo con las últimas tecnologías para crear experiencias web que destacan y generan resultados.
        </p>
        <p className="text-lg text-qhite mb-6">
          Nuestro proceso incluye:
        </p>
        <ul className="list-disc list-inside text-lg text-white mb-6">
          <li>Análisis profundo de tus necesidades y objetivos de negocio</li>
          <li>Diseño UX/UI centrado en el usuario y alineado con tu marca</li>
          <li>Desarrollo frontend y backend utilizando las últimas tecnologías</li>
          <li>Optimización para motores de búsqueda (SEO) desde el inicio</li>
          <li>Pruebas exhaustivas y control de calidad</li>
          <li>Soporte y mantenimiento continuo post-lanzamiento</li>
        </ul>
        <p className="text-lg text-white">
          Ya sea que necesites un sitio web corporativo elegante, una tienda en línea robusta, o una aplicación web compleja, nuestro equipo está aquí para convertir tu visión en realidad y crear una presencia en línea que impulse el crecimiento de tu negocio.
        </p>
      </div>
    </ServicePageLayout>
  )
}

