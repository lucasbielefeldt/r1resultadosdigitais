import React from 'react';
import { 
  Users, 
  Repeat, 
  Gift, 
  Share2,
  Crown
} from 'lucide-react';
import Button from './Button';

interface LtvSectionProps {
  onOpenModal: () => void;
}

const LtvSection: React.FC<LtvSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="w-full py-24 bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* === ESQUERDA: VISUAL REPRESENTATIVO (GROWTH LOOP) === */}
        <div className="relative h-[500px] flex items-center justify-center order-2 lg:order-1">
          
          {/* Container do Sistema Visual */}
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            
            {/* Anéis de Recorrência (Orbitais) */}
            <div className="absolute w-full h-full border border-neutral-800 rounded-full animate-spin-slow opacity-30"></div>
            <div className="absolute w-[80%] h-[80%] border border-dashed border-[#fccd19]/20 rounded-full animate-reverse-spin opacity-50"></div>
            
            {/* Satélites (Indicações) */}
            <div className="absolute w-full h-full animate-spin-slow">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#1a1a1a] p-3 rounded-full border border-neutral-700 shadow-xl">
                 <Users size={20} className="text-blue-400" />
               </div>
               <div className="absolute bottom-0 right-1/4 translate-y-4 bg-[#1a1a1a] p-3 rounded-full border border-neutral-700 shadow-xl">
                 <Share2 size={20} className="text-green-400" />
               </div>
               <div className="absolute bottom-0 left-1/4 translate-y-4 bg-[#1a1a1a] p-3 rounded-full border border-neutral-700 shadow-xl">
                 <Gift size={20} className="text-purple-400" />
               </div>
            </div>

            {/* Núcleo Central (Cliente Satisfeito) */}
            <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-[#1a1a1a] to-black border border-neutral-800 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_-10px_rgba(252,205,25,0.1)] group cursor-pointer hover:scale-105 transition-transform duration-500">
               {/* Glow Pulsante */}
               <div className="absolute inset-0 bg-[#fccd19] blur-[60px] opacity-20 animate-pulse-slow rounded-full"></div>
               
               <Crown size={32} className="text-[#fccd19] mb-2 drop-shadow-md" />
               <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Lucro Real</span>
            </div>

            {/* Linhas Conectoras Dinâmicas */}
            <div className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#fccd19]/50 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#fccd19]/50 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-pulse delay-75"></div>

          </div>

          {/* Card Flutuante de Resultado */}
          <div className="absolute bottom-10 right-0 bg-[#151515]/90 backdrop-blur-md p-4 rounded-xl border border-neutral-800 shadow-2xl animate-float">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold text-neutral-400 uppercase">Receita Extra</span>
            </div>
            <div className="text-2xl font-bold text-white flex items-end gap-2">
              +45%
              <span className="text-xs font-normal text-neutral-500 mb-1">de lucro extra</span>
            </div>
          </div>

        </div>

        {/* === DIREITA: TEXTOS ESTRATÉGICOS === */}
        <div className="order-1 lg:order-2">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fccd19]/10 border border-[#fccd19]/20 text-[#fccd19] text-xs font-bold tracking-widest uppercase mb-6">
            <Repeat size={14} />
            Multiplicador de Lucro
          </div>

          {/* HEADLINE RESTAURADA */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Além de trazer novos clientes, nós monetizamos sua <br/>
            <span className="text-[#fccd19]">base atual e futura.</span>
          </h2>

          {/* SUBHEADLINE RESTAURADA */}
          <p className="text-lg text-neutral-400 leading-relaxed mb-10 pl-6 border-l-2 border-neutral-800">
            Não basta vender uma única vez. Nossa estrutura garante que <strong>todo cliente que entra (hoje ou no futuro)</strong> continue comprando e gerando lucro, maximizando o valor de cada contato.
          </p>

          <div className="space-y-6">
            
            {/* Estratégia 1: Indicação (MGM) */}
            <div className="group flex gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <Share2 size={22} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Receba Mais Indicações
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Não espere pela boa vontade. Criamos programas de incentivo para que seus clientes atuais indiquem amigos ativamente.
                </p>
              </div>
            </div>

            {/* Estratégia 2: Recorrência */}
            <div className="group flex gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
              <div className="w-12 h-12 rounded-xl bg-[#fccd19]/10 flex items-center justify-center shrink-0 border border-[#fccd19]/20 group-hover:border-[#fccd19]/50 transition-colors">
                <Repeat size={22} className="text-[#fccd19]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fccd19] transition-colors">
                  Crie Recorrência de Vendas
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Aumente seu lucro vendendo mais para a mesma pessoa. Criamos ofertas de reposição ou produtos complementares para manter o cliente comprando sempre.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10">
            <Button 
              variant="primary" 
              onClick={onOpenModal}
              size="lg"
            >
              Quero Monetizar minha base
            </Button>
          </div>

        </div>

      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 20s linear infinite reverse;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default LtvSection;