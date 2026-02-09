import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  BarChart3, 
  Users, 
  PenTool, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  MousePointer2,
  Crown
} from 'lucide-react';

const FeatureCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      id: 0,
      icon: Crown,
      title: "Posicionamento",
      headline: "Sua identidade única no mercado.",
      description: "Antes de anunciar, definimos quem você é. Construímos a autoridade visual e narrativa que elimina a comparação por preço.",
      features: [
        "Definição de Arquétipo de Marca",
        "Tom de voz e narrativa proprietária",
        "Diferenciação estética (Branding)"
      ],
      color: "#ffffff" // White/Silver for Authority
    },
    {
      id: 1,
      icon: PenTool,
      title: "Criativos de Impacto",
      headline: "Anúncios que param o scroll.",
      description: "Não fazemos apenas 'artezinha'. Criamos roteiros e designs baseados em neurovendas para gerar desejo imediato.",
      features: [
        "Foco em conversão, não apenas likes",
        "Roteiros para vídeos virais",
        "Design alinhado ao posicionamento premium"
      ],
      color: "#fccd19" // Brand Gold
    },
    {
      id: 2,
      icon: Layout,
      title: "Páginas (LPs)",
      headline: "Seu melhor vendedor, 24h por dia.",
      description: "Landing Pages projetadas com uma única missão: transformar visitantes curiosos em leads qualificados.",
      features: [
        "Copywriting persuasivo",
        "Carregamento ultra-rápido",
        "Mobile-first (focado em celular)"
      ],
      color: "#3b82f6" // Blue accent
    },
    {
      id: 3,
      icon: Target,
      title: "Tráfego Pago",
      headline: "O cliente certo, na hora certa.",
      description: "Gestão estratégica de mídia no Meta (Instagram/Facebook) e Google Ads para escalar seu faturamento com ROI.",
      features: [
        "Segmentação de público comprador",
        "Remarketing inteligente",
        "Otimização diária de campanhas"
      ],
      color: "#ef4444" // Red accent
    },
    {
      id: 4,
      icon: Users,
      title: "CRM e Processos",
      headline: "Fim dos leads perdidos no limbo.",
      description: "Implementamos e organizamos seu CRM. Seu time saberá exatamente quem abordar, quando e o que falar.",
      features: [
        "Playbook de vendas",
        "Automação de follow-up",
        "Recuperação de vendas perdidas"
      ],
      color: "#10b981" // Green accent
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Dashboards e BI",
      headline: "Gestão baseada em dados reais.",
      description: "Tenha um painel em tempo real com as métricas que importam. Chega de tomar decisões baseadas em 'achismo'.",
      features: [
        "CAC, LTV e ROAS em tempo real",
        "Relatórios de performance semanais",
        "Previsibilidade de crescimento"
      ],
      color: "#8b5cf6" // Purple accent
    }
  ];

  // Rotação Automática
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % steps.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="w-full py-24 bg-[#050505] text-white font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fccd19] blur-[200px] opacity-[0.03] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white blur-[200px] opacity-[0.02] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fccd19]/10 border border-[#fccd19]/20 text-[#fccd19] text-xs font-bold tracking-widest uppercase mb-6">
            <MousePointer2 size={14} />
            Nossa Metodologia
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            O que entregamos <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fccd19] to-amber-200">
              na prática
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Não entregamos apenas "serviços soltos". Entregamos um ecossistema integrado onde cada peça fortalece a outra para gerar escala.
          </p>
        </div>

        {/* Layout Principal: Navegação Esquerda + Conteúdo Direita */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* --- NAVEGAÇÃO LATERAL (Desktop) / LISTA (Mobile) --- */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(index)}
                className={`
                  group relative flex items-center gap-4 p-4 md:p-6 rounded-xl text-left transition-all duration-300 border
                  ${activeTab === index 
                    ? 'bg-neutral-900/80 border-[#fccd19]/50 shadow-[0_0_30px_-10px_rgba(252,205,25,0.15)]' 
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'}
                `}
              >
                {/* Ícone */}
                <div 
                  className={`
                    w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0
                    ${activeTab === index ? 'bg-[#fccd19] text-black scale-100' : 'bg-neutral-800 text-neutral-500 scale-90 group-hover:scale-100 group-hover:bg-neutral-700 group-hover:text-white'}
                  `}
                >
                  <step.icon size={22} />
                </div>

                {/* Texto */}
                <div className="flex-1">
                  <h3 
                    className={`text-lg font-bold transition-colors ${activeTab === index ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}
                  >
                    {step.title}
                  </h3>
                  {activeTab === index && (
                    <p className="text-xs text-[#fccd19] mt-1 font-medium animate-fadeIn">
                      Em destaque
                    </p>
                  )}
                </div>

                {/* Seta Ativa */}
                <div className={`transition-all duration-300 ${activeTab === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                  <ArrowRight size={18} className="text-[#fccd19]" />
                </div>
              </button>
            ))}
          </div>

          {/* --- ÁREA DE CONTEÚDO VISUAL (Card Dinâmico) --- */}
          <div className="w-full lg:w-2/3 relative h-[600px] md:h-[550px]">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  absolute inset-0 w-full h-full rounded-3xl border border-neutral-800 bg-[#0f0f0f] overflow-hidden transition-all duration-500 ease-in-out flex flex-col md:flex-row
                  ${activeTab === index ? 'opacity-100 translate-y-0 z-20 pointer-events-auto' : 'opacity-0 translate-y-8 z-10 pointer-events-none'}
                `}
              >
                {/* Coluna de Texto (Dentro do Card) */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative z-10 bg-gradient-to-r from-[#0f0f0f] to-transparent">
                  <div className="inline-flex items-center gap-2 mb-6 text-sm font-bold tracking-widest uppercase opacity-70" style={{ color: step.color }}>
                    <step.icon size={16} />
                    Pilar 0{index + 1}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {step.headline}
                  </h3>
                  
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    {step.description}
                  </p>
                  
                  <div className="space-y-4">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#fccd19] shrink-0" />
                        <span className="text-neutral-300 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coluna Visual (Mockup Abstrato CSS) */}
                <div className="w-full md:w-1/2 bg-neutral-900/50 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* ELEMENTOS VISUAIS DINÂMICOS POR TIPO */}
                  <div className={`relative w-full max-w-[280px] transition-all duration-700 delay-100 ${activeTab === index ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    
                    {/* Visual: POSICIONAMENTO (Novo Item) */}
                    {index === 0 && (
                      <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-2xl border border-neutral-600 aspect-[4/5] relative flex flex-col items-center justify-center p-6 gap-4">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                           <Crown size={120} className="text-white" />
                        </div>
                        <div className="w-24 h-24 rounded-full border-2 border-[#fccd19] flex items-center justify-center relative z-10 bg-black/50 backdrop-blur">
                          <Crown size={40} className="text-[#fccd19]" />
                        </div>
                        <div className="text-center relative z-10">
                           <div className="h-2 w-16 bg-neutral-600 rounded mx-auto mb-2"></div>
                           <div className="h-2 w-24 bg-white/20 rounded mx-auto"></div>
                        </div>
                        <div className="w-full bg-neutral-700/50 rounded-lg p-3 border border-neutral-600 relative z-10">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-[10px] text-white uppercase font-bold">Autoridade</span>
                          </div>
                          <div className="h-1.5 w-full bg-neutral-600 rounded-full overflow-hidden">
                            <div className="h-full w-[90%] bg-white"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual: CRIATIVOS (Card tipo Instagram) */}
                    {index === 1 && (
                      <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-2xl border border-neutral-700 aspect-[4/5] relative group cursor-default">
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-black"></div>
                        <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#fccd19]"></div>
                          <div className="h-2 w-24 bg-neutral-600 rounded"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end gap-2">
                          <div className="h-2 w-3/4 bg-white/50 rounded"></div>
                          <div className="h-2 w-1/2 bg-white/30 rounded"></div>
                          <div className="mt-2 px-4 py-2 bg-[#fccd19] text-black text-xs font-bold text-center rounded">SAIBA MAIS</div>
                        </div>
                      </div>
                    )}

                    {/* Visual: PÁGINAS (Browser Window) */}
                    {index === 2 && (
                      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl border border-neutral-700 aspect-[9/16] md:aspect-square relative flex flex-col">
                        <div className="h-8 bg-neutral-800 border-b border-neutral-700 flex items-center px-3 gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="flex-1 p-4 flex flex-col gap-3 relative">
                           <div className="h-4 w-2/3 bg-white/20 rounded mx-auto mb-2"></div>
                           <div className="h-32 w-full bg-neutral-800 rounded-lg border border-neutral-700 border-dashed flex items-center justify-center">
                             <span className="text-xs text-neutral-600">VIDEO</span>
                           </div>
                           <div className="h-10 w-full bg-blue-600 rounded shadow-lg shadow-blue-900/50"></div>
                           <div className="flex gap-2 justify-center mt-2">
                             <div className="w-8 h-8 rounded-full bg-neutral-800"></div>
                             <div className="w-8 h-8 rounded-full bg-neutral-800"></div>
                             <div className="w-8 h-8 rounded-full bg-neutral-800"></div>
                           </div>
                        </div>
                      </div>
                    )}

                    {/* Visual: TRÁFEGO (Graphs & Ads Manager) */}
                    {index === 3 && (
                      <div className="relative">
                        <div className="bg-neutral-800 p-4 rounded-lg shadow-xl border border-neutral-700 w-full mb-4">
                          <div className="flex justify-between items-center mb-4">
                            <div className="h-2 w-16 bg-neutral-600 rounded"></div>
                            <div className="h-2 w-8 bg-green-500 rounded"></div>
                          </div>
                          <div className="flex items-end gap-1 h-20 w-full">
                            {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                              <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#fccd19] opacity-80 rounded-t-sm hover:opacity-100 transition-opacity"></div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                           <div className="flex-1 bg-neutral-800 p-3 rounded-lg border border-neutral-700 text-center">
                             <div className="text-xs text-neutral-500 mb-1">ROAS</div>
                             <div className="text-lg font-bold text-green-400">12.5x</div>
                           </div>
                           <div className="flex-1 bg-neutral-800 p-3 rounded-lg border border-neutral-700 text-center">
                             <div className="text-xs text-neutral-500 mb-1">CPL</div>
                             <div className="text-lg font-bold text-white">R$ 2,10</div>
                           </div>
                        </div>
                      </div>
                    )}

                    {/* Visual: CRM (Kanban) */}
                    {index === 4 && (
                      <div className="bg-[#151515] p-3 rounded-lg border border-neutral-700 w-full aspect-square flex gap-2 overflow-hidden">
                         {[1, 2, 3].map((col) => (
                           <div key={col} className="flex-1 bg-neutral-800/50 rounded flex flex-col gap-2 p-1.5">
                              <div className={`h-1.5 w-1/2 rounded ${col === 1 ? 'bg-blue-500' : col === 2 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                              <div className="bg-neutral-700 h-10 rounded border-l-2 border-white/20"></div>
                              <div className="bg-neutral-700 h-10 rounded border-l-2 border-white/20"></div>
                              {col === 2 && <div className="bg-neutral-700 h-10 rounded border-l-2 border-white/20"></div>}
                           </div>
                         ))}
                      </div>
                    )}

                    {/* Visual: DASHBOARD (Pie Chart & Stats) */}
                    {index === 5 && (
                       <div className="bg-neutral-800 p-5 rounded-xl border border-neutral-700 w-full shadow-2xl flex flex-col items-center justify-center gap-6 aspect-square">
                         <div className="relative w-32 h-32 rounded-full border-[12px] border-neutral-700 flex items-center justify-center">
                            <svg className="absolute inset-0 rotate-[-90deg]" viewBox="0 0 36 36">
                              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#fccd19" strokeWidth="3" strokeDasharray="75, 100" />
                            </svg>
                            <div className="text-center">
                              <span className="block text-2xl font-bold text-white">75%</span>
                              <span className="text-[10px] text-neutral-400">Meta</span>
                            </div>
                         </div>
                         <div className="w-full space-y-2">
                           <div className="flex justify-between text-xs text-neutral-400"><span>Leads</span> <span className="text-white">1,240</span></div>
                           <div className="w-full h-1.5 bg-neutral-700 rounded-full overflow-hidden"><div className="w-[80%] h-full bg-blue-500"></div></div>
                           
                           <div className="flex justify-between text-xs text-neutral-400"><span>Vendas</span> <span className="text-white">340</span></div>
                           <div className="w-full h-1.5 bg-neutral-700 rounded-full overflow-hidden"><div className="w-[40%] h-full bg-green-500"></div></div>
                         </div>
                       </div>
                    )}

                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none -z-10" />

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FeatureCarousel;