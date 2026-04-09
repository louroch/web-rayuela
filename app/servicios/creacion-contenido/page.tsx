import { FileEdit, Edit, Video, Mic } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'

export default function CreacionContenidoPage() {
  return (
    <ServicePageLayout
      icon={<FileEdit className="h-12 w-12 inline-block text-white" />}
      title="Creación de Contenido"
      description="Producimos contenido de alta calidad que informa, entretiene y convierte a tu audiencia en clientes leales."
      features={[
        {
          title: "Redacción de Artículos y Blogs",
          description: "Creamos contenido escrito persuasivo y optimizado para SEO que posiciona tu marca como líder en tu industria.",
          icon: <Edit className="h-6 w-6 text-white" />,
        },
        {
          title: "Producción de Video",
          description: "Desarrollamos videos atractivos que cuentan tu historia de marca y conectan emocionalmente con tu audiencia.",
          icon: <Video className="h-6 w-6 text-white" />,
        },
        {
          title: "Podcasts y Contenido de Audio",
          description: "Producimos podcasts y contenido de audio que amplían tu alcance y construyen una conexión más profunda con tu audiencia.",
          icon: <Mic className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-[#9966FF] to-[#8BC1A7] bg-clip-text text-transparent">
              El corazón de tu estrategia digital
            </span>
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            En la era de la información, el contenido es el rey. En Rayuela, entendemos que la creación de contenido de calidad es fundamental para atraer, educar y convertir a tu audiencia. Nuestro enfoque va más allá de simplemente crear contenido; nos centramos en contar historias que resuenan con tu audiencia y reflejan los valores de tu marca.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Nuestro proceso incluye:</h3>
          <ul className="space-y-4 text-lg text-white/90">
            <li className="flex items-start">
              <span className="text-[#9966FF] mr-3 mt-1">✓</span>
              <span>Investigación profunda de tu industria y audiencia objetivo</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9966FF] mr-3 mt-1">✓</span>
              <span>Desarrollo de estrategias de contenido alineadas con tus objetivos de negocio</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9966FF] mr-3 mt-1">✓</span>
              <span>Creación de contenido diverso y atractivo: blogs, videos, infografías, podcasts y más</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9966FF] mr-3 mt-1">✓</span>
              <span>Optimización para SEO para mejorar la visibilidad de tu contenido</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9966FF] mr-3 mt-1">✓</span>
              <span>Análisis y ajuste continuo basado en el rendimiento del contenido</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#9966FF]/20 to-[#8BC1A7]/20 border border-white/10">
          <p className="text-xl text-white leading-relaxed">
            Ya sea que necesites artículos de blog que eduquen a tu audiencia, videos que muestren tus productos en acción, o podcasts que establezcan tu autoridad en la industria, nuestro equipo está aquí para ayudarte a contar tu historia de la manera más efectiva posible.
          </p>
        </div>
      </div>
    </ServicePageLayout>
  )
}

