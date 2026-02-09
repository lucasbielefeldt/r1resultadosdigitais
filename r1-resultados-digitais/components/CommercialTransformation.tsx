import React from 'react';
import { 
  Database, 
  TrendingUp, 
  AlertCircle,
  Banknote,
  Gift,
  Sparkles,
  Search
} from 'lucide-react';

interface CommercialTransformationProps {
  onOpenModal: () => void;
}

const CommercialTransformation: React.FC<CommercialTransformationProps> = ({ onOpenModal }) => {
  return (
    <section className="w-full py-24 bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fccd19] blur-[250px] opacity-[0.05] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* === ESQUERDA: COPYWRITING === */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Banknote size={14} />
            Estratégia de Margem
          </div>

          {/* HEADLINE */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
            Além de trazer novos clientes, <br/>
            nós <span className="text-[#fccd19]">monetizamos quem não comprou.</span>
          </h2>

          {/* SUBHEADLINE */}
          <p className="text-lg text-neutral-400 leading-relaxed mb-12 border-l-2 border-[#fccd19] pl-6 py-1">
            Muitas vezes, o lead não fechou por "timing" ou <strong className="text-white">falta de processo pelo time comercial</strong>, não por falta de interesse.
            <br/><br/>
            Como parte da nossa assessoria, nós olhamos para sua base antiga e criamos ações específicas para converter esses leads que você já pagou, mas que estão parados.
          </p>

          {/* === LISTA DE SOLUÇÕES (COPY SIMPLIFICADA) === */}
          <div className="relative space-y-6">
            
            {/* Linha Conectora Vertical */}
            <div className="absolute left-[24px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-neutral-800 via-[#fccd19]/50 to-green-900/50 -z-10 hidden md:block"></div>

            {/* CARD 1: IDENTIFICAÇÃO (Simples e Direto) */}
            <div className="group relative bg-[#111] p-5 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg z-10">
                  <Search size={20} className="text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#fccd19] transition-colors">
                    1. Identificar quem foi esquecido
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Filtramos sua lista para encontrar clientes que demonstraram interesse, pararam de responder, mas <strong>ainda têm potencial de compra</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: AÇÃO (Simples e Direto) */}
            <div className="group relative bg-[#fccd19]/5 p-5 rounded-2xl border border-[#fccd19]/20 shadow-[0_0_30px_-10px_rgba(252,205,25,0.1)] hover:bg-[#fccd19]/10 transition-all duration-300">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#fccd19] flex items-center justify-center shrink-0 shadow-[0_0_15px_#fccd19] z-10 group-hover:rotate-12 transition-transform">
                  <Gift size={22} className="text-black" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    2. Criar Oferta de Resgate
                    <span className="text-[10px] bg-[#fccd19] text-black px-2 py-0.5 rounded-full font-bold">ATIVADOR</span>
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Criamos um motivo novo e exclusivo (uma condição especial) para destravar quem disse "vou pensar" e fechar a venda agora.
                  </p>
                </div>
              </div>
              {/* Brilho decorativo */}
              <Sparkles className="absolute top-4 right-4 text-[#fccd19] opacity-20 w-10 h-10" />
            </div>

            {/* CARD 3: LUCRO (Simples e Direto) */}
            <div className="group relative bg-gradient-to-r from-green-950/30 to-transparent p-5 rounded-2xl border border-green-900/30 hover:border-green-500/30 transition-all duration-300">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-green-900/20 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors z-10">
                  <TrendingUp size={20} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                    3. Venda sem Custo de Anúncio
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Você não paga pelo lead de novo. O dinheiro dessa venda entra <span className="text-green-400 font-medium">direto no lucro</span> da operação.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* === DIREITA: O GRÁFICO (MANTIDO) === */}
        <div className="relative h-[500px] w-full bg-[#0f0f0f] rounded-3xl border border-neutral-800 p-8 md:p-12 flex flex-col justify-between shadow-2xl overflow-hidden group">
          
          {/* Header do Gráfico */}
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h3 className="text-xl font-bold text-white">Potencial Oculto</h3>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Sua Base de Leads Atual</p>
            </div>
            <div className="bg-neutral-800 p-2 rounded-lg border border-neutral-700">
              <Database size={20} className="text-[#fccd19]" />
            </div>
          </div>

          {/* O Gráfico Visual */}
          <div className="flex-1 flex items-center justify-center relative z-10 my-6">
            <div className="relative w-72 h-72">
              
              {/* Círculo Base (80% Desperdiçado) */}
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                {/* Background Circle */}
                <path
                  className="text-neutral-900"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                
                {/* 80% Waste Stroke (Animated - RED ALERT) */}
                <path
                  className="text-red-900/30 transition-all duration-1000"
                  strokeDasharray="80, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />

                {/* 20% Conversion Stroke (GREEN SUCCESS) */}
                <path
                  className="text-green-500"
                  strokeDasharray="20, 100"
                  strokeDashoffset="-80"
                  strokeLinecap="round"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  filter="url(#glow)"
                />
                
                {/* Definição de Glow */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
              
              {/* Conteúdo Central */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black text-white">20%</span>
                <span className="text-[10px] uppercase text-green-500 font-bold tracking-wider bg-green-500/10 px-2 py-0.5 rounded mt-1">Convertidos</span>
              </div>

              {/* Label Flutuante 1: Desperdício (Top Right) */}
              <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-[#1a1a1a] border border-red-500/30 p-4 rounded-xl shadow-[0_10px_30px_-5px_rgba(239,68,68,0.2)] w-48 animate-pulse-slow">
                 <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                   <AlertCircle size={14} className="text-red-500" />
                   <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">Leads Parados</span>
                 </div>
                 <div className="text-white font-bold text-2xl mb-1">80%</div>
                 <div className="text-[10px] text-neutral-400 leading-tight">
                   Já pagos por mídia. <br/>
                   <span className="text-white font-medium underline decoration-red-500/50">Podem ser reativados.</span>
                 </div>
              </div>

              {/* Label Flutuante 2: CAC ZERO (Bottom Left) */}
              <div 
                className="absolute bottom-4 left-0 -translate-x-4 translate-y-2 bg-[#1a1a1a] border border-green-500/30 p-3 rounded-xl shadow-[0_10px_30px_-5px_rgba(34,197,94,0.2)] w-40 animate-pulse-slow"
                style={{ animationDelay: '1.5s' }}
              >
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">CAC de Reativação</span>
                 </div>
                 <div className="text-white font-bold text-xl">R$ 0,00</div>
                 <div className="text-[10px] text-neutral-400 leading-tight mt-1">
                   Custo de mídia zero.
                 </div>
              </div>

            </div>
          </div>

          {/* Footer: A Solução R1 */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] rounded-xl p-5 border border-neutral-800 relative overflow-hidden group/card z-10 hover:border-[#fccd19]/30 transition-colors">
            <div className="absolute top-0 left-0 h-full w-1 bg-[#fccd19]"></div>
            <div className="flex justify-between items-center relative z-10">
               <div>
                 <div className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                   Campanhas de Resgate
                   <span className="bg-[#fccd19] text-black text-[10px] px-1.5 rounded font-bold">ATIVADO</span>
                 </div>
                 <div className="text-xs text-neutral-400">Transformamos "não" em <span className="text-green-400 font-bold">novas oportunidades</span>.</div>
               </div>
               <button 
                onClick={onOpenModal}
                className="h-10 w-10 rounded-full bg-[#fccd19] flex items-center justify-center text-black shadow-[0_0_15px_#fccd19] hover:scale-110 transition-transform cursor-pointer"
               >
                 <TrendingUp size={18} />
               </button>
            </div>
          </div>

          {/* Grid Background Decoration */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        </div>

      </div>

      <style>{`
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CommercialTransformation;