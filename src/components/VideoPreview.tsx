
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface VideoPreviewProps {
  className?: string;
}

const VideoPreview = ({ className }: VideoPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden shadow-soft transition-all duration-300 transform group",
        isHovered ? "scale-[1.02]" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Placeholder for video thumbnail */}
      <div className="aspect-video bg-mineral-gray/30 rounded-xl overflow-hidden">
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-mineral-light to-white">
          <div className="text-center">
            <div 
              className={cn(
                "w-16 h-16 flex items-center justify-center rounded-full bg-mineral-brown/90 text-white mx-auto mb-4 transition-all duration-300 shadow-lg",
                isHovered ? "scale-110 bg-mineral-brown" : ""
              )}
            >
              <Play className="w-6 h-6 ml-1" />
            </div>
            <p className="text-mineral-dark/80 text-sm font-medium">Watch Demo</p>
          </div>
        </div>
      </div>
      
      {/* Overlay effect on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-mineral-brown/5 opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : ""
        )}
      ></div>
    </div>
  );
};

export default VideoPreview;
