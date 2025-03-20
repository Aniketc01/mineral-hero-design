
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
    </main>
  );
};

export default Index;
