import React, { useEffect, useState } from 'react';
import { 
  Play, 
  BarChart2, 
  Layers,
  Check
} from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onOpenModal: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Componente Visual do Card (Reutilizável)
  const VisualCard = () => (
    <div className="w-full max-w-[420px] bg-[#0a0a0a] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden group hover:border-neutral-700 transition-colors duration-500 mx-auto">
       
       {/* Header do Card */}
       <div className="p-5 border-b border-neutral-900 flex justify-between items-center bg-[#0f0f0f]">
         <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-[#fccd19] animate-pulse"></div>
           <span className="text-[10px] font-bold text-white tracking-widest">ECOSSISTEMA R1</span>
         </div>
         <BarChart2 size={14} className="text-neutral-600" />
       </div>

       {/* Conteúdo do Card */}
       <div className="p-6 space-y-6">
         
         {/* Etapa 1 */}
         <div className="relative pl-6 border-l border-neutral-800 group-hover:border-[#fccd19]/30 transition-colors duration-500">
           <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-neutral-800 rounded-full border-2 border-[#0a0a0a] group-hover:bg-[#fccd19] transition-colors duration-500"></div>
           <h3 className="text-xs font-bold text-neutral-500 uppercase mb-2 group-hover:text-[#fccd19] transition-colors">Atração (Jornada)</h3>
           <div className="flex items-center justify-between bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
             <div className="flex items-center gap-3">
               <Layers size={16} className="text-white" />
               <span className="text-white text-sm font-medium">Oportunidades</span>
             </div>
             <span className="text-[#fccd19] font-bold text-xs bg-[#fccd19]/10 px-2 py-0.5 rounded">+240</span>
           </div>
         </div>

         {/* Etapa 2 */}
         <div className="relative pl-6 border-l border-neutral-800">
           <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#fccd19] rounded-full border-2 border-[#0a0a0a] shadow-[0_0_10px_#fccd19]"></div>
           <h3 className="text-xs font-bold text-[#fccd19] uppercase mb-2">Comercial (Conversão)</h3>
           <div className="flex items-center justify-between bg-[#fccd19]/5 p-3 rounded-lg border border-[#fccd19]/20">
             <div className="flex items-center gap-3">
               <div className="w-4 h-4 rounded-full bg-[#fccd19] flex items-center justify-center">
                 <Check size={10} className="text-black stroke-[4]" />
               </div>
               <span className="text-white text-sm font-medium">Negociações</span>
             </div>
             <span className="text-white font-bold text-xs">85</span>
           </div>
         </div>

         {/* Etapa 3 */}
         <div className="relative pl-6">
           <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-neutral-800 rounded-full border-2 border-[#0a0a0a]"></div>
           <h3 className="text-xs font-bold text-neutral-500 uppercase mb-2">Resultado</h3>
           <div className="flex items-center justify-between bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
             <div className="flex items-center gap-3">
               <span className="text-white text-sm font-medium">Novos Clientes</span>
             </div>
             <span className="text-white font-bold text-xs">R$ 142k</span>
           </div>
         </div>

       </div>

       {/* Footer Gráfico */}
       <div className="h-24 bg-gradient-to-t from-neutral-900/80 to-transparent relative mt-2 w-full px-6 flex items-end justify-between gap-2 pb-6">
          {[30, 50, 40, 70, 55, 90].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm transition-all duration-700 delay-[${i*100}ms] ${i === 5 ? 'bg-[#fccd19]' : 'bg-neutral-800 hover:bg-neutral-700'}`}></div>
          ))}
       </div>

    </div>
  );

  return (
    <div className="bg-[#050505] min-h-screen w-full relative">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-24 pb-12 md:pt-0 md:pb-0">
        
        {/* Background Clean */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
          
          {/* === ESQUERDA: COPYWRITING === */}
          <div className={`flex flex-col justify-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge Sutil */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-6 bg-[#fccd19]"></div>
              <span className="text-[#fccd19] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                Assessoria de Alta Performance
              </span>
            </div>

            {/* HEADLINE OTIMIZADA */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-bold leading-[1.1] mb-6 tracking-tighter text-white">
              Aumente sua Capacidade de <br/>
              <span className="text-[#fccd19]">Atrair e Converter.</span>
            </h1>

            {/* SUBHEADLINE OTIMIZADA */}
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg font-light border-l border-neutral-800 pl-6">
              Criamos a jornada de compra ideal e equipamos seu time comercial para aproveitar cada oportunidade. <strong className="text-white font-medium">Do tráfego ao fechamento, sem desperdício.</strong>
            </p>

            {/* === VISUAL ARQUITETURAL MOBILE (APENAS MOBILE) === */}
            <div className={`relative w-full mb-10 lg:hidden transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <VisualCard />
              {/* Elementos Decorativos Mobile */}
              <div className="absolute top-4 right-4 w-32 h-32 border border-neutral-800 rounded-full opacity-30 animate-[spin_60s_linear_infinite] -z-10"></div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              
              {/* BOTÃO HERO PRINCIPAL - HIPER PERSUASIVO */}
              <Button 
                variant="primary" // Amarelo
                size="xl" 
                onClick={onOpenModal}
              >
                Agendar Diagnóstico
              </Button>
              
              <Button 
                variant="ghost" 
                size="xl"
                onClick={scrollToNextSection}
                className="text-white border border-white/20 hover:bg-white/5 hover:border-white/40"
                icon={Play}
              >
                Ver Metodologia
              </Button>
            </div>

          </div>

          {/* === DIREITA: VISUAL ARQUITETURAL (APENAS DESKTOP) === */}
          <div className={`relative hidden lg:block h-[550px] transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Card Flutuante Principal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
               <VisualCard />
            </div>

            {/* Elementos Decorativos de Fundo */}
            <div className="absolute top-10 right-10 w-48 h-48 border border-neutral-800 rounded-full opacity-30 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute top-10 right-10 w-48 h-48 border border-dashed border-neutral-800 rounded-full opacity-30 animate-[spin_40s_linear_infinite_reverse]"></div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection;