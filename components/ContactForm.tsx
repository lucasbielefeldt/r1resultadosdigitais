import React, { useState } from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';
import Button from './Button';

interface ContactFormProps {
  variant?: 'default' | 'footer';
}

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'default' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-green-500/10 rounded-2xl border border-green-500/20 h-full min-h-[400px]">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
          <Check size={32} className="text-white" strokeWidth={3} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h3>
        <p className="text-gray-400">
          Nossa equipe de consultoria entrará em contato via WhatsApp em breve para agendar seu diagnóstico.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full bg-[#111] border border-neutral-800 text-white rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#fccd19] focus:ring-1 focus:ring-[#fccd19] transition-all placeholder:text-neutral-600";
  const labelClasses = "block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Nome Completo */}
      <div>
        <label htmlFor="name" className={labelClasses}>Nome Completo</label>
        <input 
          id="name"
          type="text" 
          placeholder="Ex: João Silva"
          required
          className={inputClasses}
        />
      </div>

      {/* WhatsApp / Telefone */}
      <div>
        <label htmlFor="phone" className={labelClasses}>WhatsApp / Telefone</label>
        <input 
          id="phone"
          type="tel" 
          placeholder="(11) 99999-9999"
          required
          className={inputClasses}
        />
      </div>

      {/* E-mail Profissional */}
      <div>
        <label htmlFor="email" className={labelClasses}>E-mail Profissional</label>
        <input 
          id="email"
          type="email" 
          placeholder="nome@suaempresa.com"
          required
          className={inputClasses}
        />
      </div>

      {/* Nome da Empresa */}
      <div>
        <label htmlFor="company" className={labelClasses}>Nome da Empresa</label>
        <input 
          id="company"
          type="text" 
          placeholder="Ex: R1 Digital"
          required
          className={inputClasses}
        />
      </div>

      {/* Checkbox Faturamento */}
      <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800 flex items-start gap-3 transition-colors hover:border-neutral-700">
        <input 
          id="revenue" 
          type="checkbox" 
          className="mt-1 w-5 h-5 rounded border-neutral-600 text-[#fccd19] focus:ring-[#fccd19] bg-neutral-800 cursor-pointer accent-[#fccd19]"
        />
        <label htmlFor="revenue" className="text-sm text-gray-300 cursor-pointer select-none">
          Minha empresa fatura acima de <span className="text-white font-bold">R$ 30.000,00/mês</span>
        </label>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isLoading}
        noPing={true} // Desativa o efeito de vibração forte
      >
        {isLoading ? (
          "Enviando..."
        ) : (
          "Receber Diagnóstico Estratégico"
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        Seus dados estão seguros. Não enviamos spam.
      </div>
    </form>
  );
};

export default ContactForm;