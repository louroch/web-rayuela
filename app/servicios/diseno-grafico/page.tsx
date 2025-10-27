import { Brush, PenTool, Palette, Layout } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'

export default function DisenoGraficoPage() {
  return (
    <ServicePageLayout
      icon={<Brush className="h-12 w-12 inline-block" />}
      title="Diseño Gráfico"
      description="Creamos identidades visuales impactantes y materiales gráficos que comunican tu mensaje de manera efectiva."
      features={[
        {
          title: "Diseño de Marca",
          description: "Creamos logotipos únicos que capturan la esencia de tu marca y dejan una impresión duradera.",
          icon: <PenTool className="h-6 w-6 text-white" />,
        },
        {
          title: "Identidad Corporativa",
          description: "Desarrollamos una identidad visual coherente para tu marca, desde tarjetas de visita hasta papelería corporativa.",
          icon: <Palette className="h-6 w-6 text-white" />,
        },
        {
          title: "Material Publicitario",
          description: "Diseñamos folletos, carteles y otros materiales publicitarios que capturan la atención y transmiten tu mensaje.",
          icon: <Layout className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Nuestro Enfoque</h2>
        <p className="text-lg text-white mb-6">
          En Rayuela, entendemos que el diseño gráfico es más que crear imágenes atractivas. Es una forma poderosa de comunicación visual que puede transformar la percepción de tu marca y conectar con tu audiencia.
        </p>
        <p className="text-lg text-white mb-6">
          Nuestro proceso de diseño se basa en tres pilares fundamentales:
        </p>
        <ul className="list-disc list-inside text-lg text-white mb-6">
          <li>Investigación profunda de tu marca y tu audiencia</li>
          <li>Creatividad sin límites para generar conceptos únicos</li>
          <li>Atención meticulosa a los detalles en la ejecución</li>
        </ul>
        <p className="text-lg text-white">
          Ya sea que necesites un logotipo impactante, una identidad de marca completa o materiales publicitarios que destaquen, nuestro equipo está listo para llevar tu visión al siguiente nivel.
        </p>
      </div>
    </ServicePageLayout>
  )
}

