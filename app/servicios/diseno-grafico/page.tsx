import Image from 'next/image'
import { PenTool, Package, Layout } from 'lucide-react'
import { ServicePageLayout } from '@/components/ui/service-page-layout'
import { ProjectGallery, type PortfolioProject } from '@/components/ui/project-gallery'
import { SERVICE_SVGS } from '@/lib/service-svgs'

const BRANDING_HERO_ICON = SERVICE_SVGS.branding

const designProjects: PortfolioProject[] = [
  {
    href: 'https://drive.google.com/file/d/1XbEBntZYVsiYzXoEWareQUKAM48ngZpB/view?usp=drive_link',
    image: '/assets/preview-diseno/Gaby%20Martinez.png',
    title: 'Gaby Martínez',
    category: 'Manual de marca',
    kind: 'branding',
    ctaLabel: 'Ver manual',
  },
  {
    href: 'https://drive.google.com/file/d/1XfzZS0nBQ26Tht6uEvoZCs1N8cw2eXGl/view?usp=drive_link',
    image: '/assets/preview-diseno/Chenga.png',
    title: 'El Bajón del Chenga',
    category: 'Manual de marca',
    kind: 'branding',
    ctaLabel: 'Ver manual',
  },
  {
    href: 'https://drive.google.com/file/d/1Wi1v2W0l9UvKX_sqOVve_JfCzzGrtWy-/view?usp=sharing',
    image: '/assets/preview-diseno/Nerds.png',
    title: 'NERDs',
    category: 'Manual de marca',
    kind: 'branding',
    ctaLabel: 'Ver manual',
  },
  {
    href: 'https://drive.google.com/file/d/11LCkCVFCB7OL7TATRZQHxFBwFXchych6/view?usp=drive_link',
    image: '/assets/preview-diseno/Payacrobatas.png',
    title: 'PAYACROBATAS',
    category: 'Manual de marca',
    kind: 'branding',
    ctaLabel: 'Ver manual',
  },
  {
    href: '/assets/preview-diseno/Belvi.png',
    image: '/assets/preview-diseno/Belvi.png',
    title: 'Piezas Belvi',
    category: 'Piezas gráficas',
    kind: 'branding',
    ctaLabel: 'Ver preview',
  },
  {
    href: 'https://drive.google.com/drive/u/1/folders/1ggJWBwW8MFUlU-_DaRTvD5MxKOaeFP2A',
    image: '/assets/preview-diseno/Nova%20Gestion.png',
    title: 'Piezas NOVA',
    category: 'Papelería',
    kind: 'branding',
    ctaLabel: 'Ver carpeta',
  },
]

export default function DisenoGraficoPage() {
  return (
    <ServicePageLayout
      icon={
        <Image
          src={BRANDING_HERO_ICON}
          alt=""
          width={900}
          height={600}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
          unoptimized
        />
      }
      title="Branding & Diseño Omnicanal"
      description="Del píxel al papel. Tu identidad visual debe ser inconfundible, sin importar dónde se vea. Creamos conceptos únicos que conectan."
      features={[
        {
          title: "Identidad de Marca",
          description:
            "Logotipos y manuales de marca con personalidad.",
          icon: <PenTool className="h-6 w-6 text-white" />,
        },
        {
          title: "Papelería & Vía Pública",
          description:
            "Tarjetas, folletería, packaging y cartelería que da gusto tocar y mirar. Materiales optimizados para el mundo físico.",
          icon: <Package className="h-6 w-6 text-white" />,
        },
        {
          title: "Diseño Publicitario",
          description:
            "Piezas gráficas de alto impacto para cualquier formato.",
          icon: <Layout className="h-6 w-6 text-white" />,
        },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#9966FF]">Branding & Diseño Omnicanal</span>
            <span className="text-white/90"> — Del píxel al papel</span>
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Tu identidad visual debe ser inconfundible, sin importar dónde se vea. Creamos conceptos únicos que conectan: desde la identidad y la papelería hasta la vía pública y las piezas publicitarias, todo habla el mismo idioma de marca.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-[#9966FF] to-[#8BC1A7] bg-clip-text text-transparent">
              Galería de proyectos
            </span>
          </h3>
          <ProjectGallery projects={designProjects} />
        </div>
      </div>
    </ServicePageLayout>
  )
}
