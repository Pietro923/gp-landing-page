'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function Empresas() {
  const marcas = [
    {
      marca: "Case IH",
      descripcion: "Maquinaria agrícola de última generación para maximizar tu productividad.",
      imagen: "/imagenes/equipment/case/caselogo.png",
      ruta: "/equipos/case",
    },
    {
      marca: "JCB",
      descripcion: "Equipos de construcción robustos y confiables para cualquier proyecto.",
      imagen: "/imagenes/equipment/jcb/jcb.png",
      ruta: "/equipos/jcb",
    },
    {
      marca: "Audi",
      descripcion: "Vehículos de alta gama que combinan diseño, tecnología y rendimiento.",
      imagen: "/imagenes/equipment/audi/audi-logo.png",
      ruta: "/vehiculos/audi",
    },
    {
      marca: "Ducati",
      descripcion: "Motocicletas de alto desempeño para los amantes de la velocidad.",
      imagen: "/imagenes/equipment/ducati/ducati-logo.png",
      ruta: "/vehiculos/ducati",
    },
    {
      marca: "Kia",
      descripcion: "Vehículos innovadores y accesibles para cada necesidad.",
      imagen: "/imagenes/equipment/kia/kia-logo.png",
      ruta: "/vehiculos/kia",
    },
  ];

  return (
    <section id="empresas" className="bg-white py-24">
      {/* Contenido principal */}
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Marcas que representamos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En Grupo Pueble, somos representantes oficiales de marcas líderes a nivel global. Descubre cómo podemos ayudarte en cada sector.
          </p>
        </div>

        {/* Tarjetas de marcas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marcas.map((marca, index) => (
            <Card
              key={index}
              className="bg-gray-50 border border-gray-200 hover:shadow-lg transition-all"
            >
              <img
                src={marca.imagen}
                alt={marca.marca}
                className="w-full h-48 object-contain bg-white p-6 rounded-t-lg"
              />
              <CardHeader className="text-center p-6">
                <CardTitle className="text-2xl text-gray-900">{marca.marca}</CardTitle>
                <CardDescription className="text-gray-600">{marca.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="text-center p-6">
                
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Ver más
                  </Button>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}