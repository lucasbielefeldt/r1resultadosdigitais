import React, { useState, useEffect, useRef } from 'react';
import { 
  SearchX, 
  Scale, 
  UserX, 
  TrendingDown, 
  AlertTriangle,
  XCircle
} from 'lucide-react';
import Button from './Button';

interface ProblemAwarenessProps {
  onOpenModal: () => void;
}

const ProblemAwareness: React.FC<ProblemAwarenessProps> = ({ onOpenModal }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Efeito para alternar o card ativo automaticamente (Timer)
  useEffect(() => {
    const interval = setInterval(() => {
      // Apenas avança se o usuário não estiver interagindo via scroll recentemente (opcional, mas mantive simples)
      // setActiveCardIndex((prev) => (prev + 1) % 4); 
    }, 3000); 

    // Removi o timer automático agressivo para privilegiar o scroll no mobile,
    // mas mantive a estrutura caso queira reativar. O foco agora é scroll/hover.
    
    return () => clearInterval(interval);
  }, []);

  // Efeito de Scroll Spy para Mobile/Desktop
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveCardIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Card precisa estar 60% visível para ativar
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const cards = [
    {
      id: 1,
      icon: SearchX,
      title: "Interesse não vira contato",
      text: "O cliente até chega, mas não entende por que escolher você. Sem clareza, ele não chama no WhatsApp — ele continua procurando."
    },
    {
      id: 2,
      icon: Scale,
      title: "Você perde na comparação",
      text: "O cliente não escolhe o mais barato. Ele escolhe quem parece mais estruturado, confiável e preparado para resolver o problema dele."
    },
    {
      id: 3,
      icon: UserX,
      title: "A venda acontece (com outro)",
      text: "Quando sua jornada é confusa, o concorrente mais organizado vira a decisão óbvia. O dinheiro saiu do bolso do cliente, mas não foi para o seu."
    },
    {
      id: 4,
      icon: TrendingDown,
      title: "Vendas indo embora todo mês",
      text: "A falta de posicionamento e estrutura representa dezenas de oportunidades perdidas mensalmente — silenciosamente, sem você perceber."
    }
  ];

  return (
    <section className="w-full py-24 bg-white text-neutral-900 font-sans relative overflow-hidden">
      
      {/* Background Ambience - Red Alert Undertone */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Central Vermelho Profundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-100/40 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
            
        {/* Header Preservado para Contexto */}
        <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-100">
                <AlertTriangle size={14} />
                O Problema Grave
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
                O problema não é gerar interesse. <br/>
                <span className="text-red-600 bg-red-50 px-2 rounded-lg decoration-4 underline-offset-4 decoration-red-200">É perder clientes</span> antes mesmo de falar com eles.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10">
                Hoje, o seu potencial cliente pesquisa, compara e escolhe quem transmite mais segurança.
                <br className="hidden md:block" />
                Quando não encontra clareza, estrutura e confiança na sua comunicação, ele não negocia.
            </p>
        </div>

        {/* Grid de Cards - Texto Normal (Sem Negrito) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {cards.map((card, index) => {
            const isActive = index === activeCardIndex;
            return (
              <div 
                key={card.id}
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                className="group relative h-full transition-all duration-500 ease-in-out"
                onMouseEnter={() => setActiveCardIndex(index)} // Permite interação manual desktop
              >
                <div 
                  className={`
                    relative h-full p-8 rounded-2xl border transition-all duration-700 overflow-hidden flex flex-col items-start
                    ${isActive 
                      ? 'bg-white border-red-500 shadow-[0_0_40px_-5px_rgba(220,38,38,0.25)] scale-[1.03] z-10' 
                      : 'bg-white/80 border-red-50 shadow-sm opacity-70 hover:opacity-100 hover:border-red-200'
                    }
                  `}
                >
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-red-50 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-0'}`} />

                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Icon Wrapper */}
                  <div 
                    className={`
                      relative mb-6 w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500
                      ${isActive 
                        ? 'bg-red-600 border-red-500 text-white scale-110 rotate-3 shadow-lg shadow-red-500/30' 
                        : 'bg-red-50 border-red-100 text-red-400'
                      }
                    `}
                  >
                    <card.icon size={26} strokeWidth={2.5} className={isActive ? 'animate-pulse' : ''} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-black mb-4 leading-tight transition-colors duration-300 ${isActive ? 'text-neutral-900' : 'text-neutral-500'}`}>
                      {card.title}
                    </h3>
                    
                    <p className={`text-base font-normal leading-relaxed transition-colors duration-300 ${isActive ? 'text-neutral-700' : 'text-neutral-400'}`}>
                      {card.text}
                    </p>
                  </div>

                  {/* Action Indicator */}
                  <div className={`absolute bottom-6 right-6 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <XCircle size={20} className="text-red-500" />
                  </div>

                  {/* Red Top Line Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final - Botão PRETO (Black Variant) para fundo branco */}
        <div className="text-center">
             <Button 
                variant="black" 
                size="lg" 
                onClick={onOpenModal}
             >
                Quero parar de perder oportunidades
             </Button>
             <p className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></span>
                Diagnóstico aplicado apenas para empresas que já vendem e querem previsibilidade
             </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemAwareness;