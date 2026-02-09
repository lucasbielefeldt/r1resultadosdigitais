import React from 'react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-black pt-24 pb-16 relative border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Call to Action Text */}
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Pronto para escalar <br/>
                <span className="text-[#fccd19]">sua operação?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                Deixe de perder oportunidades hoje mesmo. Preencha o formulário e receba nosso contato para entender como o Sistema R1 pode ser aplicado no seu negócio.
              </p>
              
              <div className="hidden lg:block">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Resposta em até 2 horas úteis.</span>
                </div>
                <p className="text-gray-600 text-xs max-w-xs">
                  Apenas para empresas que buscam crescimento estruturado e previsibilidade.
                </p>
              </div>
            </div>

            {/* Right: Embedded Form */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
               <ContactForm variant="footer" />
            </div>

          </div>
        </div>
      </div>

      <footer className="bg-black py-10 text-white border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="text-center md:text-left">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-[#fccd19]">R1</span> Resultados Digitais
              </span>
              <p className="text-gray-500 text-sm mt-2">
                Escala previsível para negócios que não brincam.
              </p>
            </div>

            <div className="flex gap-8 text-sm text-gray-400 font-medium">
                <a href="#metodo" className="hover:text-[#fccd19] transition-colors">Método</a>
                <a href="#cases" className="hover:text-[#fccd19] transition-colors">Cases</a>
                <a href="#faq" className="hover:text-[#fccd19] transition-colors">FAQ</a>
            </div>

            <div className="text-center md:text-right text-xs text-gray-600">
               &copy; {new Date().getFullYear()} R1 Resultados Digitais. <br/> Todos os direitos reservados.
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;