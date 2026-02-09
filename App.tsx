import React, { useState } from 'react';
import Hero from './components/Hero';
import ProblemAwareness from './components/ProblemAwareness';
import BuyerJourney from './components/BuyerJourney';
import FeatureCarousel from './components/FeatureCarousel';
import QualifiedDemand from './components/QualifiedDemand';
import CommercialTransformation from './components/CommercialTransformation';
import LtvSection from './components/LtvSection';
import FAQSection from './components/FAQSection';
import DiagnosisCTA from './components/DiagnosisCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <ProblemAwareness onOpenModal={openModal} />
      <BuyerJourney />
      <FeatureCarousel />
      <QualifiedDemand onOpenModal={openModal} />
      <CommercialTransformation onOpenModal={openModal} />
      <LtvSection onOpenModal={openModal} />
      <FAQSection />
      <DiagnosisCTA onOpenModal={openModal} />
      <Footer />

      {/* Global Lead Capture Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Diagnóstico Estratégico">
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            Preencha os dados abaixo para que nossa equipe prepare um levantamento prévio do seu cenário antes da reunião.
          </p>
        </div>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default App;