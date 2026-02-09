import React from 'react';
import { Lock, Check, X } from 'lucide-react';

const DetailsSection: React.FC = () => {
  return (
    <>
      {/* Seção 9: Investimento de Mídia */}
      <section className="bg-brand-dark py-16 border-b border-white/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 inline-block w-full">
            <div className="flex justify-center mb-6">
               <div className="p-4 bg-brand-yellow rounded-full text-brand-dark">
                  <Lock size={32} />
               </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Mídia não é custo. É alavanca.
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              A R1 estrutura o caminho e opera a otimização. O investimento em mídia é 
              <span className="text-white font-bold"> 100% do cliente</span> e pago direto às plataformas, 
              porque é o combustível do sistema.
            </p>

            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-black/30 p-4 rounded-xl border border-white/5">
                <span className="text-gray-300 text-sm">Faixa sugerida inicial:</span>
                <span className="text-brand-yellow font-bold">Orçamento testável</span>
                <span className="hidden md:inline text-gray-600">→</span>
                <span className="text-brand-yellow font-bold">Escala baseada em ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 10: Para quem é / Não é */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Para quem É */}
            <div className="bg-green-50 p-8 md:p-12 rounded-3xl border border-green-100">
                <h3 className="text-2xl font-black text-green-900 mb-8 flex items-center gap-3">
                    <span className="bg-green-200 p-1 rounded">👍</span> Para quem é
                </h3>
                <ul className="space-y-4">
                    {[
                        "Empresas que já vendem e querem previsibilidade",
                        "Quem tem time (mesmo pequeno) para atender",
                        "Quem quer estruturar antes de escalar anúncios"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Check className="text-green-600 shrink-0 mt-1" size={20} />
                            <span className="text-green-800 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Para quem NÃO É */}
            <div className="bg-red-50 p-8 md:p-12 rounded-3xl border border-red-100">
                <h3 className="text-2xl font-black text-red-900 mb-8 flex items-center gap-3">
                    <span className="bg-red-200 p-1 rounded">👎</span> Para quem não é
                </h3>
                <ul className="space-y-4">
                    {[
                        "Quem quer milagre em 7 dias",
                        "Quem não quer mexer em processo comercial",
                        "Quem busca apenas 'post e tráfego' (agência comum)"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <X className="text-red-500 shrink-0 mt-1" size={20} />
                            <span className="text-red-800 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSection;