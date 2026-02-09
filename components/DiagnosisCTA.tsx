import React from 'react';
import Button from './Button';
import { ClipboardList, Map, Phone } from 'lucide-react';

interface DiagnosisCTAProps {
  onOpenModal: () => void;
}

const DiagnosisCTA: React.FC<DiagnosisCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-yellow/5 radial-gradient"></div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        
        <div className="bg-brand-dark border border-white/10 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative">
          
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg text-sm border-4 border-brand-dark">
            Vagas Limitadas
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Solicite um <br/>
            <span className="text-brand-yellow">Diagnóstico Estratégico</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Você recebe um mapa visual do gargalo + o caminho de correção.
            <br/><span className="text-sm opacity-60">Sem compromisso. Conversa objetiva.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-yellow border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <ClipboardList size={32} />
                </div>
                <span className="text-white font-bold">1. Responda 6 perguntas</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-yellow border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <Map size={32} />
                </div>
                <span className="text-white font-bold">2. Receba o mapa</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-yellow border border-white/10 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <Phone size={32} />
                </div>
                <span className="text-white font-bold">3. Conversa de 20 min</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
                variant="primary" 
                size="xl" 
                className="w-full md:w-auto"
                onClick={onOpenModal}
            >
                Quero meu diagnóstico gratuito
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            *Análise feita por consultor sênior, não por IA ou estagiário.
          </p>

        </div>

      </div>
    </section>
  );
};

export default DiagnosisCTA;