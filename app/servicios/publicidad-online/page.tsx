import { Megaphone, Target, TrendingUp, DollarSign } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'

export default function PublicidadOnlinePage() {
  return (
    <ServicePageLayout
      icon={<Megaphone className="h-12 w-12 inline-block" />}
      title="Publicidad Online"
      description="Maximizamos tu presencia digital con estrategias de publicidad online efectivas y orientadas a resultados."
      features={[
        {
          title: "Campañas de PPC",
          description: "Creamos y gestionamos campañas de pago por clic altamente efectivas en plataformas como Google Ads y Bing Ads.",
          icon: <Target className="h-6 w-6 text-white" />,
        },
        {
          title: "Publicidad en Redes Sociales",
          description: "Desarrollamos campañas publicitarias en redes sociales que llegan a tu audiencia ideal y generan engagement.",
          icon: <TrendingUp className="h-6 w-6 text-white" />,
        },
        {
          title: "Optimización de Conversiones",
          description: "Mejoramos continuamente tus campañas para maximizar el retorno de inversión y aumentar las conversiones.",
          icon: <DollarSign className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Tu puerta al éxito digital</h2>
        <p className="text-lg text-white mb-6">
          En el mundo digital actual, la publicidad online es esencial para el éxito de cualquier negocio. En Rayuela, no solo seguimos las tendencias, las creamos. Nuestro enfoque en publicidad online se basa en datos, creatividad y una comprensión profunda de tu audiencia.
        </p>
        <p className="text-lg text-white mb-6">
          Nuestro proceso de publicidad online incluye:
        </p>
        <ul className="list-disc list-inside text-lg text-white mb-6">
          <li>Análisis exhaustivo de tu mercado y competencia</li>
          <li>Desarrollo de estrategias personalizadas para cada plataforma</li>
          <li>Optimización continua basada en datos en tiempo real</li>
          <li>Informes detallados y transparentes sobre el rendimiento de tus campañas</li>
        </ul>
        <p className="text-lg text-white">
          Ya sea que busques aumentar tus ventas, generar leads o mejorar el reconocimiento de tu marca, nuestro equipo está aquí para ayudarte a alcanzar tus objetivos y superar tus expectativas.
        </p>
      </div>
    </ServicePageLayout>
  )
}

