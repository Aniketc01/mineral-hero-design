
import React from 'react';
import { File, GitBranch, Calculator, Database, Clock, Shield, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-mineral-light to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/2ee75ed5-bc8c-4432-9065-2bb83454db6f.png" 
            alt="TitleMine Logo"
            className="h-20 md:h-24"
          />
        </div>
        
        {/* Problem Statement */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mineral-dark mb-8 leading-tight">
            A Broken, Outdated Process
          </h2>
          <p className="text-xl md:text-2xl text-mineral-dark/90 leading-relaxed">
            Repetitive clerical aspects of mineral title review are <span className="font-semibold">difficult to delegate</span>, <span className="font-semibold">time-consuming</span>, and <span className="font-semibold">error-prone</span>.
          </p>
        </div>

        {/* The Reality - Pain Points */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-mineral-brown text-center mb-10">
            The Reality?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GitBranch size={32} />,
                text: "Manually drawing flowchart shapes and transferring information from one document to another."
              },
              {
                icon: <Calculator size={32} />,
                text: "Tracking and calculating complex conveyances with no real-time automation."
              },
              {
                icon: <File size={32} />,
                text: "Moving data manually between runsheets, flowcharts, conveyance calculations, and reports."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-red-50 text-red-500 rounded-full">
                      {item.icon}
                    </div>
                    <p className="text-lg text-mineral-dark/80 leading-relaxed">
                      <span className="text-red-500 font-bold text-xl">❌</span> {item.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="flex items-center justify-center text-xl text-mineral-dark/90 font-medium">
              <Clock className="mr-2 text-mineral-dark" /> 
              <span>The result? <span className="italic font-semibold">Hours wasted, errors introduced, and a frustrating workflow.</span></span>
            </p>
          </div>
        </div>

        <Separator className="my-16 bg-mineral-gray/30 max-w-2xl mx-auto" />

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mineral-dark mb-8 leading-tight">
            A Smarter, More Efficient Platform
          </h2>
          <p className="text-xl md:text-2xl text-mineral-dark/90 leading-relaxed">
            Imagine a workflow where everything just works—no more tedious manual tasks, no more lost time.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-mineral-brown text-center mb-10">
            What We Offer:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <File size={28} />,
                title: "Smart "file-to-runsheet" links",
                text: "Instantly access the right information without digging through endless folders."
              },
              {
                icon: <GitBranch size={28} />,
                title: "Runsheet-to-flowchart automation",
                text: "Never draw a box or rewrite a date again. The system generates it for you."
              },
              {
                icon: <Calculator size={28} />,
                title: "Automated mineral rights calculations",
                text: "Instrument-based inputs ensure accuracy with real-time updates."
              },
              {
                icon: <Database size={28} />,
                title: "Customizable reports and opinions",
                text: "Auto-populated ownership reports, drilling opinions, and division orders – audit-ready."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="p-3 bg-green-50 text-green-600 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-semibold text-mineral-dark mb-3">
                        <span className="text-green-600 font-bold mr-2">✓</span> 
                        {item.title}
                      </h4>
                      <p className="text-lg text-mineral-dark/80 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-mineral-light rounded-xl p-10 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-mineral-dark text-center mb-10">
            Designed for Professionals Who Value Accuracy & Efficiency
          </h3>
          
          <p className="text-lg text-mineral-dark/80 text-center mb-10 leading-relaxed">
            Our platform isn't just another tool—it's a transformation for your workflow.
            It's time to move beyond error-prone manual processes and embrace a system that delivers:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock size={24} />,
                title: "Faster Reviews",
                text: "Automate tedious tasks and focus on decision-making."
              },
              {
                icon: <Shield size={24} />,
                title: "Fewer Errors",
                text: "Minimize human mistakes with AI-powered automation."
              },
              {
                icon: <BarChart size={24} />,
                title: "Better Insights",
                text: "Generate structured, audit-ready reports effortlessly."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-mineral-brown/10 text-mineral-brown rounded-full mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-mineral-dark mb-2">{item.title}</h4>
                <p className="text-mineral-dark/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
