import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  Fingerprint
} from 'lucide-react';

interface ComparisonSectionProps {
  onOpenModal: () => void;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenModal }) => {
  // Dados do comparativo
  const comparisonData = [
    { 
      id: 1,
      pain: "Comunicação genérica", 
      gain: "Posicionamento claro e direto",
      sub: "Deixe de ser mais um na multidão."
    },
    { 
      id: 2,
      pain: "Cliente confuso na comparação", 
      gain: "Jornada que guia a decisão",
      sub: "Você controla a narrativa de compra."
    },
    { 
      id: 3,
      pain: "Interesse que não vira contato", 
      gain: "Interesse convertido em oportunidade",
      sub: "Pipeline previsível e aquecido."
    },
    { 
      id: 4,
      pain: "WhatsApp cheio, vendas fracas", 
      gain: "Conversas mais qualificadas",
      sub: "Fale com quem realmente quer comprar."
    },
    { 
      id: 5,
      pain: "Dependência de esforço e sorte", 
      gain: "Controle sobre números e ajustes",
      sub: "Engenharia previsível de resultados."
    },
    { 
      id: 6,
      pain: "Decisões no escuro", 
      gain: "Segurança para investir",
      sub: "ROI calculado, sem achismos."
    },
    { 
      id: 7,
      pain: "Crescimento instável", 
      gain: "Crescimento sustentável",
      sub: "Escale sua operação com solidez."
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Começa no primeiro
  const [solvedCount, setSolvedCount] = useState(0);
  const [solvedItems, setSolvedItems] = useState(new Set());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Cores da marca
  const brandColor = "#fccd19"; 

  // Efeito para rotação automática
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setHoveredIndex((prev) => {
        // Se chegar ao final, volta para o início (loop)
        const nextIndex = prev === null || prev >= comparisonData.length - 1 ? 0 : (prev + 1);
        return nextIndex;
      });
    }, 2500); // Muda a cada 2.5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, comparisonData.length]);

  // Efeito para atualizar o progresso (Gamificação)
  useEffect(() => {
    if (hoveredIndex !== null) {
      setSolvedItems((prev) => {
        if (!prev.has(hoveredIndex)) {
          const newSet = new Set(prev);
          newSet.add(hoveredIndex);
          setSolvedCount(newSet.size);
          return newSet;
        }
        return prev;
      });
    }
  }, [hoveredIndex]);

  // Função para interação manual (pausa o automático)
  const handleMouseEnter = (index: number) => {
    setIsAutoPlaying(false);
    setHoveredIndex(index);
  };

  // Cálculo de progresso (0 a 100%)
  const progress = (solvedCount / comparisonData.length) * 100;

  return (
    <section className="w-full py-24 bg-black text-white font-sans relative overflow-hidden">
      
      {/* Background Noise & Gradient Subtle */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-neutral-900 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#fccd19] blur-[150px] opacity-10 rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header com Gamificação */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
              Transforme sua <br/>
              <span style={{ color: brandColor }}>Realidade Comercial</span>
            </h2>
            <p className="text-neutral-400">
              O Sistema R1 resolve seus gargalos automaticamente.
            </p>
          </div>

          {/* Placar de Progresso */}
          <div className="flex flex-col gap-2 w-full md:w-64">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-neutral-500">
              <span>Potencial de Otimização</span>
              <span style={{ color: solvedCount > 0 ? brandColor : '' }}>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_#fccd19]"
                style={{ width: `${progress}%`, backgroundColor: brandColor }}
              />
            </div>
            <p className="text-[10px] text-neutral-600 text-right">
              {solvedCount === comparisonData.length ? 'Potencial Máximo Ativado 🚀' : `${comparisonData.length - solvedCount} pontos para otimizar`}
            </p>
          </div>
        </div>

        {/* Lista Interativa */}
        <div 
          className="flex flex-col gap-3"
          onMouseLeave={() => setIsAutoPlaying(true)} // Retoma o automático ao tirar o mouse da lista
        >
          {comparisonData.map((item, index) => (
            <div 
              key={item.id}
              onMouseEnter={() => handleMouseEnter(index)}
              className="relative h-20 md:h-24 w-full rounded-xl cursor-pointer group [perspective:1000px]"
            >
              
              {/* CAMADA DE BAIXO: O PROBLEMA (Sempre visível se não houver hover) */}
              <div className="absolute inset-0 bg-[#111] border border-white/5 rounded-xl flex items-center justify-between px-6 md:px-8 transition-transform duration-500">
                <div className="flex items-center gap-4 md:gap-6 opacity-60 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-900/10 flex items-center justify-center border border-red-500/20 text-red-500 shrink-0">
                    <X size={18} />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-neutral-400 line-through decoration-red-900/50 decoration-2">
                    {item.pain}
                  </span>
                </div>
                
                {/* Ícone indicativo de ação (mobile/desktop) */}
                <div className="hidden md:flex text-neutral-700 opacity-30 group-hover:opacity-0 transition-opacity">
                  {!isAutoPlaying && <Fingerprint size={24} />}
                </div>
              </div>

              {/* CAMADA DE CIMA: A SOLUÇÃO (Reveal Effect) */}
              <div 
                className="absolute inset-0 bg-white rounded-xl flex items-center justify-between px-6 md:px-8 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ 
                  clipPath: hoveredIndex === index ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                  backgroundColor: brandColor
                }}
              >
                {/* Conteúdo da Solução */}
                <div className="flex items-center gap-4 md:gap-6 min-w-max">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-black flex items-center justify-center shrink-0 shadow-lg transition-transform duration-500 delay-100 ${hoveredIndex === index ? 'scale-100' : 'scale-0'}`}>
                    <Check size={18} className="text-[#fccd19]" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className={`text-lg md:text-xl font-bold text-black transition-transform duration-500 delay-75 ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-4'}`}>
                      {item.gain}
                    </span>
                    <span className={`text-xs md:text-sm font-medium text-black/70 transition-transform duration-500 delay-100 ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-4'}`}>
                      {item.sub}
                    </span>
                  </div>
                </div>

                {/* Seta Decorativa */}
                <ArrowRight className={`text-black/40 w-6 h-6 transition-all duration-500 delay-200 ${hoveredIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                
                {/* Efeito de Brilho ao passar */}
                <div className={`absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 ${hoveredIndex === index ? 'animate-shine' : ''}`} />
              </div>

            </div>
          ))}
        </div>

        {/* CTA Final - Aparece quando completa ou interage */}
        <div className={`mt-12 text-center transition-all duration-700 ${solvedCount > 2 ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
           <button 
             className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-[#fccd19] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(252,205,25,0.4)]"
             onClick={onOpenModal}
           >
             Quero ativar esse sistema no meu negócio
           </button>
           <p className="mt-4 text-sm text-neutral-500">
             Não deixe sua operação refém da sorte.
           </p>
        </div>

      </div>

      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 2s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ComparisonSection;