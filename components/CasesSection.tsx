import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

const CasesSection: React.FC = () => {
  const cases = [
    {
      niche: "Energia Solar",
      before: "Leads frios e caros no Google",
      change: "Página de qualificação + Filtro Automático",
      result: "Investimento: 2k/mês → 15k/mês (ROI 8x)"
    },
    {
      niche: "Consultoria Financeira",
      before: "Dependia de indicação",
      change: "Funil de autoridade + LinkedIn Ads",
      result: "Agenda lotada com ticket 3x maior"
    },
    {
      niche: "Clínica de Estética",
      before: "Muitos curiosos no WhatsApp",
      change: "Oferta High-Ticket estruturada",
      result: "Faturamento dobrou com mesmo time"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-black text-brand-dark">Bastidores de quem escalou</h2>
                <p className="text-gray-500 mt-2">Sem prêmios de vaidade. Apenas ROI.</p>
            </div>
            <div className="hidden md:block">
                 <Button variant="black" size="sm">Ver mais resultados</Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                {item.niche}
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded">Antes</span>
                  <p className="text-gray-600 text-sm mt-1 font-medium">{item.before}</p>
                </div>
                
                <div className="w-px h-4 bg-gray-200 ml-2"></div>

                <div>
                   <span className="text-xs bg-brand-yellow text-brand-dark px-2 py-1 rounded">A Mudança</span>
                   <p className="text-brand-dark font-bold text-sm mt-1">{item.change}</p>
                </div>
              </div>

              <div className="bg-brand-dark text-white p-4 rounded-xl">
                 <p className="text-xs text-gray-400 mb-1">Evolução</p>
                 <p className="font-bold text-brand-yellow flex items-center gap-2">
                    {item.result} <ArrowUpRight size={16} />
                 </p>
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-sm font-semibold text-gray-500 group-hover:text-brand-dark underline decoration-gray-300 group-hover:decoration-brand-yellow transition-all">
                    Quero ver um diagnóstico parecido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;