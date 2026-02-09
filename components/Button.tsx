import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'black' | 'outline' | 'ghost'; 
  // Primary = Amarelo (Para fundos escuros)
  // Black = Preto (Para fundos claros)
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  noPing?: boolean; // Nova prop para remover o efeito de radar
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md', // Mantido para compatibilidade, mas o estilo base é robusto
  icon: Icon,
  className = '',
  children,
  disabled,
  noPing = false,
  ...props
}) => {
  
  // Configurações de cores baseadas na variante
  const isPrimary = variant === 'primary';
  const isBlack = variant === 'black';
  const isOutline = variant === 'outline';
  const isGhost = variant === 'ghost';

  // Classes Base do Container
  const baseClasses = "group relative isolate inline-flex items-center justify-center gap-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:pointer-events-none cursor-pointer";
  
  // Tamanhos (Ajuste fino no padding/texto)
  const sizeClasses = {
    sm: "px-6 py-3 text-sm", // Pequeno para detalhes
    md: "px-8 py-4 text-base md:text-lg", // Padrão: 32px Lat / 16px Vert
    lg: "px-8 py-4 text-lg md:text-xl",    // Mantém padding, aumenta texto
    xl: "px-8 py-4 text-xl"                // Mantém padding, aumenta texto
  };

  // Estilos Visuais
  let colorClasses = "";
  let glowColor = "";
  let iconBg = "";

  if (isPrimary) {
    // AMARELO (Para fundo Escuro)
    colorClasses = "bg-[#fccd19] text-black shadow-[0_0_30px_rgba(252,205,25,0.4)] hover:shadow-[0_0_60px_rgba(252,205,25,0.6)]";
    glowColor = "border-[#fccd19]";
    iconBg = "bg-black/10 group-hover:bg-black/20 text-black";
  } else if (isBlack) {
    // PRETO (Para fundo Claro)
    colorClasses = "bg-black text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(252,205,25,0.4)] ring-4 ring-black/5";
    glowColor = "border-black"; // Ping preto ou amarelo? Vamos de preto para contraste
    iconBg = "bg-white/10 group-hover:bg-white/20 text-white";
  } else if (isOutline) {
     colorClasses = "bg-transparent border-2 border-current text-current hover:bg-current hover:text-white/90";
  } else if (isGhost) {
     colorClasses = "bg-transparent text-current hover:bg-gray-100/10";
  }

  // Se for Outline ou Ghost, retornamos um botão mais simples para não quebrar layouts menores
  if (isOutline || isGhost) {
      return (
          <button className={`${baseClasses} ${sizeClasses[size || 'md']} ${colorClasses} ${className}`} disabled={disabled} {...props}>
              {children}
              {Icon && <Icon size={20} />}
          </button>
      )
  }

  // Botão "Ultimate" (Primary ou Black)
  return (
    <button 
      className={`
        ${baseClasses} 
        ${sizeClasses[size || 'md']} 
        ${colorClasses} 
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      
      {/* --- EFEITOS EXTERNOS --- */}
      {/* Anel de Radar (Ping) - Só aparece se não estiver desabilitado E se noPing for falso */}
      {!disabled && !noPing && (
        <span className={`absolute -inset-1 rounded-full border ${isBlack ? 'border-black/30' : 'border-[#fccd19]/60'} animate-ping opacity-75 -z-20`}></span>
      )}
      
      {/* Anel de Pulso constante - Mantém o pulso leve */}
      {!disabled && (
        <span className={`absolute -inset-0 rounded-full border-2 ${glowColor} animate-pulse -z-10`}></span>
      )}

      {/* --- EFEITOS INTERNOS (Clipped) --- */}
      <div className="absolute inset-0 rounded-full overflow-hidden -z-10">
        
        {/* Shine Passando */}
        <div className="absolute top-0 left-[-100%] h-full w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_infinite]" />

        {/* Slide Up Interaction */}
        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      
      </div>

      {/* --- CONTEÚDO --- */}
      <span className="font-black tracking-tight uppercase relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Icon Circle */}
      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors relative z-10 ${iconBg}`}>
        {disabled ? (
           <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
           Icon ? <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} /> : <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
        )}
      </div>

      <style>{`
        @keyframes shine {
          0% { left: -100%; opacity: 0; }
          15% { opacity: 0.5; }
          100% { left: 200%; opacity: 0; }
        }
      `}</style>
    </button>
  );
};

export default Button;