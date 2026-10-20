import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface MotivationalCardProps {
  quote: string;
  author?: string;
  variant?: 'pink' | 'lavender' | 'peach' | 'mint';
}

export const MotivationalCard: React.FC<MotivationalCardProps> = ({
  quote,
  author = 'BDS Study Energy',
  variant = 'pink'
}) => {
  const getGradient = () => {
    switch (variant) {
      case 'lavender':
        return 'from-[#FFF0F6] via-[#F3E8FF] to-[#E9DDFB] border-[#DCCBFF] text-[#4B244A]';
      case 'peach':
        return 'from-[#FFF0F6] via-[#FFE0D2]/40 to-[#FFE0D2] border-[#FFC7AF] text-[#70204F]';
      case 'mint':
        return 'from-[#FFF0F6] via-[#D8F5E5]/50 to-[#D8F5E5] border-[#A7F3D0] text-[#1E3A8A]';
      case 'pink':
      default:
        return 'from-[#FFF0F6] via-[#FFD6E8]/60 to-[#FFD6E8] border-[#FF4FA3]/30 text-[#70204F]';
    }
  };

  return (
    <div
      className={`my-8 p-5 rounded-3xl border-2 bg-gradient-to-r ${getGradient()} shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
    >
      {/* Decorative corner stickers */}
      <div className="absolute -top-3 -right-3 w-16 h-16 bg-white/40 rounded-full blur-xl pointer-events-none" />
      <div className="absolute top-2 right-4 text-2xl select-none opacity-80 animate-pulse">
        🌸
      </div>

      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl shrink-0 border border-[#FFD6E8]">
          🎀
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FF1493] mb-0.5">
            <Sparkles className="w-3.5 h-3.5 inline-block text-[#FF4FA3]" />
            <span>Powerpuff Study Boost</span>
            <Heart className="w-3 h-3 inline-block fill-[#FF1493] text-[#FF1493]" />
          </div>
          <p className="font-['Fredoka'] text-base md:text-lg font-medium text-[#4B244A] italic">
            "{quote}"
          </p>
          <span className="text-xs font-['Caveat'] text-[#70204F]/70 font-semibold block mt-0.5">
            — {author} 💅
          </span>
        </div>
      </div>
    </div>
  );
};
