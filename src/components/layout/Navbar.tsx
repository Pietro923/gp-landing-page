'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  
  // Definición de las secciones
  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#empresas', label: 'Empresas' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  // Detectar scroll para cambiar estilos del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detectar sección activa
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#inicio" className="relative">
            <div className="flex items-center space-x-2">
              <img
                src="/imagenes/logos/grupoPueble.png"
                alt="Logo de Grupo Pueble"
                className={`transition-all duration-300 ${
                  scrolled ? 'h-12' : 'h-16'
                } w-auto`}
              />
              {scrolled && (
                <span className="font-bold text-xl text-gray-900 hidden sm:block">
                  Grupo Pueble
                </span>
              )}
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleNavigation}
                      className={`px-4 py-2 mx-1 rounded-full font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-gray-900 shadow-md' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="ml-2">
                <Button 
                  asChild
                  className="bg-gray-900 hover:bg-gray-800 ml-2 rounded-full"
                >
                  <a href="mailto:recepcion@grupopueble.com.ar">
                    Contacto directo
                  </a>
                </Button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${
                scrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-gray-900 hover:bg-white/20'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white rounded-lg shadow-lg mt-2 absolute left-4 right-4 overflow-hidden">
            <ul className="flex flex-col py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleNavigation}
                      className={`block px-6 py-3 ${
                        isActive 
                          ? 'bg-gray-100 text-gray-900 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-4 py-3">
                <Button 
                  asChild
                  className="bg-gray-900 hover:bg-gray-800 w-full"
                >
                  <a href="mailto:recepcion@grupopueble.com.ar">
                    Contacto directo
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;