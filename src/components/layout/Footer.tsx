'use client';

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Pueblemaquinarias" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/casepueblesa/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/grupo-pueble/" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre Nosotros */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sobre Nosotros</h3>
            <p className="text-gray-300">
              En Grupo Pueble, somos representantes oficiales de marcas líderes a nivel global, ofreciendo soluciones integrales en maquinaria agrícola, construcción y vehículos de alta gama.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Parque Industrial Aut. Circunvalación Km 1294, San Miguel de Tucumán</li>
              <li>+54 9 381 661 8632</li>
              <li>recepcion@pueblemaquinarias.com.ar</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Redes Sociales</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Grupo Pueble. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}