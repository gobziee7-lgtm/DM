import React from 'react';
import { PARTS_INFO, NoteItem } from '../data/notesData';
import { BookOpen, Sparkles, ChevronRight, CheckCircle2, Bookmark, Box } from 'lucide-react';
import { ModelType } from './ThreeScene';

interface SidebarProps {
  notes: NoteItem[];
  activeModuleId: string;
  onSelectModule: (moduleId: string) => void;
  isOpen: boolean;
  onClose: () => void;
  masteredIds: Set<string>;
  bookmarkedIds: Set<string>;
  onOpen3D: (modelId: ModelType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  notes,
  activeModuleId,
  onSelectModule,
  isOpen,
  onClose,
  masteredIds,
  bookmarkedIds,
  onOpen3D
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-[#4B244A]/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-[110px] bottom-0 left-0 w-80 bg-white/95 backdrop-blur-md border-r-2 border-[#FFD6E8] z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-[#FFD6E8] bg-gradient-to-r from-[#FFF0F6] to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎀</span>
              <h2 className="font-['Fredoka'] font-bold text-sm text-[#4B244A]">
                Course Navigation
              </h2>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FFD6E8] text-[#70204F]">
              6 Modules
            </span>
          </div>
          <p className="text-[11px] text-[#70204F]/70 mt-1">
            Basic Dental Materials • 4th Edition
          </p>
        </div>

        {/* 3D Visual Models Quick Access in Sidebar */}
        <div className="p-3 bg-[#FFF0F6]/80 border-b border-[#FFD6E8]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF1493] flex items-center gap-1 mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Interactive 3D Explanations</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <button
              onClick={() => onOpen3D('crown-die')}
              className="p-1.5 rounded-xl bg-white border border-[#FFD6E8] hover:bg-[#FFD6E8] text-[#70204F] text-left font-semibold truncate transition-all"
            >
              👑 Crown & Die
            </button>
            <button
              onClick={() => onOpen3D('dental-implant')}
              className="p-1.5 rounded-xl bg-white border border-[#FFD6E8] hover:bg-[#FFD6E8] text-[#70204F] text-left font-semibold truncate transition-all"
            >
              🔩 Titanium Implant
            </button>
            <button
              onClick={() => onOpen3D('cavity-sandwich')}
              className="p-1.5 rounded-xl bg-white border border-[#FFD6E8] hover:bg-[#FFD6E8] text-[#70204F] text-left font-semibold truncate transition-all"
            >
              🥪 Sandwich Technique
            </button>
            <button
              onClick={() => onOpen3D('flame-zones')}
              className="p-1.5 rounded-xl bg-white border border-[#FFD6E8] hover:bg-[#FFD6E8] text-[#70204F] text-left font-semibold truncate transition-all"
            >
              🔥 Flame Zones
            </button>
          </div>
        </div>

        {/* Modules & Topics List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {PARTS_INFO.map((part) => {
            const partNotes = notes.filter((n) => n.partId === part.id);
            const masteredCount = partNotes.filter((n) => masteredIds.has(n.id)).length;
            const isSelected = activeModuleId === part.id;

            return (
              <div
                key={part.id}
                className={`rounded-2xl border transition-all ${
                  isSelected
                    ? 'border-[#FF4FA3] bg-[#FFF0F6]/90 shadow-sm'
                    : 'border-[#FFD6E8] bg-white hover:border-[#FF4FA3]/40'
                }`}
              >
                {/* Module Header Card */}
                <button
                  onClick={() => onSelectModule(part.id)}
                  className="w-full p-3 text-left flex items-start justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FFD6E8] text-[#70204F]">
                        {part.badge}
                      </span>
                      <span className="text-[10px] text-gray-500">{part.pageRange}</span>
                    </div>
                    <h3 className="font-['Fredoka'] text-xs font-bold text-[#4B244A] line-clamp-1 leading-snug">
                      {part.title}
                    </h3>
                    <p className="text-[11px] text-[#70204F]/80 line-clamp-1 mt-0.5">
                      {part.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-[10px] font-mono font-bold text-[#FF1493] block">
                      {masteredCount}/{partNotes.length}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-gray-400 mt-1 transition-transform ${
                        isSelected ? 'rotate-90 text-[#FF4FA3]' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Topics in this module if selected */}
                {isSelected && (
                  <div className="px-3 pb-3 pt-1 border-t border-[#FFD6E8]/70 space-y-1 max-h-64 overflow-y-auto pr-1">
                    {partNotes.map((note) => {
                      const isMastered = masteredIds.has(note.id);
                      const isBookmarked = bookmarkedIds.has(note.id);
                      return (
                        <a
                          key={note.id}
                          href={`#topic-${note.id}`}
                          onClick={() => {
                            if (window.innerWidth < 1024) onClose();
                          }}
                          className="flex items-center justify-between p-1.5 rounded-xl text-xs hover:bg-white text-[#70204F] transition-all group"
                        >
                          <span className="truncate pr-2 font-medium">
                            <span className="text-[#FF4FA3] mr-1">{note.topicNumber}.</span>
                            {note.topicTitle}
                          </span>
                          <div className="flex items-center gap-1 shrink-0">
                            {note.has3DModel && <span className="text-[10px]">✨3D</span>}
                            {isBookmarked && <span className="text-[10px]">⭐</span>}
                            {isMastered && <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Girly Footer Motivation */}
        <div className="p-3 border-t border-[#FFD6E8] bg-gradient-to-t from-[#FFF0F6] to-white text-center">
          <p className="text-xs font-['Caveat'] text-[#FF1493] font-bold">
            🌸 "Study hard, smile brighter, Dr. Queen!" 🎀
          </p>
        </div>
      </aside>
    </>
  );
};
