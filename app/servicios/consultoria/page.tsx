import Image from 'next/image'
import { Search, FileText, Gauge, CalendarCheck, Briefcase } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'
import { SERVICE_SVGS } from '@/lib/service-svgs'

export default function ConsultoriaPage() {
  return (
    <ServicePageLayout
      icon={
        <Image
          src={SERVICE_SVGS.consultoria}
          alt=""
          width={900}
          height={600}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
          unoptimized
        />
      }
      title="Consultoría & Project Management"
      description="Orquestamos el éxito. Los datos son oro y las buenas ideas necesitan ejecución. Vos ponés la visión, nosotros el orden y la estrategia."
      features={[
        {
          title: "Auditoría 360°",
          description: "Analizamos qué estás haciendo bien y dónde estás perdiendo plata o energía.",
          icon: <Search className="h-6 w-6 text-white" />,
        },
        {
          title: "Hoja de Ruta Rayuela",
          description: "Un documento accionable paso a paso. No teoría, sino tareas concretas para que ejecutes desde el día 1.",
          icon: <FileText className="h-6 w-6 text-white" />,
        },
        {
          title: "Sistemas de Medición",
          description: "Te enseñamos qué mirar para que dejes de adivinar y empieces a decidir.",
          icon: <Gauge className="h-6 w-6 text-white" />,
        },
        {
          title: "El Seguimiento",
          description: "No te soltamos la mano. Incluye un Check-point mensual para ajustar la puntería, resolver dudas y asegurarnos de que la piedra caiga en el casillero correcto.",
          icon: <CalendarCheck className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="space-y-10">
        {/* Consultoría Estratégica */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Consultoría Estratégica: <span className="text-[#9966FF]">De la parálisis al plan de acción.</span>
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            ¿Sentís que hacés mucho pero no sabés qué funciona? ¿Tu marca está estancada en el mismo casillero? Nuestra asesoría no es una charla motivacional; es una intervención técnica en tu negocio.
          </p>
        </div>

        {/* Project Management */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#9966FF]/20 to-[#8BC1A7]/20 border border-white/10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 rounded-xl bg-[#9966FF]/20">
              <Briefcase className="h-8 w-8 text-[#9966FF]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Project Management: Tu proyecto, bajo control.
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                ¿Tenés una idea pero no sabés cómo coordinar al diseñador, al programador y la imprenta? Nosotros tomamos las riendas. Gestionamos tiempos, proveedores y presupuestos para que tu única tarea sea aprobar el resultado final. Hacemos que las cosas pasen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  )
}
