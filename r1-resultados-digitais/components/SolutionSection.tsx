import React from 'react';
import { Maximize, GitMerge, MessageSquare, ShieldCheck, X, Check, ArrowRight } from 'lucide-react';
import Button from './Button';

const SolutionSection: React.FC = () => {
  const cards = [
    {
      icon: <Maximize size={24} />,
      title: "Posicionamento Claro",
      subtitle: "Clareza para quem pesquisa",
      text: "O mercado entende rapidamente quem você é, para quem é e por que escolher você — sem esforço, sem ruído, sem dúvida."
    },
    {
      icon: <GitMerge size={24} />,
      title: "Jornada Estruturada",
      subtitle: "Segurança para quem compara",
      text: "Cada etapa da decisão é guiada para gerar confiança, reduzir objeções e eliminar insegurança antes do contato."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Demanda Qualificada",
      subtitle: "Contatos prontos para conversar",
      text: "O interesse chega no WhatsApp mais consciente, mais preparado e muito mais próximo da decisão."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Previsibilidade",
      subtitle: "Controle para decidir",
      text: "Você passa a entender de onde vêm as oportunidades, o que sustenta as vendas e onde ajustar para crescer com segurança."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      
      {/* Background Decor - Grid sutil para passar ideia de estrutura */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Headline Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            A Solução Lógica (SDP)
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            O problema não se resolve com mais mídia. <br className="hidden md:block" />
            Se resolve com <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-brand-yellow">ESTRUTURA e POSICIONAMENTO</span> antes dela.
          </h2>
          
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Quando não existe posicionamento claro e uma jornada de compra estruturada,
              <span className="text-red-400 font-semibold"> qualquer investimento em mídia só acelera a perda de oportunidades.</span>
            </p>
            <div className="w-full h-px bg-white/10 my-6"></div>
            <p className="text-gray-400 font-medium">
              Por isso, antes de pensar em tráfego, anúncios ou escala,
              a R1 implanta um <strong className="text-white">Sistema de Demanda Previsível (SDP)</strong>.
            </p>
          </div>
          
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-sm md:text-base">
            Um sistema que organiza como sua empresa é percebida, escolhida e procurada —
            para que o interesse do mercado chegue pronto para virar venda.
          </p>
        </div>

        {/* 🧩 CARDS - O QUE O SDP ORGANIZA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group">
              <div className="bg-green-500/10 text-green-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-green-400 text-xs font-bold uppercase tracking-wide mb-4">{card.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* 🔄 BLOCO DE CONTRASTE (Antes/Depois) */}
        <div className="max-w-5xl mx-auto bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          {/* Divisor Visual no Desktop */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-white/10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
            
            {/* Lado Esquerdo: SEM SDP */}
            <div className="md:pr-8">
              <h3 className="text-xl font-bold text-gray-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Sem SDP
              </h3>
              <ul className="space-y-4">
                {[
                  "Interesse disperso",
                  "Comparação perdida",
                  "Contatos frios",
                  "Decisão no escuro"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500 group">
                    <div className="bg-red-500/10 p-1 rounded text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <X size={16} />
                    </div>
                    <span className="font-medium decoration-red-900/50 decoration-2 group-hover:text-gray-300 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ícone de Transição Mobile */}
            <div className="md:hidden flex justify-center -my-4">
              <div className="bg-white/10 p-2 rounded-full rotate-90">
                <ArrowRight className="text-gray-400" />
              </div>
            </div>

            {/* Lado Direito: COM SDP */}
            <div className="md:pl-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
                Com SDP
              </h3>
              <ul className="space-y-4">
                {[
                  "Jornada clara",
                  "Confiança construída",
                  "Conversas qualificadas",
                  "Crescimento previsível"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <div className="bg-green-500 text-black p-1 rounded shadow-lg shadow-green-500/20">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-lg tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        {/* ⚠️ BLOCO DE CONSCIÊNCIA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-400 text-lg md:text-xl">
            O Sistema de Demanda Previsível <span className="text-white font-semibold">não cria demanda artificial.</span>
            <br className="hidden md:block"/>
            Ele organiza a demanda que já existe, mas hoje está sendo desperdiçada.
          </p>
          <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest font-medium">
            É isso que separa empresas que competem por atenção <br/>
            de empresas que são escolhidas com segurança.
          </p>
        </div>

        {/* 🎯 CTA DE SOLUÇÃO */}
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg" 
          >
            Quero estruturar meu SDP
          </Button>
          <p className="mt-6 text-xs text-gray-500 font-medium">
            Aplicável para empresas que já vendem e querem previsibilidade antes de escalar.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;