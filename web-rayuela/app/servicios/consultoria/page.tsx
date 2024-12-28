import { BarChart3, TrendingUp, Search, PieChart } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'

export default function ConsultoriaPage() {
  return (
    <ServicePageLayout
      icon={<BarChart3 className="h-12 w-12 inline-block" />}
      title="Consultoría y Análisis de Datos"
      description="Transformamos datos en insights accionables para impulsar el crecimiento y la eficiencia de tu negocio."
      features={[
        {
          title: "Análisis de Datos",
          description: "Analizamos tus datos para descubrir patrones, tendencias y oportunidades que impulsen tu negocio.",
          icon: <TrendingUp className="h-6 w-6 text-white" />,
        },
        {
          title: "Auditoría Digital",
          description: "Evaluamos tu presencia digital y estrategia de marketing para identificar áreas de mejora y oportunidades de crecimiento.",
          icon: <Search className="h-6 w-6 text-white" />,
        },
        {
          title: "Informes Personalizados",
          description: "Creamos dashboards e informes personalizados que te permiten visualizar y actuar sobre tus KPIs más importantes.",
          icon: <PieChart className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[#9966FF] mb-4"> El poder de las decisiones informadas</h2>
        <p className="text-lg text-white mb-6">
          En el mundo digital actual, los datos son el nuevo oro. En Rayuela, creemos que el verdadero poder de los datos radica en la capacidad de transformarlos en insights accionables que impulsen el crecimiento y la eficiencia de tu negocio. Nuestra consultoría y análisis de datos va más allá de los números; se trata de contar la historia detrás de los datos y utilizarla para tomar decisiones estratégicas.
        </p>
        <p className="text-lg text-white mb-6">
          Nuestro enfoque de consultoría y análisis de datos incluye:
        </p>
        <ul className="bg-transparent border-white list-disc list-inside text-lg text-white mb-6">
          <li>Recopilación y limpieza de datos de múltiples fuentes</li>
          <li>Análisis profundo utilizando técnicas avanzadas de estadística y machine learning</li>
          <li>Visualización de datos clara y comprensible</li>
          <li>Interpretación de resultados y desarrollo de recomendaciones accionables</li>
          <li>Implementación y seguimiento de estrategias basadas en datos</li>
        </ul>
        <p className="text-lg text-white">
          Ya sea que necesites optimizar tu embudo de ventas, entender mejor a tu audiencia, o desarrollar una estrategia de crecimiento basada en datos, nuestro equipo está aquí para ayudarte a desbloquear el potencial oculto en tus datos y llevar tu negocio al siguiente nivel.
        </p>
      </div>
    </ServicePageLayout>
  )
}

