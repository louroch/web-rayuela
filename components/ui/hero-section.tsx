"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      <div className="hidden lg:flex absolute left-0 bottom-0 w-[35%] xl:w-[32%] h-[85%] z-10 pointer-events-none items-end">
        <img
          src={encodeURI("/svgs/Meli compo.svg")}
          alt=""
          role="presentation"
          className="w-full h-full max-h-[85vh] object-contain object-left-bottom"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[80vh] flex items-center lg:justify-center">
        <div className="w-full max-w-3xl flex flex-col justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl xl:text-6xl font-bold text-white mb-6 leading-[0.95] tracking-tight">
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
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Somos Rayuela. Una agencia creativa que entiende que para llegar a la cima, primero hay que saber pisar firme en la Tierra. Estrategia, diseño, gestión y experiencias reales para negocios que no encajan en moldes prefabricados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Button
              onClick={handleThrowStone}
              className="group px-8 py-6 text-lg font-medium bg-[#9966FF] hover:bg-[#8a5ce6] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Tirá la piedra: Conocé nuestra jugada
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
