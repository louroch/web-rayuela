import { FileEdit, Edit, Video, Mic } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'

export default function CreacionContenidoPage() {
  return (
    <ServicePageLayout
      icon={<FileEdit className="h-12 w-12 inline-block" />}
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
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-4"> El corazón de tu estrategia digital</h2>
        <p className="text-lg text-white mb-6">
          En la era de la información, el contenido es el rey. En Rayuela, entendemos que la creación de contenido de calidad es fundamental para atraer, educar y convertir a tu audiencia. Nuestro enfoque va más allá de simplemente crear contenido; nos centramos en contar historias que resuenan con tu audiencia y reflejan los valores de tu marca.
        </p>
        <p className="text-lg text-white mb-6">
          Nuestro proceso de creación de contenido incluye:
        </p>
        <ul className="list-disc list-inside text-lg text-white mb-6">
          <li>Investigación profunda de tu industria y audiencia objetivo</li>
          <li>Desarrollo de estrategias de contenido alineadas con tus objetivos de negocio</li>
          <li>Creación de contenido diverso y atractivo: blogs, videos, infografías, podcasts y más</li>
          <li>Optimización para SEO para mejorar la visibilidad de tu contenido</li>
          <li>Análisis y ajuste continuo basado en el rendimiento del contenido</li>
        </ul>
        <p className="text-lg text-white">
          Ya sea que necesites artículos de blog que eduquen a tu audiencia, videos que muestren tus productos en acción, o podcasts que establezcan tu autoridad en la industria, nuestro equipo está aquí para ayudarte a contar tu historia de la manera más efectiva posible.
        </p>
      </div>
    </ServicePageLayout>
  )
}

