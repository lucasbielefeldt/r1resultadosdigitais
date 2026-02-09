import React from 'react';
import { Microscope, Layout, Target, Info } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Microscope size={32} />,
      phase: "Fase 1",
      title: "Diagnóstico & Direção",
      desc: "Entendimento do negócio, ticket, ICP real e gargalos atuais."
    },
    {
      icon: <Layout size={32} />,
      phase: "Fase 2",
      title: "Estrutura de Decisão",
      desc: "Construção da página/roteiro que responde dúvidas e gera segurança antes do contato."
    },
    {
      icon: <Target size={32} />,
      phase: "Fase 3",
      title: "Demanda Qualificada",
      desc: "Campanhas + ajustes contínuos para gerar oportunidades melhores.",
      hasTooltip: true
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark">
            Como funciona a operação
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Processo estruturado para eliminar amadorismo e achismo do seu marketing.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-start relative group hover:-translate-y-2 transition-transform duration-300">
                
                {/* Badge Fase */}
                <div className="bg-brand-dark text-brand-yellow text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                  {step.phase}
                </div>

                <div className="text-brand-dark mb-4 bg-gray-50 p-4 rounded-full group-hover:bg-brand-yellow transition-colors duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>

                {step.hasTooltip && (
                  <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                    <div className="flex items-center gap-2 cursor-help relative group/tooltip">
                      <span className="text-xs font-bold text-gray-400 uppercase">Investimento em Mídia</span>
                      <Info size={14} className="text-gray-400" />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-0 mb-2 w-64 bg-brand-dark text-white text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20">
                        O investimento em mídia (Google/Meta) é pago diretamente pelo cliente às plataformas. Isso garante transparência e controle total do seu ativo.
                        <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-brand-dark"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;