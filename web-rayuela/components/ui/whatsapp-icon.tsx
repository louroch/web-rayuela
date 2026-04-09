import { cn } from '@/lib/utils'

type WhatsAppIconProps = {
  size?: number
  className?: string
  alt?: string
}

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
