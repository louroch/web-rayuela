import { cn } from '@/lib/utils'

type WhatsAppIconProps = {
  /** Tamaño en píxeles (ancho y alto) */
  size?: number
  className?: string
  alt?: string
}

/**
 * Logo de WhatsApp desde `/public/assets/whatsapp.png` (blanco sobre fondo transparente).
 * Usamos `<img>` nativo (no `next/image`) para que el canal alpha del PNG no se altere
 * por el pipeline de optimización ni por estilos implícitos del componente Image.
 */
export function WhatsAppIcon({
  size = 24,
  className,
  alt = '',
}: WhatsAppIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- PNG con transparencia: evitar optimizador
    <img
      src="/assets/whatsapp.png"
      alt={alt}
      width={size}
      height={size}
      decoding="async"
      draggable={false}
      className={cn(
        'block shrink-0 object-contain bg-transparent filter-none',
        className
      )}
    />
  )
}
