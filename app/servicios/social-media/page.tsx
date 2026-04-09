import Image from 'next/image'
import { Users, Video, Mic } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'
import { SERVICE_SVGS } from '@/lib/service-svgs'

export default function SocialMediaPage() {
  return (
    <ServicePageLayout
      icon={
        <Image
          src={SERVICE_SVGS.contenido}
          alt=""
          width={900}
          height={600}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
          unoptimized
        />
      }
      title="Social Media & Creación de Contenido"
      description='La voz de tu juego. Hablamos el idioma de tu audiencia para construir comunidades leales, huyendo del contenido "de relleno".'
      features={[
        {
          title: "Gestión de Redes & Estrategia",
          description:
            "Administración de perfiles con un propósito claro por plataforma.",
          icon: <Users className="h-6 w-6 text-white" />,
        },
        {
          title: "Producción Audiovisual",
          description:
            "Videos dinámicos y Reels que retienen la atención.",
          icon: <Video className="h-6 w-6 text-white" />,
        },
        {
          title: "Podcasts & Copywriting",
          description:
            "Redacción de artículos SEO y producción de contenido en audio para establecer tu autoridad en el sector.",
          icon: <Mic className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#9966FF]">Social Media & Creación de Contenido</span>
            <span className="text-white/90"> — La voz de tu juego</span>
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Hablamos el idioma de tu audiencia para construir comunidades leales, huyendo del contenido &quot;de relleno&quot;. Estrategia por red, piezas que enganchan, video y audio cuando tu marca necesita ir un paso más allá del post plano.
          </p>
        </div>
      </div>
    </ServicePageLayout>
  )
}
