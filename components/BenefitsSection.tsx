import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Mais conversas com gente pronta",
    "Menos desconto e objeção",
    "WhatsApp com contexto",
    "Time comercial com processo",
    "Relatórios de decisão (não vaidade)",
    "Previsibilidade e controle"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs">Resultados Reais</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mt-2">
              O que você ganha na prática
            </h2>
          </div>
          <div className="md:text-right">
             <p className="text-gray-500 text-sm">Benefícios de uma estrutura validada</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-brand-yellow/50 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-dark text-brand-yellow p-2 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-brand-dark transition-colors">
                  {benefit}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;