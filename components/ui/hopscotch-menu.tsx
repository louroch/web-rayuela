'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const VIEWBOX_WIDTH = 468.6
const VIEWBOX_HEIGHT = 1215.3

const HEADER_OFFSET = 80

const DEBUG_HIT_AREAS = false // Activado para que puedas ver y ajustar los círculos

// Definición manual de casilleros con coordenadas del centro en el viewBox
const CELLS = [
  { id: 'cell-home', label: 'Inicio', sectionId: 'inicio', x: 234, y: 110, r: 54 },
  { id: 'cell-7', label: 'Más allá del Marketing', sectionId: 'mas-alla-del-marketing', x: 234, y: 380, r: 46 },
  { id: 'cell-5', label: 'Tu marca en 360°', sectionId: 'tu-marca-en-360', x: 140, y: 530, r: 46 },
  { id: 'cell-6', label: 'Nuestro proceso', sectionId: 'nuestro-proceso', x: 328, y: 530, r: 46 },
  { id: 'cell-4', label: 'Lo que dicen nuestros clientes', sectionId: 'testimonios', x: 234, y: 705, r: 44 },
  { id: 'cell-2', label: '¿Jugamos?', sectionId: 'jugamos', x: 140, y: 912, r: 46 },
  { id: 'cell-3', label: '¿Jugamos?', sectionId: 'jugamos', x: 328, y: 912, r: 46 },
  { id: 'cell-1', label: 'Footer', sectionId: 'footer', x: 234, y: 1088, r: 48 },
]

const SECTION_TO_CELL_ID: Record<string, string> = {
  inicio: 'cell-home',
  'mas-alla-del-marketing': 'cell-7',
  'tu-marca-en-360': 'cell-5',
  'nuestro-proceso': 'cell-6',
  testimonios: 'cell-4',
  jugamos: 'cell-2',
  footer: 'cell-1',
}

type ThrowStoneEventDetail = {
  sectionId?: string
  cellId?: string
}

/** Convierte coordenadas del viewBox a píxeles dentro del SVG renderizado */
function viewBoxToPixels(
  svgEl: SVGSVGElement,
  x: number,
  y: number
): { px: number; py: number; scale: number; offsetX: number; offsetY: number } {
  const svgRect = svgEl.getBoundingClientRect()
  const scale = Math.min(svgRect.width / VIEWBOX_WIDTH, svgRect.height / VIEWBOX_HEIGHT)
  const offsetX = (svgRect.width - VIEWBOX_WIDTH * scale) / 2
  const offsetY = (svgRect.height - VIEWBOX_HEIGHT * scale) / 2
  const px = offsetX + x * scale
  const py = offsetY + y * scale
  return { px, py, scale, offsetX, offsetY }
}

