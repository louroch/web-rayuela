"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HEADER_OFFSET = 80;

export function HeroSection() {
  const handleThrowStone = () => {
    const nextSectionId = "mas-alla-del-marketing";
    const nextCellId = "cell-7";
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      const top = nextSection.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }

    window.dispatchEvent(
      new CustomEvent("rayuela:throw-stone", {
        detail: {
          sectionId: nextSectionId,
          cellId: nextCellId,
        },
      })
    );
  };

  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center justify-center bg-[#21211F] overflow-hidden">
      {/* Elementos geométricos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculo grande */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9966FF]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8BC1A7]/10 blur-3xl" />
        
        {/* Líneas diagonales */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9966FF]/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-[#8BC1A7]/20 to-transparent" />
        
        {/* Formas geométricas */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#9966FF]/20 rotate-45" />
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-[#8BC1A7]/10 rounded-lg rotate-12" />
      </div>

      {/* Ilustración Meli - Posicionada absolutamente a la izquierda */}
      <div className="absolute left-0 bottom-0 w-[42%] sm:w-[35%] lg:w-[35%] xl:w-[32%] h-[45%] sm:h-[50%] lg:h-[85%] z-10 pointer-events-none flex items-end">
        <img
          src={encodeURI("/svgs/Meli compo.svg")}
          alt=""
          role="presentation"
          className="w-full h-full max-h-[85vh] object-contain object-left-bottom"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-24 min-h-[80vh] flex items-start lg:items-center lg:justify-center">
        <div className="w-full max-w-3xl flex flex-col justify-start lg:justify-center text-left md:text-center pt-1 sm:pt-2 lg:pt-0">
          
          {/* Título: Ocupa todo el ancho arriba */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mb-4 sm:mb-5 lg:mb-6"
          >
            <h1 className="text-[2.5rem] sm:text-5xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.05] md:leading-[0.95] tracking-tight">
              No vendemos paquetes.
              <br />
              Diseñamos tu{" "}
              <span className="text-[#9966FF]">próxima jugada</span>.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden text-[15px] text-gray-300 mb-2 leading-relaxed font-light max-w-none"
          >
            Somos Rayuela. Una agencia creativa que entiende que para llegar a la cima, primero hay que saber pisar firme en la Tierra.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:hidden pl-[40%] sm:pl-[34%] text-[15px] text-gray-300 mb-5 leading-relaxed font-light"
          >
            Estrategia, diseño, gestión y experiencias reales para negocios que no encajan en moldes prefabricados.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl md:mx-auto leading-relaxed font-light"
          >
            Somos Rayuela. Una agencia creativa que entiende que para llegar a la cima, primero hay que saber pisar firme en la Tierra. Estrategia, diseño, gestión y experiencias reales para negocios que no encajan en moldes prefabricados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pl-[40%] sm:pl-[34%] md:pl-0 flex justify-start md:justify-center w-full"
          >
            <Button
              onClick={handleThrowStone}
              className="mr-auto md:mx-auto inline-flex h-auto w-full max-w-[210px] sm:max-w-xs md:w-auto md:max-w-none items-center justify-center whitespace-normal md:whitespace-nowrap px-3 py-3 sm:px-5 sm:py-3 md:px-8 md:py-4 text-[11px] sm:text-xs md:text-lg font-medium bg-[#9966FF] hover:bg-[#8a5ce6] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center leading-tight md:leading-none"
            >
              <span className="md:hidden">Tira la piedra: conocenos</span>
              <span className="hidden md:inline">Tirá la piedra: Conocé nuestra jugada</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
