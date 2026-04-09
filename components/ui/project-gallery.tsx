'use client'

import { ExternalLink } from 'lucide-react'

export type PortfolioProjectKind = 'web' | 'branding'

export type PortfolioProject = {
  /** URL del sitio, PDF o recurso del proyecto */
  href: string
  image: string
  title: string
  /** Etiqueta breve: ej. "Web corporativa", "Manual de marca" */
  category?: string
  kind: PortfolioProjectKind
  /** Texto del CTA en hover; por defecto según kind */
  ctaLabel?: string
}

interface ProjectGalleryProps {
  projects: PortfolioProject[]
}

function defaultCta(kind: PortfolioProjectKind, custom?: string) {
  if (custom) return custom
  return kind === 'web' ? 'Ver sitio' : 'Ver proyecto'
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 list-none p-0 m-0">
      {projects.map((project, index) => {
        const cta = defaultCta(project.kind, project.ctaLabel)
        const isExternal =
          project.href.startsWith('http') || project.href.startsWith('//')

        return (
          <li key={`${project.href}-${project.title}-${index}`} className="min-w-0">
            <a
              href={project.href}
              {...(isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={`${project.title}: ${cta}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9966FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#21211F] rounded-2xl"
            >
              <article
                className={[
                  'relative rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4',
                  'transition-all duration-500 ease-out',
                  'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',
                  'group-hover:border-[#9966FF]/25 group-hover:shadow-[0_20px_48px_rgba(153,102,255,0.12)]',
                  'group-hover:-translate-y-1',
                ].join(' ')}
              >
                {/* Marco según tipo: web / editorial */}
                {project.kind === 'web' ? (
                  <div className="rounded-xl bg-[#1a1a18] p-2 sm:p-2.5 ring-1 ring-white/5">
                    <div className="flex items-center gap-1.5 px-2 pb-2 pt-1">
                      <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
                      <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
                      <span className="h-2 w-2 rounded-full bg-white/10" aria-hidden />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#0f0f0e]">
                      <PreviewImage src={project.image} alt={project.title} />
                      <HoverOverlay cta={cta} />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-3 sm:p-4 ring-1 ring-white/10">
                    <div className="relative aspect-[3/4] max-h-[min(52vh,420px)] mx-auto overflow-hidden rounded-lg bg-[#1a1a18] shadow-inner">
                      <PreviewImage src={project.image} alt={project.title} />
                      <HoverOverlay cta={cta} />
                    </div>
                  </div>
                )}

                <footer className="mt-4 flex items-start justify-between gap-3 px-1">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white truncate group-hover:text-[#9966FF] transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.category ? (
                      <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#8BC1A7]/90">
                        {project.category}
                      </p>
                    ) : null}
                  </div>
                  <ExternalLink
                    className="h-4 w-4 flex-shrink-0 text-white/30 opacity-0 group-hover:opacity-100 group-hover:text-[#8BC1A7] transition-all duration-300 mt-0.5"
                    aria-hidden
                  />
                </footer>
              </article>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function PreviewImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={[
        'absolute inset-0 h-full w-full object-cover',
        'grayscale contrast-[1.02] brightness-[0.98]',
        'transition-[filter,transform] duration-500 ease-out',
        'group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100',
        'group-hover:scale-[1.03]',
      ].join(' ')}
      loading="lazy"
      decoding="async"
    />
  )
}

function HoverOverlay({ cta }: { cta: string }) {
  return (
    <div
      className={[
        'pointer-events-none absolute inset-0 flex items-end justify-end p-3 sm:p-4',
        'bg-gradient-to-t from-[#21211F]/85 via-[#21211F]/20 to-transparent',
        'opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out',
      ].join(' ')}
    >
      <span
        className={[
          'inline-flex items-center gap-1.5 rounded-full border border-white/15',
          'bg-black/35 px-3 py-1.5 text-[11px] sm:text-xs font-medium tracking-wide text-white/95 backdrop-blur-md',
          'translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out',
        ].join(' ')}
      >
        {cta}
        <ExternalLink className="h-3 w-3 opacity-80" aria-hidden />
      </span>
    </div>
  )
}
