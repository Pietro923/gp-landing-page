'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Award, Clock, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

export default function Nosotros() {
  const [activeTab, setActiveTab] = useState('historia');
  
  const tabs = [
    { id: 'historia', label: 'Nuestra Historia', icon: <Clock size={18} /> },
    { id: 'valores', label: 'Valores', icon: <Award size={18} /> },
    { id: 'equipo', label: 'Equipo', icon: <Users size={18} /> },
  ];
  
  const tabContents = {
    historia: {
      title: "Nuestra Trayectoria",
      content: "Desde nuestra fundación, Grupo Pueble ha crecido hasta convertirse en un referente en la representación de marcas globales premium en Argentina. Comenzamos con un enfoque en el sector agrícola y hemos expandido nuestro alcance para incluir equipos de construcción y vehículos de alta gama, siempre manteniendo nuestro compromiso con la excelencia y la calidad."
    },
    valores: {
      title: "Los Valores que nos Definen",
      content: "En Grupo Pueble, nos guiamos por el compromiso con la calidad, la integridad en nuestras relaciones comerciales, la innovación constante, la pasión por el servicio al cliente y la responsabilidad hacia nuestras comunidades y el medio ambiente. Estos valores están en el corazón de cada decisión que tomamos."
    },
    equipo: {
      title: "Un Equipo de Especialistas",
      content: "Contamos con profesionales altamente capacitados en cada una de nuestras áreas de operación. Desde expertos técnicos en maquinaria agrícola y construcción hasta asesores especializados en vehículos premium, nuestro equipo está dedicado a proporcionar el mejor servicio y asesoramiento personalizado a cada cliente."
    }
  };
  
  const ventajas = [
    {
      title: "Representantes Oficiales",
      description: "Garantía y respaldo directo de las marcas que representamos",
      icon: <ShieldCheck className="h-10 w-10 text-gray-900" />
    },
    {
      title: "Servicio Técnico Especializado",
      description: "Técnicos certificados por cada marca y equipamiento de última generación",
      icon: <Award className="h-10 w-10 text-gray-900" />
    },
    {
      title: "Repuestos Originales",
      description: "Amplio stock de repuestos y accesorios originales para todas nuestras marcas",
      icon: <Truck className="h-10 w-10 text-gray-900" />
    }
  ];
  

  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      {/* Contenido principal */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
            CONOCE A GRUPO PUEBLE
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre nosotros
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una empresa con visión de futuro, comprometida con la excelencia en la representación
            de marcas líderes a nivel global en Argentina.
          </p>
        </div>

        {/* Contenido principal - Imagen y Texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen con efecto de paralaje */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[500px]">
            <img
              src="/imagenes/empresa/Equipo Pueble SA.jpeg"
              alt="Equipo Grupo Pueble"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center mb-2">
                <span className="h-1 w-12 bg-white mr-4"></span>
                <span className="text-sm uppercase tracking-wider">Equipo Grupo Pueble</span>
              </div>
              <p className="text-lg font-medium">Comprometidos con la excelencia y el servicio al cliente</p>
            </div>
          </div>

          {/* Contenido con tabs */}
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Tabs de navegación */}
              <div className="flex border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center py-4 px-4 font-medium text-sm sm:text-base transition-colors ${
                      activeTab === tab.id 
                        ? 'border-b-2 border-gray-900 text-gray-900' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Contenido del tab activo */}
              <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
  {tabContents[activeTab as keyof typeof tabContents].title}
</h3>
<p className="text-gray-700 leading-relaxed mb-6">
  {tabContents[activeTab as keyof typeof tabContents].content}
</p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  En Grupo Pueble somos representantes oficiales de marcas líderes como 
                  <span className="font-semibold text-red-600"> Case IH</span>,
                  <span className="font-semibold text-yellow-500"> JCB</span>,
                  <span className="font-semibold text-black"> Audi</span>,
                  <span className="font-semibold text-red-700"> Ducati</span> y
                  <span className="font-semibold text-red-600"> Kia</span>. 
                  Nos enfocamos en brindar soluciones de vanguardia en maquinaria agrícola, 
                  construcción y vehículos de alta gama.
                </p>
                
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white group"
                  size="lg"
                  asChild
                >
                  <Link href="/nosotros">
                    <span>Conoce más sobre nosotros</span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nuestras ventajas */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">
            ¿Por qué elegir Grupo Pueble?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ventajas.map((ventaja, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  {ventaja.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{ventaja.title}</h4>
                <p className="text-gray-600">{ventaja.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}