export function HopscotchMenu() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>(CELLS[0].sectionId)
  const [activeCellId, setActiveCellId] = useState<string>(CELLS[0].id)
  const [pebbleStyle, setPebbleStyle] = useState({ x: 0, y: 0 })
  const activeSectionRef = useRef<string>(CELLS[0].sectionId)
  const menuRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pebbleRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const movePebbleToCell = useCallback((cellId: string) => {
    const container = containerRef.current
    const svgEl = svgRef.current
    if (!container || !svgEl) return

    const cell = CELLS.find((c) => c.id === cellId)
    if (!cell) {
      if (DEBUG_HIT_AREAS) console.warn('No encuentro hit area:', cellId)
      return
    }

    const { px, py } = viewBoxToPixels(svgEl, cell.x, cell.y)
    const containerRect = container.getBoundingClientRect()
    const svgRect = svgEl.getBoundingClientRect()

    const finalX = svgRect.left - containerRect.left + px
    const finalY = svgRect.top - containerRect.top + py

    if (DEBUG_HIT_AREAS) {
      console.log(`Moviendo a ${cellId} (${cell.label}):`, {
        viewBox: { x: cell.x, y: cell.y },
        pixels: { px, py },
        final: { finalX, finalY }
      })
    }

    setPebbleStyle({ x: finalX, y: finalY })
  }, [])

  useEffect(() => {
    movePebbleToCell(activeCellId)
  }, [activeCellId, movePebbleToCell])

  useEffect(() => {
    const onResize = () => {
      movePebbleToCell(activeCellId)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeCellId, movePebbleToCell])

  useEffect(() => {
    const t = setTimeout(() => movePebbleToCell(CELLS[0].id), 150)
    return () => clearTimeout(t)
  }, [movePebbleToCell])

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  useEffect(() => {
    const onThrowStone = (event: Event) => {
      const customEvent = event as CustomEvent<ThrowStoneEventDetail>
      const sectionId = customEvent.detail?.sectionId ?? 'mas-alla-del-marketing'
      const cellId = customEvent.detail?.cellId ?? SECTION_TO_CELL_ID[sectionId] ?? 'cell-7'

      setActiveSection(sectionId)
      activeSectionRef.current = sectionId
      setActiveCellId(cellId)
    }

    window.addEventListener('rayuela:throw-stone', onThrowStone as EventListener)
    return () => window.removeEventListener('rayuela:throw-stone', onThrowStone as EventListener)
  }, [])

  useEffect(() => {
    const uniqueSectionIds = Array.from(new Set(CELLS.map((c) => c.sectionId)))
    const sectionElements = uniqueSectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((item): item is { id: string; el: HTMLElement } => item.el !== null)

    if (!sectionElements.length) return

    let rafId: number | null = null

    const updateActiveSectionByScroll = () => {
      rafId = null
      const probeY = window.scrollY + HEADER_OFFSET + window.innerHeight * 0.35
      let nextSectionId = sectionElements[0].id

      for (const section of sectionElements) {
        if (section.el.offsetTop <= probeY) {
          nextSectionId = section.id
        } else {
          break
        }
      }

      if (activeSectionRef.current === nextSectionId) return

      setActiveSection(nextSectionId)
      activeSectionRef.current = nextSectionId
      setActiveCellId(SECTION_TO_CELL_ID[nextSectionId] || CELLS[CELLS.length - 1].id)
    }

    const onScrollOrResize = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(updateActiveSectionByScroll)
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    onScrollOrResize()

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveSection(sectionId)
    setActiveCellId(SECTION_TO_CELL_ID[sectionId] || CELLS[CELLS.length - 1].id)
  }

  const handleCellKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      scrollToSection(sectionId)
    }
  }

  // Solo mostrar el menú rayuela en la página de inicio
  if (pathname !== '/') return null

  return (
    <nav
      ref={menuRef}
      className="fixed right-0 sm:right-2 lg:right-4 top-[60%] lg:top-1/2 -translate-y-1/2 z-40 w-[55px] sm:w-[75px] lg:w-28 h-[340px] sm:h-[500px] lg:h-[680px] block opacity-40 hover:opacity-100 lg:opacity-100 transition-opacity duration-300"
      aria-label="Navegación por secciones (rayuela)"
    >
      <div ref={containerRef} className="relative w-full h-full">
        {/* Piedrita */}
        <div
          ref={pebbleRef}
          className="absolute left-0 top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-br from-[#9966FF] to-[#8BC1A7] shadow-[0_0_12px_2px_rgba(153,102,255,0.5)] z-10 pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${pebbleStyle.x}px, ${pebbleStyle.y}px) translate(-50%, -50%)`,
          }}
          aria-hidden
        />

        {/* SVG interactivo */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <image
            href="/svgs/rayuelanueva.svg"
            x="0"
            y="0"
            width={VIEWBOX_WIDTH}
            height={VIEWBOX_HEIGHT}
          />
          
          {/* Hit areas manuales */}
          {CELLS.map((cell) => {
            const isActive = activeSection === cell.sectionId
            return (
              <a
                key={cell.id}
                href={`#${cell.sectionId}`}
                aria-label={`Ir a ${cell.label}`}
                aria-current={isActive ? 'true' : undefined}
                className="cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-[#9966FF] focus-visible:outline-offset-1"
                style={{
                  filter: isActive ? 'drop-shadow(0 0 8px rgba(153,102,255,0.5))' : undefined,
                }}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(cell.sectionId)
                  movePebbleToCell(cell.id)
                }}
                onKeyDown={(e) => handleCellKeyDown(e, cell.sectionId)}
                tabIndex={0}
              >
                <circle
                  id={cell.id}
                  cx={cell.x}
                  cy={cell.y}
                  r={cell.r}
                  fill={DEBUG_HIT_AREAS ? 'rgba(255,0,0,0.2)' : 'transparent'}
                  stroke={DEBUG_HIT_AREAS ? 'rgba(255,0,0,0.8)' : 'transparent'}
                  strokeWidth={DEBUG_HIT_AREAS ? 2 : 0}
                  pointerEvents="all"
                />
              </a>
            )
          })}
        </svg>
      </div>
    </nav>
  )
}
