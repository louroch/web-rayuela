"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const router = useRouter();
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000); // El texto desaparecerá después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    router.push("contacto");
  };

  return (
    <div className="relative w-full bg-[#21211F]">
      {/* Contenedor del fondo */}
      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9]">
        <picture>
          <source media="(min-width: 768px)" srcSet="/assets/portada.png" />
          <Image
            src="/assets/portada1.png"
            alt="Equipo Rayuela"
            fill
            className="object-contain md:object-cover"
            sizes="100vw"
            priority
            quality={90}
          />
        </picture>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center md:justify-start">
        {/* Textos principales */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-32 space-y-8 md:space-y-12">
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              <span className="block text-[#9966FF]">ESTRATEGIAS QUE</span>
              <span className="block text-[#9966FF]">TRANSFORMAN</span>
            </h1>
            <h2 
              className={`text-lg md:text-2xl text-white/90 max-w-xl rounded-lg transition-opacity duration-1000 ${
                showText ? 'opacity-100' : 'opacity-0'
              }`}
            >
              En Rayuela, no solo ofrecemos servicios de marketing digital; trazamos el camino completo desde la base hasta el cielo de las posibilidades digitales. Más que una agencia, somos arquitectos de experiencias digitales que convierten ideas en resultados tangibles.
            </h2>
          </div>

          {/* Botón (visible en todas las pantallas) */}
          <div className="mt-8 md:mt-12">
            <Button
              variant="outline"
              className="px-6 py-3 md:py-6 text-base font-medium bg-[#9966FF] hover:bg-[#b9e4d0] text-white border-none"
              onClick={handleRedirect}
            >
              ¿Dónde encontrarnos?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

