'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const serviceCategories = [
  {
    title: "Branding & Diseño Omnicanal",
    subtitle: "Del píxel al papel",
    intro: "Tu identidad visual debe ser inconfundible, sin importar dónde se vea. Creamos conceptos únicos que conectan.",
    items: [
      { label: "Identidad de Marca", desc: "Logotipos y manuales de marca con personalidad." },
      { label: "Papelería & Vía Pública", desc: "Tarjetas, folletería, packaging y cartelería que da gusto tocar y mirar. Materiales optimizados para el mundo físico." },
      { label: "Diseño Publicitario", desc: "Piezas gráficas de alto impacto para cualquier formato." },
    ],
    href: "/servicios/diseno-grafico",
  },
  {
    title: "Desarrollo Web",
    subtitle: "Tu casa matriz digital",
    intro: "Tu web no puede ser solo una \"linda vidriera\"; tiene que ser una máquina de generar clientes, rápida y funcional.",
    items: [
      { label: "Diseño UX/UI & Desarrollo", desc: "Sitios corporativos y e-commerce intuitivos y alineados a tu marca." },
      { label: "Performance", desc: "Optimización de velocidad extrema y diseño 100% responsive (mobile-first)." },
      { label: "SEO Técnico", desc: "Estructuras preparadas para que Google te encuentre desde el día uno." },
    ],
    href: "/servicios/desarrollo-web",
  },
  {
    title: "Paid Media & Performance",
    subtitle: "Inversión, no gasto",
    intro: "Maximizamos cada centavo de tu presupuesto para poner tu marca frente a quienes ya te están buscando.",
    items: [
      { label: "PPC & Google Ads", desc: "Campañas de búsqueda y display orientadas a la conversión." },
      { label: "Social Ads (Meta, TikTok, LinkedIn)", desc: "Publicidad segmentada con precisión láser." },
      { label: "Optimización Continua", desc: "Monitoreo y ajuste de embudos de venta (CRO) para bajar costos y multiplicar resultados." },
    ],
    href: "/servicios/publicidad-online",
  },
  {
    title: "Social Media & Creación de Contenido",
    subtitle: "La voz de tu juego",
    intro: "Hablamos el idioma de tu audiencia para construir comunidades leales, huyendo del contenido \"de relleno\".",
    items: [
      { label: "Gestión de Redes & Estrategia", desc: "Administración de perfiles con un propósito claro por plataforma." },
      { label: "Producción Audiovisual", desc: "Videos dinámicos y Reels que retienen la atención." },
      { label: "Podcasts & Copywriting", desc: "Redacción de artículos SEO y producción de contenido en audio para establecer tu autoridad en el sector." },
    ],
    href: "/servicios/social-media",
  },
  {
    title: "Consultoría & Project Management",
    subtitle: "Orquestamos el éxito",
    intro: "Los datos son oro y las buenas ideas necesitan ejecución. Vos ponés la visión, nosotros el orden y la estrategia.",
    items: [
      { label: "Project Management", desc: "Lideramos y gestionamos la ejecución de tus proyectos creativos o lanzamientos de punta a punta." },
      { label: "Asesoría & Auditoría Digital", desc: "Analizamos tu situación actual y te marcamos la hoja de ruta para mejorar." },
      { label: "Análisis de Datos", desc: "Dashboards personalizados e informes claros para que tomes decisiones de negocio basadas en números reales, no en intuición." },
    ],
    href: "/servicios/consultoria",
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#21211F] py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#9966FF]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#8BC1A7]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nuestro <span className="text-[#9966FF]">ecosistema</span> de soluciones
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No vendemos servicios aislados; diseñamos estrategias omnicanales. Elegí el casillero donde tu marca necesita saltar hoy:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={category.href} className="block h-full">
                <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#9966FF]/30 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-[#9966FF] transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-sm text-[#8BC1A7] mb-3">{category.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {category.intro}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {category.items.map((item) => (
                      <li key={item.label}>
                        <span className="font-semibold text-[#9966FF]">{item.label}:</span>
                        <span className="text-gray-400 ml-1">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
