import React from 'react';
import { Lightbulb, ShieldCheck, TrendingUp, RefreshCw, Search, LayoutTemplate, MessageSquare } from 'lucide-react';

const MethodSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto e Pilares */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Método R1: <br />
              <span className="text-brand-yellow">Demanda previsível</span> não nasce no anúncio.
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 border-l-2 border-brand-yellow/30 pl-4">
              Transformamos sua oferta em propriedade intelectual através de 3 pilares fundamentais.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: <Lightbulb size={24} />, 
                  title: "Clareza", 
                  desc: "Mensagem e proposta única de valor cristalinas." 
                },
                { 
                  icon: <ShieldCheck size={24} />, 
                  title: "Confiança", 
                  desc: "Mecanismos de prova e redução drástica de risco." 
                },
                { 
                  icon: <TrendingUp size={24} />, 
                  title: "Conversão", 
                  desc: "Um caminho validado até o WhatsApp do comercial." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                  <div className="bg-brand-yellow text-brand-dark p-3 rounded-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Diagrama Circular (Loop) */}
          <div className="relative flex items-center justify-center min-h-[400px]">
             
             {/* Círculo Central */}
             <div className="absolute w-32 h-32 bg-brand-yellow rounded-full flex items-center justify-center z-20 shadow-[0_0_40px_rgba(252,205,25,0.3)]">
                <div className="text-center">
                    <span className="block text-3xl font-black text-brand-dark">R1</span>
                    <span className="text-xs font-bold text-brand-dark uppercase tracking-widest">System</span>
                </div>
             </div>

             {/* Órbita Animada */}
             <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite] hover:pause">
                
                {/* Items da Órbita - Posicionados com trigonometria ou absolute classes */}
                
                {/* Item 1: Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark border border-white/20 p-3 rounded-xl flex flex-col items-center gap-2 w-28 shadow-xl">
                    <Search size={20} className="text-brand-yellow" />
                    <span className="text-[10px] uppercase font-bold text-center">Diagnóstico</span>
                </div>

                {/* Item 2: Right */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-brand-dark border border-white/20 p-3 rounded-xl flex flex-col items-center gap-2 w-28 shadow-xl rotate-90">
                    <LayoutTemplate size={20} className="text-brand-yellow" />
                    <span className="text-[10px] uppercase font-bold text-center">Estrutura</span>
                </div>

                {/* Item 3: Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-brand-dark border border-white/20 p-3 rounded-xl flex flex-col items-center gap-2 w-28 shadow-xl rotate-180">
                    <MessageSquare size={20} className="text-brand-yellow" />
                    <span className="text-[10px] uppercase font-bold text-center">Conversão</span>
                </div>

                {/* Item 4: Left */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-brand-dark border border-white/20 p-3 rounded-xl flex flex-col items-center gap-2 w-28 shadow-xl -rotate-90">
                    <RefreshCw size={20} className="text-brand-yellow" />
                    <span className="text-[10px] uppercase font-bold text-center">Otimização</span>
                </div>
             </div>

             {/* Seta de direção decorativa */}
             <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] border border-dashed border-white/5 rounded-full pointer-events-none"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodSection;