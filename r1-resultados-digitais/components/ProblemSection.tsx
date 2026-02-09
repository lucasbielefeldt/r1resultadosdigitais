import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, XCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const problems = [
    "Falta de diferenciação clara",
    "Prova fraca / pouca confiança",
    "Oferta confusa",
    "Time comercial sem processo"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Lista de Problemas */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              O gargalo invisível
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">
              Onde a venda morre <br/>
              <span className="text-red-500 decoration-red-200 underline underline-offset-4 decoration-4">antes do WhatsApp</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 max-w-md">
                Você coloca dinheiro, mas o cliente se perde no caminho por falhas estruturais básicas.
            </p>

            <div className="space-y-4">
              {problems.map((problem, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="shrink-0 text-red-500 bg-red-50 p-1 rounded-full group-hover:scale-110 transition-transform">
                    <XCircle size={20} />
                  </div>
                  <span className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-1 w-full group-hover:pl-2 transition-all">
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Gráfico Animado */}
          <div className="relative h-[400px] bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-end items-center">
            
            <div className="absolute top-8 left-8">
                <h3 className="text-brand-dark font-bold text-lg">Funil de Desperdício</h3>
                <p className="text-xs text-gray-400">Dados meramente ilustrativos de um funil comum</p>
            </div>

            <div className="w-full h-full flex items-end justify-center gap-4 md:gap-12 pb-8 relative z-10 px-4">
                
                {/* Barra 1: Visitas */}
                <div className="flex flex-col items-center gap-3 w-1/4 h-full justify-end group">
                    <span className={`text-sm font-bold text-gray-400 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Visitas
                    </span>
                    <div 
                        className={`w-full bg-gray-200 rounded-t-lg relative overflow-hidden transition-all duration-1000 ease-out delay-300`}
                        style={{ height: isVisible ? '85%' : '0%' }}
                    >
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 font-bold">Muitos</div>
                    </div>
                </div>

                {/* Barra 2: Conversas (Queda brusca) */}
                <div className="flex flex-col items-center gap-3 w-1/4 h-full justify-end group">
                    <span className={`text-sm font-bold text-brand-dark transition-opacity duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Conversas
                    </span>
                    <div 
                        className={`w-full bg-brand-yellow rounded-t-lg relative overflow-hidden transition-all duration-1000 ease-out delay-500 shadow-lg`}
                        style={{ height: isVisible ? '35%' : '0%' }}
                    >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                            Perda de interesse
                         </div>
                    </div>
                </div>

                {/* Barra 3: Vendas (Mínimo) */}
                <div className="flex flex-col items-center gap-3 w-1/4 h-full justify-end group">
                    <span className={`text-sm font-bold text-gray-400 transition-opacity duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Vendas
                    </span>
                    <div 
                        className={`w-full bg-brand-dark rounded-t-lg relative overflow-hidden transition-all duration-1000 ease-out delay-700`}
                        style={{ height: isVisible ? '10%' : '0%' }}
                    >
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center animate-bounce">
                            <AlertCircle size={16} className="text-red-500 mx-auto" />
                         </div>
                    </div>
                </div>

            </div>

            {/* Linha tracejada de quebra */}
            <div className="absolute bottom-[35%] left-0 w-full border-t-2 border-dashed border-red-200/50 pointer-events-none"></div>
            <div className="absolute bottom-[35%] right-4 text-xs text-red-300 font-bold rotate-0 bg-gray-50 px-1">Gargalo</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;