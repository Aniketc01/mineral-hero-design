
import React from 'react';
import CTAButton from './CTAButton';
import VideoPreview from './VideoPreview';

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full relative hero-pattern overflow-hidden pt-32 pb-20">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-mineral-gold/5 to-mineral-gold/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-mineral-brown/5 to-mineral-brown/10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in lg:pr-6">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-mineral-brown/10 text-mineral-brown text-xs font-semibold tracking-wide">
                <span className="animate-pulse-subtle">NEW PLATFORM</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mineral-dark tracking-tight leading-tight">
                Transforming Mineral Reviews for <span className="text-mineral-brown">Title Attorneys</span>
              </h1>
            </div>
            
            <p className="text-lg text-mineral-dark/80 leading-relaxed max-w-xl">
              Our platform streamlines the mineral title review process, saving time and improving accuracy for title attorneys and land professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <CTAButton text="Join the Early Access Program" />
              <a href="#learn-more" className="inline-flex items-center text-mineral-brown font-medium hover:underline transition-all duration-300 group">
                Learn more
                <svg 
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-mineral-gray border-2 border-white flex items-center justify-center text-xs font-medium text-mineral-dark">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-mineral-dark/80">
                  <strong>200+</strong> title attorneys already joined
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Preview */}
          <div className="lg:pl-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <VideoPreview className="animate-float" />
            
            {/* Features List */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "Fast Processing", desc: "Speed up reviews by 70%" },
                { title: "AI-Powered", desc: "Smart document analysis" },
                { title: "Cloud Storage", desc: "Secure & accessible anywhere" },
                { title: "Easy Integration", desc: "Works with your tools" }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="glass-effect p-4 rounded-lg animate-scale-in hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                >
                  <h3 className="text-mineral-brown font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-mineral-dark/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
