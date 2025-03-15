'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-gray-50 py-24">
      {/* Contenido principal */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src="/imagenes/empresa/Equipo Pueble SA.jpeg"
              alt="Sobre Nosotros"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Texto */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Sobre <span className="text-red-600 border-b-2 border-red-600 inline-block">nosotros</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              En Grupo Pueble somos representantes oficiales de marcas líderes a nivel global como <strong>Case IH</strong>, <strong>JCB</strong>, <strong>Audi</strong>, <strong>Ducati</strong> y <strong>Kia</strong>. Nos enfocamos en brindar soluciones de vanguardia en maquinaria agrícola, construcción y vehículos de alta gama. Con una amplia trayectoria en el mercado, nuestro compromiso es ofrecer un servicio integral y personalizado, destacándonos por nuestra excelencia en atención posventa, innovación tecnológica y respaldo al cliente.
            </p>
            <Link href="/nosotros">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                size="lg"
              >
                Conoce más
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}