import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Check, X } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Por que não fazer isso sozinho ou contratar alguém interno?",
      answer: (
        <div className="space-y-6">
          <div className="bg-red-50 p-5 rounded-xl border border-red-100">
            <p className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span className="bg-red-200 text-red-800 text-xs px-2 py-0.5 rounded">Opção 1</span>
              Você PODE fazer sozinho. Mas:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                <span>Vai levar 6-12 meses pra testar, errar e acertar</span>
              </li>
              <li className="flex items-start gap-2">
                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                <span>Vai gastar R$ 15.000-30.000 em testes até descobrir o que funciona</span>
              </li>
              <li className="flex items-start gap-2">
                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                <span>Vai precisar aprender tráfego, copywriting, CRM, automação, análise de dados...</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
            <p className="font-bold text-orange-800 mb-3 flex items-center gap-2">
              <span className="bg-orange-200 text-orange-800 text-xs px-2 py-0.5 rounded">Opção 2</span>
              Ou você contrata alguém CLT:
            </p>
             <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold text-xs mt-0.5">→</span>
                <span>Custo fixo de R$ 3.500-5.000/mês</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold text-xs mt-0.5">→</span>
                <span>Essa pessoa NÃO tem experiência comprovada (vai testar no seu dinheiro)</span>
              </li>
              <li className="flex items-start gap-2">
                 <span className="text-orange-500 font-bold text-xs mt-0.5">→</span>
                <span>Se não funcionar, você tem vínculo empregatício</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-5 rounded-xl border border-green-100 shadow-sm">
            <p className="font-black text-green-900 mb-3 flex items-center gap-2">
               <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">Opção R1</span>
               Nós entregamos:
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-800">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                <span>Experiência comprovada</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                <span>Sistema testado e funcionando</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                <span>Sem vínculo (pode cancelar se não gostar)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                <span>Resultado em 60-90 dias (não 12 meses)</span>
              </li>
            </ul>
          </div>
          <p className="font-black text-brand-dark text-center">É investimento, não custo.</p>
        </div>
      )
    },
    {
      id: 2,
      question: "Por que vocês e não agência X, Y ou Z?",
      answer: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
             <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs border-b border-gray-200 pb-2">Agência Normal</h4>
             <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex gap-2">
                    <X size={16} className="text-red-400 shrink-0" />
                    Entrega "posts bonitos" e métricas vazias
                </li>
                 <li className="flex gap-2">
                    <X size={16} className="text-red-400 shrink-0" />
                    Não estrutura processo comercial (problema SEU)
                </li>
                 <li className="flex gap-2">
                    <X size={16} className="text-red-400 shrink-0" />
                    Atende 30-50 clientes (você é um número)
                </li>
                 <li className="flex gap-2">
                    <X size={16} className="text-red-400 shrink-0" />
                    Culpa "o mercado" quando não vende
                </li>
             </ul>
          </div>

          <div className="space-y-4 bg-brand-yellow/10 p-4 rounded-xl">
             <h4 className="font-bold text-brand-dark uppercase tracking-wider text-xs border-b border-brand-yellow/20 pb-2">R1 Resultados Digitais</h4>
             <ul className="space-y-3 text-sm text-brand-dark font-medium">
                <li className="flex gap-2">
                    <Check size={16} className="text-green-600 shrink-0" />
                    Entregamos VENDAS, não curtidas
                </li>
                 <li className="flex gap-2">
                    <Check size={16} className="text-green-600 shrink-0" />
                    Estruturamos TODO processo comercial (CRM, scripts)
                </li>
                 <li className="flex gap-2">
                    <Check size={16} className="text-green-600 shrink-0" />
                    No máximo 25 clientes por vez (atenção real)
                </li>
                 <li className="flex gap-2">
                    <Check size={16} className="text-green-600 shrink-0" />
                    Garantia de 90 dias
                </li>
             </ul>
             <div className="mt-4 pt-4 border-t border-brand-yellow/20 text-xs font-bold text-center">
                Simples: só ganhamos se você VENDER. <br/> Se você cancelar, nós perdemos.
             </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      question: "Quanto tempo até ver resultado?",
      answer: (
        <div className="relative border-l-2 border-brand-yellow ml-2 space-y-8 py-2">
            
            <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-yellow"></div>
                <h4 className="font-bold text-brand-dark">MÊS 1 (Setup + Estruturação)</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>→ Configuração completa do sistema</li>
                    <li>→ Primeiros leads começam a chegar</li>
                    <li>→ Equipe treinada e operando</li>
                </ul>
                <div className="mt-2 inline-block bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded">Resultado: 40-60% do potencial</div>
            </div>

            <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-yellow"></div>
                <h4 className="font-bold text-brand-dark">MÊS 2 (Otimização)</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>→ Ajustes baseados em dados reais</li>
                    <li>→ Criativos refinados</li>
                    <li>→ Processo comercial afinado</li>
                </ul>
                <div className="mt-2 inline-block bg-brand-yellow/20 text-brand-dark text-xs font-bold px-2 py-1 rounded">Resultado: 70-80% do potencial</div>
            </div>

            <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-yellow border-2 border-brand-dark shadow-[0_0_10px_#fccd19]"></div>
                <h4 className="font-black text-brand-dark">MÊS 3+ (Escala)</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>→ Sistema rodando no piloto automático</li>
                    <li>→ Taxa Conversão aumentada</li>
                    <li>→ ROI previsível e consistente</li>
                </ul>
                <div className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Resultado: 80-90% do potencial</div>
            </div>

        </div>
      )
    },
    {
      id: 5,
      question: "Vocês trabalham com qualquer segmento?",
      answer: (
        <div>
            <div className="text-center mb-6">
                <h4 className="text-3xl font-black text-brand-dark">NÃO.</h4>
                <p className="text-sm text-gray-500">Preferimos recusar do que entregar mal.</p>
            </div>
            
            <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-brand-yellow mb-4 border-b border-white/10 pb-2">
                    Trabalhamos APENAS com empresas que:
                </p>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                        <div className="mt-1 bg-white/10 p-1 rounded-full"><Check size={10} className="text-brand-yellow" /></div>
                        <span>Já vendem (não são startups sem produto validado)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 bg-white/10 p-1 rounded-full"><Check size={10} className="text-brand-yellow" /></div>
                        <span>Faturam no mínimo R$ 35.000/mês</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 bg-white/10 p-1 rounded-full"><Check size={10} className="text-brand-yellow" /></div>
                        <span>Têm budget de R$ 2.000+ pra investir em mídia</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 bg-white/10 p-1 rounded-full"><Check size={10} className="text-brand-yellow" /></div>
                        <span>Querem parceria de longo prazo (não "teste de 30 dias")</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-1 bg-white/10 p-1 rounded-full"><Check size={10} className="text-brand-yellow" /></div>
                        <span>Entendem que marketing é investimento, não custo</span>
                    </li>
                </ul>
            </div>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-brand-yellow/10 rounded-2xl mb-6 text-brand-dark border border-brand-yellow/20">
                <HelpCircle className="w-8 h-8 text-brand-yellow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark leading-tight">
                Perguntas Que Todo Empresário <br className="hidden md:block" /> Inteligente Faz
                <br/>
                <span className="text-brand-yellow">(E As Respostas Honestas)</span>
            </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
             const isOpen = openIndex === index;
             return (
            <div 
              key={faq.id} 
              className={`
                rounded-2xl border transition-all duration-300 overflow-hidden
                ${isOpen ? 'bg-white border-brand-yellow shadow-lg shadow-brand-yellow/10 ring-1 ring-brand-yellow/50' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'}
              `}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={`font-bold text-lg transition-colors pr-4 ${isOpen ? 'text-brand-dark' : 'text-gray-600'}`}>
                    {faq.question}
                </span>
                <div className={`
                    p-2 rounded-full transition-colors duration-300 shrink-0
                    ${isOpen ? 'bg-brand-yellow text-brand-dark rotate-180' : 'bg-gray-200 text-gray-400'}
                `}>
                    <ChevronDown size={20} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-dashed border-gray-100 bg-white">
                    <div className="pt-6">
                        {faq.answer}
                    </div>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;