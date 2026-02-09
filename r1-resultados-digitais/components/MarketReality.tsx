import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeftRight, MessageCircleQuestion, Coins } from 'lucide-react';

const MarketReality: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const cards = [
    {
      icon: <ArrowLeftRight className="w-8 h-8 text-brand-dark" />,
      title: "Lead entra e compara preço",
      desc: "Sem diferenciação, você vira commodity."
    },
    {
      icon: <MessageCircleQuestion className="w-8 h-8 text-brand-dark" />,
      title: "WhatsApp recebe curioso",
      desc: "Sua equipe perde tempo filtrando quem não compra."
    },
    {
      icon: <Coins className="w-8 h-8 text-brand-dark" />,
      title: "Tráfego acelera o desperdício",
      desc: "Mais verba no erro só aumenta o prejuízo."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                Cenário Atual
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mt-2">
                A realidade da sua operação hoje
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`
                bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
                transform transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-brand-yellow/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketReality;