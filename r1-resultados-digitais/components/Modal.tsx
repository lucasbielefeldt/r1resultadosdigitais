import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0f0f0f]">
          <h3 className="text-xl font-bold text-white">
            {title || "Agendar Diagnóstico"}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;