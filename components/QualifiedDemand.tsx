import React, { useState } from 'react';
import { 
  Map, 
  Target, 
  Filter, 
  MessageSquare, 
  CheckCircle2, 
  ArrowDown,
  Zap
} from 'lucide-react';
import Button from './Button';

interface QualifiedDemandProps {
  onOpenModal: () => void;
}

const BuyingJourney: React.FC<QualifiedDemandProps> = ({ onOpenModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: Target,
      title: "Atração & Consciência",
      subtitle: "Captura de Atenção",
      desc: "O cliente descobre que tem um problema e que você existe. Usamos anúncios de alta precisão (Meta & Google) para capturar a atenção qualificada e gerar o primeiro clique.",
      color: "#3b82f6", // Blue
      glow: "shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)]"
    },
    {
      id: 2,
      icon: Filter,
      title: "Educação & Filtro",
      subtitle: "Qualificação Automática",
      desc: "Não queremos curiosos. Sua Landing Page e conteúdos servem para educar o lead, elevar o nível de consciência e filtrar quem não tem perfil de compra (Fit).",
      color: "#a855f7", // Purple
      glow: "shadow-[0_0_50px_-10px_rgba(168,85,247,0.5)]"
    },
    {
      id: 3,
      icon: MessageSquare,
      title: "Negociação Consultiva",
      subtitle: "Quebra de Objeções",
      desc: "O lead levanta a mão (vira oportunidade). Seu time comercial entra com um script validado e cadência estruturada para quebrar objeções e gerar desejo ardente.",
      color: "#fccd19", // Gold
      glow: "shadow-[0_0_50px_-10px_rgba(252,205,25,0.5)]"
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: "Decisão & Fechamento",
      subtitle: "Assinatura de Contrato",
      desc: "O momento da verdade. Com a confiança estabelecida e a oferta clara (Irresistível), o cliente se sente seguro para assinar o contrato e realizar o pagamento.",
      color: "#22c55e", // Green
      glow: "shadow-[0_0_50px_-10px_rgba(34,197,94,0.5)]"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#050505] text-white font-sans relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#fccd19] blur-[250px] opacity-[0.03] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 blur-[200px] opacity-[0.03] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start relative z-10">
        
        {/* === ESQUERDA: COPYWRITING ESTRATÉGICO === */}
        <div className="sticky top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fccd19]/10 border border-[#fccd19]/20 text-[#fccd19] text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            <Map size={14} />
            Engenharia de Caminho
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Não é Sorte. <br/>
            É uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fccd19] to-yellow-200">Jornada Projetada.</span>
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed mb-8 pl-6 border-l-2 border-neutral-800">
            A venda não é um evento isolado, é uma <strong>sequência lógica de micro-decisões</strong>.
            <br/><br/>
            Nós mapeamos e otimizamos cada passo que seu cliente dá, eliminando atritos e guiando-o psicologicamente até o "Sim".
          </p>

          <div className="mb-10 pl-6">
            <Button 
              variant="primary" 
              onClick={onOpenModal}
              size="lg"
            >
              Quero desenhar minha jornada
            </Button>
          </div>

          {/* Card de Resumo Dinâmico (Muda conforme o hover na direita) */}
          <div className="bg-[#111] rounded-2xl p-8 border border-neutral-800 shadow-2xl relative overflow-hidden transition-all duration-500">
            {/* Efeito de brilho baseado na cor da etapa ativa */}
            <div 
              className="absolute inset-0 opacity-10 transition-colors duration-500"
              style={{ background: `radial-gradient(circle at top right, ${steps[activeStep].color}, transparent)` }}
            />
            
            <h4 className="text-white font-bold mb-4 flex items-center gap-2 relative z-10">
              <Zap size={18} style={{ color: steps[activeStep].color }} />
              Objetivo da Fase {activeStep + 1}:
            </h4>
            
            <p className="text-xl font-medium text-white relative z-10 transition-all duration-300 transform key={activeStep}">
              "{steps[activeStep].subtitle}"
            </p>
            
            <div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-500 ease-out"
                style={{ 
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                  backgroundColor: steps[activeStep].color 
                }}
              />
            </div>
          </div>
        </div>

        {/* === DIREITA: VISUAL DA JORNADA (INTERATIVO) === */}
        <div className="relative pt-4">
          
          {/* Linha Conectora Vertical (Espinha Dorsal) */}
          <div className="absolute left-[30px] top-10 bottom-10 w-[2px] bg-neutral-800 rounded-full">
            {/* Barra de Progresso Vertical */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#fccd19] to-transparent transition-all duration-500 ease-out"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative pl-24 group cursor-default"
                onMouseEnter={() => setActiveStep(index)}
              >
                
                {/* Ícone do Passo (Conectado à linha) */}
                <div 
                  className={`
                    absolute left-0 top-0 w-[60px] h-[60px] rounded-2xl flex items-center justify-center z-10 
                    transition-all duration-500 border-2
                    ${activeStep === index ? `scale-110 bg-black ${step.glow}` : 'scale-100 bg-[#0a0a0a] border-neutral-800'}
                  `}
                  style={{ 
                    borderColor: activeStep === index ? step.color : '#262626',
                    color: activeStep === index ? step.color : '#525252'
                  }}
                >
                  <step.icon size={28} strokeWidth={activeStep === index ? 2.5 : 2} />
                  
                  {/* Número da Fase */}
                  <div className={`absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#111] border border-neutral-800 flex items-center justify-center text-[10px] font-bold text-white transition-all duration-300 ${activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    {step.id}
                  </div>
                </div>

                {/* Card de Conteúdo */}
                <div 
                  className={`
                    p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden
                    ${activeStep === index 
                      ? 'bg-[#111] border-neutral-700 translate-x-2 shadow-2xl' 
                      : 'bg-[#0a0a0a] border-neutral-900 opacity-60 hover:opacity-80'}
                  `}
                >
                  {/* Background Glow no Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                    style={{ 
                      background: activeStep === index ? `linear-gradient(to right, ${step.color}0D, transparent)` : 'none',
                      opacity: activeStep === index ? 1 : 0
                    }}
                  />

                  <div className="relative z-10">
                    <h3 
                      className="text-xl font-bold mb-2 transition-colors duration-300"
                      style={{ color: activeStep === index ? 'white' : '#737373' }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: activeStep === index ? '#d4d4d4' : '#525252' }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Indicador de Status */}
                  <div className={`absolute top-8 right-8 transition-all duration-500 ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <ArrowDown size={20} style={{ color: step.color }} className="-rotate-90" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BuyingJourney;