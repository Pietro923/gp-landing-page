'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function Empresas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const marcas = [
    {
      id: "case",
      marca: "Case IH",
      categoria: "Maquinaria Agrícola",
      descripcion: "Soluciones agrícolas de alta tecnología para maximizar la eficiencia en el campo.",
      caracteristicas: ["Tractores de alta potencia", "Cosechadoras de última generación", "Implementos agrícolas innovadores", "Tecnología de agricultura de precisión"],
      color: "#C8102E", // Rojo Case IH
      imagen: "/imagenes/logos/caselogo.jpg",
      imagenFondo: "/imagenes/equipment/case/case-bg.jpg",
      ruta: "/equipos/case",
    },
    {
      id: "jcb",
      marca: "JCB",
      categoria: "Equipos de Construcción",
      descripcion: "Maquinaria robusta y versátil para proyectos constructivos de cualquier envergadura.",
      caracteristicas: ["Retroexcavadoras", "Manipuladores telescópicos", "Minicargadoras", "Excavadoras"],
      color: "#FFE500", // Amarillo JCB
      imagen: "/imagenes/logos/jcblogo.png",
      imagenFondo: "/imagenes/equipment/jcb/jcb-bg.jpg",
      ruta: "/equipos/jcb",
    },
    {
      id: "audi",
      marca: "Audi",
      categoria: "Vehículos Premium",
      descripcion: "La vanguardia automotriz alemana con los más altos estándares de lujo y rendimiento.",
      caracteristicas: ["Tecnología Quattro", "Sistemas de asistencia al conductor", "Interiores de alta gama", "Rendimiento deportivo"],
      color: "#000000", // Negro Audi
      imagen: "/imagenes/logos/audilogo.jpg",
      imagenFondo: "/imagenes/equipment/audi/audi-bg.jpg",
      ruta: "/vehiculos/audi",
    },
    {
      id: "ducati",
      marca: "Ducati",
      categoria: "Motocicletas de Alto Rendimiento",
      descripcion: "Pasión italiana en dos ruedas, diseñadas para emocionar y conquistar las carreteras.",
      caracteristicas: ["Motores Desmodromic", "Chasis avanzados", "Sistemas electrónicos de vanguardia", "Diseño italiano inconfundible"],
      color: "#EC202D", // Rojo Ducati
      imagen: "/imagenes/logos/ducatilogo.png",
      imagenFondo: "/imagenes/equipment/ducati/ducati-bg.jpg",
      ruta: "/vehiculos/ducati",
    },
    {
      id: "kia",
      marca: "Kia",
      categoria: "Vehículos Innovadores",
      descripcion: "Variedad de opciones para todos los estilos de vida con tecnología de punta y diseño moderno.",
      caracteristicas: ["Sistemas de seguridad avanzados", "Eficiencia en consumo", "Diseño contemporáneo", "Garantía extendida"],
      color: "#BB162B", // Rojo Kia
      imagen: "/imagenes/logos/kialogo.png",
      imagenFondo: "/imagenes/equipment/kia/kia-bg.jpg",
      ruta: "/vehiculos/kia",
    },
  ];

  return (
    <section id="empresas" className="py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Contenido principal */}
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <span className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
            MARCAS PREMIUM
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Representantes oficiales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Grupo Pueble, nos enorgullece representar a marcas líderes mundiales en sus respectivos sectores, 
            ofreciendo lo mejor en maquinaria agrícola, equipos de construcción y vehículos de alta gama.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marcas.map((marca, index) => (
            <Card
              key={marca.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: "16px",
              }}
            >
              {/* Fondo con imagen y overlay */}
              <div 
                className="h-64 w-full relative overflow-hidden"
                style={{
                  backgroundColor: marca.color + "15"
                }}
              >
                {/* Imagen de fondo (se mostraría si existen las imágenes) */}
                <div 
                  className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${marca.imagenFondo})`,
                    opacity: 0.3,
                  }}
                ></div>
                
                {/* Logo central */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={marca.imagen}
                    alt={marca.marca}
                    className="max-h-28 max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Línea de color de la marca */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: marca.color }}
                ></div>
              </div>
              
              {/* Contenido */}
              <div className="p-6">
                <div className="mb-4">
                  <span 
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: marca.color + "15",
                      color: marca.color
                    }}
                  >
                    {marca.categoria}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{marca.marca}</h3>
                <p className="text-gray-600 mb-4">
                  {marca.descripcion}
                </p>
                
                {/* Lista de características */}
                <ul className="mb-6 space-y-2">
                  {marca.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight 
                        size={16} 
                        className="mt-1 mr-2"
                        style={{ color: marca.color }}
                      />
                      <span className="text-sm text-gray-700">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botón */}
                <Button
                  className="w-full group transition-all duration-300 hover:shadow-md flex items-center justify-center"
                  style={{ 
                    backgroundColor: hoveredCard === index ? marca.color : "white",
                    color: hoveredCard === index ? "white" : marca.color,
                    borderColor: marca.color,
                    borderWidth: "1px"
                  }}
                  asChild
                >
                  <a href={marca.ruta}>
                    <span>Explorar {marca.marca}</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}