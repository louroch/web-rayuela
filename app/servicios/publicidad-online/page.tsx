import Image from 'next/image'
import { Target, Share2, RefreshCw } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'
import { SERVICE_SVGS } from '@/lib/service-svgs'

export default function PublicidadOnlinePage() {
  return (
    <ServicePageLayout
      icon={
        <Image
          src={SERVICE_SVGS.paid}
          alt=""
          width={900}
          height={600}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
          unoptimized
        />
      }
      title="Paid Media & Performance"
      description="Inversión, no gasto. Maximizamos cada centavo de tu presupuesto para poner tu marca frente a quienes ya te están buscando."
      features={[
        {
          title: "PPC & Google Ads",
          description:
            "Campañas de búsqueda y display orientadas a la conversión.",
          icon: <Target className="h-6 w-6 text-white" />,
        },
        {
          title: "Social Ads (Meta, TikTok, LinkedIn)",
          description:
            "Publicidad segmentada con precisión láser.",
          icon: <Share2 className="h-6 w-6 text-white" />,
        },
        {
          title: "Optimización Continua",
          description:
            "Monitoreo y ajuste de embudos de venta (CRO) para bajar costos y multiplicar resultados.",
          icon: <RefreshCw className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#9966FF]">Paid Media & Performance</span>
            <span className="text-white/90"> — Inversión, no gasto</span>
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Maximizamos cada centavo de tu presupuesto para poner tu marca frente a quienes ya te están buscando. Trabajamos búsqueda, redes y optimización continua para que cada inversión tenga retorno medible: menos ruido, más conversiones.
          </p>
        </div>
      </div>
    </ServicePageLayout>
  )
}
