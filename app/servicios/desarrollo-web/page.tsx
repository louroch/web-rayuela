import Image from 'next/image'
import { Code, Smartphone, Search } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'
import { ProjectGallery, type PortfolioProject } from '@/components/ui/project-gallery'
import { SERVICE_SVGS } from '@/lib/service-svgs'

const webProjects: PortfolioProject[] = [
  {
    href: 'https://www.fundacionexpresar.com/',
    image: '/assets/preview-web/webex.png',
    title: 'Fundación Expresar',
    category: 'Web institucional',
    kind: 'web',
    ctaLabel: 'Ver sitio',
  },
  {
    href: 'https://www.nextstagebooking.com/',
    image: '/assets/preview-web/webnext.png',
    title: 'Next Stage',
    category: 'Booking artístico',
    kind: 'web',
    ctaLabel: 'Ver sitio',
  },
  {
    href: 'https://novagestiontuc.com/',
    image: '/assets/preview-web/webnova.png',
    title: 'Nova Gestión',
    category: 'Web institucional',
    kind: 'web',
    ctaLabel: 'Ver sitio',
  },
]

export default function DesarrolloWebPage() {
  return (
    <ServicePageLayout
      icon={
        <Image
          src={SERVICE_SVGS.web}
          alt=""
          width={900}
          height={600}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
          unoptimized
        />
      }
      title="Desarrollo Web"
      description='Tu casa matriz digital. Tu web no puede ser solo una "linda vidriera"; tiene que ser una máquina de generar clientes, rápida y funcional.'
      features={[
        {
          title: "Diseño UX/UI & Desarrollo",
          description:
            "Sitios corporativos y e-commerce intuitivos y alineados a tu marca.",
          icon: <Code className="h-6 w-6 text-white" />,
        },
        {
          title: "Performance",
          description:
            "Optimización de velocidad extrema y diseño 100% responsive (mobile-first).",
          icon: <Smartphone className="h-6 w-6 text-white" />,
        },
        {
          title: "SEO Técnico",
          description:
            "Estructuras preparadas para que Google te encuentre desde el día uno.",
          icon: <Search className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#9966FF]">Desarrollo Web</span>
            <span className="text-white/90"> — Tu casa matriz digital</span>
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Tu web no puede ser solo una &quot;linda vidriera&quot;; tiene que ser una máquina de generar clientes, rápida y funcional. Combinamos diseño UX/UI, performance real y SEO técnico para que tu presencia en línea trabaje las 24 horas.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-[#9966FF] to-[#8BC1A7] bg-clip-text text-transparent">
              Galería de proyectos
            </span>
          </h3>
          <ProjectGallery projects={webProjects} />
        </div>
      </div>
    </ServicePageLayout>
  )
}
