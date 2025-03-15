'use client';

import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio">
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-6 lg:w-1/2">
          {/* Título */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            <span className="block">Grupo Pueble</span>
            <span className="block text-2xl lg:text-3xl font-light text-gray-600 mt-4">
              Representantes oficiales de marcas líderes globales
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
            Especialistas en maquinaria agrícola, construcción y vehículos de alta gama. Innovación, calidad y servicio integral.
          </p>

          {/* Botones */}
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300"
              onClick={() => document.getElementById("marcas")?.scrollIntoView({ behavior: "smooth" })}
            >
              Descubre nuestros productos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-lg transition-all duration-300"
              asChild
            >
              <a href="mailto:recepcion@grupopueble.com.ar">Contáctanos</a>
            </Button>
          </div>
        </div>

        {/* Logo a la derecha */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src="/imagenes/logo-grupo-pueble.png" // Ruta del logo de Grupo Pueble
            alt="Logo Grupo Pueble"
            className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
          />
        </div>
      </div>
    </div>
    </section>
  );
}