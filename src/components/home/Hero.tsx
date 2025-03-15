'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [currentBrand, setCurrentBrand] = useState(0);
  const brands = [
    {
      name: "Case IH",
      color: "#C8102E",
      tagline: "Potencia y Precisión en el Campo",
      description: "Maquinaria agrícola de vanguardia para transformar la productividad de su campo.",
      logo: "/imagenes/logos/caselogo.jpg"
    },
    {
      name: "JCB",
      color: "#FFE500",
      tagline: "Construyendo el Futuro",
      description: "Equipos de construcción robustos y versátiles para cada desafío.",
      logo: "/imagenes/logos/jcblogo.png"
    },
    {
      name: "Audi",
      color: "#000000",
      tagline: "A la Vanguardia de la Tecnología",
      description: "Vehículos premium que combinan innovación, rendimiento y diseño excepcional.",
      logo: "/imagenes/logos/audilogo.jpg"
    },
    {
      name: "Ducati",
      color: "#EC202D",
      tagline: "Estilo, Velocidad, Sofisticación",
      description: "Motocicletas italianas legendarias con un legado de excelencia y pasión.",
      logo: "/imagenes/logos/ducatilogo.png"
    },
    {
      name: "Kia",
      color: "#BB162B",
      tagline: "Movimiento que Inspira",
      description: "Vehículos modernos con tecnología avanzada y diseño innovador.",
      logo: "/imagenes/logos/kialogo.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrand((prev) => (prev + 1) % brands.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 transition-colors duration-1000"
        style={{ backgroundImage: `linear-gradient(to bottom right, white, ${brands[currentBrand].color}15)` }}
      />
      
      <div className="relative min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8">
            <Image
              src="/imagenes/logos/grupoPueble.png"
              alt="Logo Grupo Pueble"
              width={160}
              height={160}
              className="h-40 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Grupo Pueble
            </h1>
            <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
              Representantes oficiales de marcas líderes globales en Argentina
            </p>
          </div>
          
          <div className="my-12 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="flex border-b border-gray-200 bg-white">
                {brands.map((brand, index) => (
                  <button
                    key={brand.name}
                    onClick={() => setCurrentBrand(index)}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-300 ${
                      currentBrand === index 
                        ? "border-b-2 text-gray-900 border-b-current" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    style={{ 
                      borderColor: currentBrand === index ? brand.color : 'transparent',
                      color: currentBrand === index ? brand.color : undefined
                    }}
                  >
                    {brand.name}
                  </button>
                ))}
              </div>
              
              <div className="bg-white p-6 md:p-10">
                <div className="transition-all duration-700 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <div 
                      className="w-48 h-48 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: `${brands[currentBrand].color}10` }}
                    >
                      <Image
                        src={brands[currentBrand].logo}
                        alt={`Logo ${brands[currentBrand].name}`}
                        width={128}
                        height={128}
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 md:pl-8">
                    <h2 
                      className="text-3xl font-bold mb-2 transition-colors duration-700"
                      style={{ color: brands[currentBrand].color }}
                    >
                      {brands[currentBrand].name}
                    </h2>
                    <h3 className="text-xl text-gray-700 mb-4">{brands[currentBrand].tagline}</h3>
                    <p className="text-gray-600 mb-6">{brands[currentBrand].description}</p>
                    <Button
                      size="lg"
                      className="transition-colors duration-300"
                      style={{
                        backgroundColor: brands[currentBrand].color,
                        borderColor: brands[currentBrand].color
                      }}
                      onClick={() => document.getElementById(`${brands[currentBrand].name.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Explorar {brands[currentBrand].name}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg transition-all duration-300"
                onClick={() => document.getElementById("marcas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver todas nuestras marcas
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white shadow-lg transition-all duration-300"
                asChild
              >
                <a href="mailto:recepcion@grupopueble.com.ar">Contáctanos</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
