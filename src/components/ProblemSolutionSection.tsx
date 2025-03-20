
import React from 'react';
import { File, FlowChart, Calculator, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-mineral-light">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mineral-dark mb-6 leading-tight">
            Repetitive clerical aspects of mineral title review are hard to delegate to clerical support.
          </h2>
          <p className="text-xl text-mineral-dark/80">
            <strong className="font-semibold">This is inefficient, prone to error, and not a fun part of the job.</strong>
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Manual Processes Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-mineral-brown">Manual Processes</h3>
            
            <ul className="space-y-6">
              {[
                {
                  icon: <FlowChart className="text-mineral-brown" />,
                  text: "Manually drawing flowchart shapes and copying over information"
                },
                {
                  icon: <Calculator className="text-mineral-brown" />,
                  text: "Manually tracking and calculating complex conveyances"
                },
                {
                  icon: <File className="text-mineral-brown" />,
                  text: "Manually moving document details from runsheets, to flowcharts, to conveyance calculations, to reports"
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1 p-2 bg-mineral-brown/10 rounded-md">
                    {item.icon}
                  </div>
                  <p className="text-lg text-mineral-dark/80">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Overview Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-mineral-brown">Our Solution</h3>
            
            <p className="text-lg text-mineral-dark/80 leading-relaxed">
              We take the tedious work out of mineral title review with a comprehensive platform that integrates all aspects of the mineral title review workflow (while leaving every step easily auditable):
            </p>
            
            <ol className="space-y-6 list-none">
              {[
                {
                  icon: <File className="text-mineral-brown" />,
                  text: "Smart "file-to-runsheet" links that take you to the information you need – stop digging through folders and files"
                },
                {
                  icon: <FlowChart className="text-mineral-brown" />,
                  text: "Smart "runsheet-to-flowchart" shape generation – Never draw a box or rewrite a date again"
                },
                {
                  icon: <Calculator className="text-mineral-brown" />,
                  text: "Instrument-based mineral rights conveyance inputs and automated calculations are accessible from the flowchart shapes"
                },
                {
                  icon: <Database className="text-mineral-brown" />,
                  text: "Customizable and auto-populated first draft mineral ownership reports, drilling opinions, and division orders"
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-mineral-brown text-white flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 p-2 bg-mineral-brown/10 rounded-md flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-lg text-mineral-dark/80">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
