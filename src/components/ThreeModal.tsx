import React from 'react';
import { ThreeScene, ModelType } from './ThreeScene';
import { X, Sparkles } from 'lucide-react';

interface ThreeModalProps {
  isOpen: boolean;
  modelId: ModelType;
  onClose: () => void;
}

export const ThreeModal: React.FC<ThreeModalProps> = ({ isOpen, modelId, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#4B244A]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[88vh] max-h-[820px] bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFD6E8] flex flex-col">
        {/* Top Header bar */}
        <div className="p-4 bg-gradient-to-r from-[#FFD6E8] via-[#FFF0F6] to-[#E9DDFB] border-b-2 border-[#FFD6E8] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎀</span>
            <div>
              <h2 className="font-['Fredoka'] font-bold text-[#4B244A] text-base md:text-lg leading-tight flex items-center gap-1.5">
                <span>3D Dental Materials Studio</span>
                <Sparkles className="w-4 h-4 text-[#FF1493]" />
              </h2>
              <p className="text-xs text-[#70204F]/80">
                Interactive procedural 3D models with exploded-view anatomy & PBR reflections
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#FFD6E8] text-[#70204F] border border-[#FFD6E8] flex items-center justify-center transition-all shadow-sm active:scale-95"
            title="Close 3D Studio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Scene Viewport */}
        <div className="flex-1 relative w-full h-full overflow-hidden">
          <ThreeScene initialModel={modelId} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
