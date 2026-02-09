import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Ativa o efeito após 20px de scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Problema', href: '#problema' },
    { name: 'Jornada', href: '#jornada' },
    { name: 'O Método', href: '#metodo' },
    { name: 'Comparativo', href: '#comparacao' },
  ];

  // Configuração dinâmica de cores e estilos baseada no scroll
  const navClasses = isScrolled 
    ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] max-w-6xl bg-[#0a0a0a]/90 backdrop-blur-md shadow-2xl rounded-full py-2 px-2 border border-white/10' 
    : 'top-0 left-0 w-full bg-transparent py-6 border-b border-transparent';

  const textColor = 'text-white';
  const logoText = 'text-white';

  return (
    <>
      <nav className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${navClasses}`}>
        <div className={`px-4 md:px-6 ${isScrolled ? 'w-full' : 'container mx-auto max-w-7xl'}`}>
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-2 group shrink-0 pl-2">
              <div className="bg-[#fccd19] text-black font-black text-lg md:text-xl px-2.5 py-1 rounded-lg transform group-hover:rotate-3 transition-transform shadow-[0_0_15px_rgba(252,205,25,0.4)]">
                R1
              </div>
              <span className={`text-lg md:text-xl font-black tracking-tight transition-colors duration-300 ${logoText}`}>
                Resultados Digitais
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold hover:text-[#fccd19] transition-colors relative group ${textColor}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className={`flex items-center gap-4 pl-6 border-l ${isScrolled ? 'border-white/10' : 'border-white/10'}`}>
                <Button 
                  variant="primary" // Sempre amarelo na navbar escura
                  size="sm"
                  className="!py-2 !px-6 text-sm" // Override leve para caber na navbar
                  onClick={onOpenModal}
                >
                  Diagnóstico
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors focus:outline-none ${textColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-10">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-white py-4 border-b border-white/10 flex items-center justify-between group"
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ArrowRight className="w-6 h-6 text-[#fccd19] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>
          
          <div className="mt-auto space-y-6">
            <Button 
              variant="primary"
              size="lg" 
              className="w-full justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
            >
              Solicitar Consultoria
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;