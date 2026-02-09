import React, { useState, useEffect, useRef } from 'react';
import { Search, Eye, BrainCircuit, MessageCircle, CheckCircle2 } from 'lucide-react';

const BuyerJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Efeito para alternar os cards automaticamente (Timer reduzido para não brigar com scroll)
  useEffect(() => {
    // Mantemos um timer suave para "convidar" a leitura, mas o scroll domina
    const interval = setInterval(() => {
      // setActiveStep((prev) => (prev + 1) % 4);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.55 // 55% de visibilidade ativa o card
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      id: 1,
      icon: <Search size={32} />,
      title: "O Gatilho (A Busca)",
      thought: "Eu tenho um problema e preciso de alguém sério para resolver.",
      action: "Pesquisa no Google ou clica em anúncio específico.",
      status: "Cético"
    },
    {
      id: 2,
      icon: <Eye size={32} />,
      title: "A Varredura (3 Segundos)",
      thought: "Isso parece profissional ou é amador? Posso confiar?",
      action: "Analisa design, headline e autoridade visual.",
      status: "Em Análise"
    },
    {
      id: 3,
      icon: <BrainCircuit size={32} />,
      title: "A Checagem Lógica",
      thought: "Eles entendem o que eu preciso? Já fizeram isso antes?",
      action: "Lê a promessa, vê provas sociais e quebra de objeção.",
      status: "Interessado"
    },
    {
      id: 4,
      icon: <MessageCircle size={32} />,
      title: "A Decisão (O Clique)",
      thought: "Faz sentido. Vou falar com eles para ver o preço/prazo.",
      action: "Clica no WhatsApp esperando atendimento à altura.",
      status: "Pronto para Compra"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-brand-yellow text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            Psicologia de Consumo
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
            Como pensa quem tem <br/>
            <span className="text-brand-dark bg-brand-yellow px-2 shadow-sm">dinheiro para te pagar</span>
          </h2>
          <p className="text-gray-500 text-lg">
            O cliente qualificado não compra por impulso. Ele segue um roteiro mental de validação de segurança. Se você falha em qualquer etapa, ele fecha a aba.
          </p>
        </div>

        {/* Jornada Visual Desktop/Mobile */}
        <div className="relative">
          
          {/* Linha Conectora (Desktop) - Ajustada para o novo tamanho */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] w-[80%] h-1 bg-gray-100 z-0 overflow-hidden rounded-full">
             {/* Barra de progresso animada baseada no activeStep */}
             <div 
                className="absolute top-0 left-0 h-full bg-brand-yellow transition-all duration-500 ease-in-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
             ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              
              return (
                <div 
                  key={step.id} 
                  className="relative group cursor-default"
                  ref={(el) => (stepsRef.current[index] = el)}
                  data-index={index}
                >
                  
                  {/* Visual Connector Mobile */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-16 h-full w-0.5 bg-gray-200 -z-10"></div>
                  )}

                  <div 
                    className={`
                      bg-white p-8 rounded-2xl border-2 h-full flex flex-col transition-all duration-500 ease-in-out min-h-[420px]
                      ${isActive 
                        ? 'border-brand-yellow shadow-xl scale-[1.03] z-20' 
                        : 'border-gray-100 hover:border-gray-300'
                      }
                    `}
                  >
                    
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`
                        w-20 h-20 rounded-2xl flex items-center justify-center text-xl transition-all duration-500
                        ${index === 3 && isActive 
                          ? 'bg-green-100 text-green-700 border-green-200' 
                          : isActive 
                            ? 'bg-brand-yellow text-brand-dark scale-110' 
                            : 'bg-gray-50 text-gray-400'
                        }
                      `}>
                        {step.icon}
                      </div>
                      <span className={`
                        text-5xl font-black select-none transition-colors duration-500
                        ${isActive ? 'text-brand-yellow/20' : 'text-gray-100'}
                      `}>
                        0{step.id}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isActive ? 'text-brand-dark' : 'text-gray-700'}`}>
                      {step.title}
                    </h3>
                    
                    {/* O que ele pensa (Balão) */}
                    <div className={`
                      p-5 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl mb-6 relative transition-colors duration-500
                      ${isActive ? 'bg-brand-dark text-white' : 'bg-gray-50 text-gray-600'}
                    `}>
                      <div className={`absolute -top-2 left-0 w-3 h-3 transform rotate-45 transition-colors duration-500 ${isActive ? 'bg-brand-dark' : 'bg-gray-50'}`}></div>
                      <p className="text-base italic font-medium">"{step.thought}"</p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <p className="text-xs text-gray-400 uppercase font-bold mb-2">Comportamento:</p>
                      <p className="text-base text-brand-dark font-medium">{step.action}</p>
                    </div>
                    
                    {/* Status Bar */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                         <div 
                           className={`h-full rounded-full transition-all duration-1000 ${index === 3 ? 'bg-green-500' : 'bg-brand-yellow'}`} 
                           style={{ width: isActive ? '100%' : '30%' }}
                         ></div>
                      </div>
                      <span className={`text-xs font-bold uppercase transition-colors duration-300 ${isActive ? 'text-brand-dark' : 'text-gray-300'}`}>
                        {step.status}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusão Visual */}
        <div className="mt-20 bg-brand-dark text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
           {/* Decor */}
           <div className="absolute right-0 top-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px]"></div>

           <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">Onde a R1 entra?</h3>
              <p className="text-gray-400 text-lg">
                Enquanto o mercado vende apenas o "clique" (Etapa 01), nós construímos a <strong>ponte de confiança</strong> (Etapas 02 e 03). 
                <br className="hidden md:block" />
                Criamos os ativos visuais e lógicos que <span className="text-white font-medium">eliminam o medo de comprar</span>, garantindo que o lead chegue ao seu comercial pronto para fechar.
              </p>
           </div>

           <div className="relative z-10 flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="bg-green-500 rounded-full p-2 text-white">
                 <CheckCircle2 size={24} />
              </div>
              <div>
                 <p className="text-xs text-gray-300 uppercase font-bold">Resultado</p>
                 <p className="font-bold text-white">Conversão Previsível</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BuyerJourney;