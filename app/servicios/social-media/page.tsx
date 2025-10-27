import { Share2, Users, MessageCircle, BarChart2 } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'

export default function SocialMediaPage() {
  return (
    <ServicePageLayout
      icon={<Share2 className="h-12 w-12 inline-block" />}
      title="Social Media"
      description="Potenciamos tu presencia en redes sociales para construir una comunidad comprometida y aumentar tu alcance."
      features={[
        {
          title: "Gestión de Redes Sociales",
          description: "Manejamos tus perfiles en redes sociales, creando y publicando contenido atractivo y relevante para tu audiencia.",
          icon: <Users className="h-6 w-6 text-white" />,
        },
        {
          title: "Estrategia de Contenidos",
          description: "Desarrollamos estrategias de contenido personalizadas que resuenan con tu audiencia y reflejan los valores de tu marca.",
          icon: <MessageCircle className="h-6 w-6 text-white" />,
        },
        {
          title: "Análisis y Reportes",
          description: "Monitoreamos el rendimiento de tus redes sociales y proporcionamos informes detallados con insights accionables.",
          icon: <BarChart2 className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-4"> Conectando tu marca con el Mundo</h2>
        <p className="text-lg text-white mb-6">
          En la era digital, las redes sociales son el corazón de la comunicación entre marcas y consumidores. En Rayuela, entendemos que cada plataforma tiene su propio lenguaje y audiencia única. Nuestro enfoque en social media va más allá de simplemente publicar contenido; se trata de crear conversaciones significativas y construir comunidades leales alrededor de tu marca.
        </p>
        <p className="text-lg text-white mb-6">
          Nuestro enfoque en social media incluye:
        </p>
        <ul className="list-disc list-inside text-lg text-white mb-6">
          <li>Desarrollo de estrategias personalizadas para cada plataforma social</li>
          <li>Creación de contenido atractivo y relevante que resuena con tu audiencia</li>
          <li>Gestión de comunidad para fomentar la interacción y la lealtad de los seguidores</li>
          <li>Análisis detallado del rendimiento y ajuste continuo de la estrategia</li>
        </ul>
        <p className="text-lg text-white">
          Ya sea que busques aumentar tu presencia en Instagram, generar leads en LinkedIn o crear contenido viral en TikTok, nuestro equipo está aquí para ayudarte a destacar en el ruidoso mundo de las redes sociales.
        </p>
      </div>
    </ServicePageLayout>
  )
}

