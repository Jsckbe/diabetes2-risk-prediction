import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import Benefits from '@/components/Benefits';
import ProcessSteps from '@/components/ProcessSteps';
import ContactForm from '@/components/ContactForm';
import UserRegistrationCTA from '@/components/UserRegistrationCTA';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactInfo from '@/components/ContactInfo';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center bg-background min-h-screen">
      <Navbar />
      
      <main className="w-full flex flex-col items-center">
        <Hero />
        
        <CTASection
          title="Evalúa tu riesgo de diabetes"
          description="Comienza tu evaluación y descubre tu nivel de riesgo de diabetes tipo 2 hoy mismo."
          primaryButtonText="Iniciar"
          secondaryButtonText="Ayuda"
          imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/5db2e4a05063f7a105194f6761ed70fddf2c23de?width=1200"
          imageAlt="Diabetes risk evaluation interface"
        />
        
        <Benefits />
        
        <ProcessSteps />
        
        <ContactForm />
        
        <UserRegistrationCTA />
        
        <Testimonials />
        
        <FAQ />
        
        <ContactInfo />
      </main>
    </div>
  );
};

export default Index;
