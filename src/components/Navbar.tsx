import React from 'react';
import { Search, Sparkles, Box, Bookmark, CheckCircle2, Printer, Menu, X, ZoomIn, ZoomOut } from 'lucide-react';
import { ModelType } from './ThreeScene';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchTarget: 'all' | 'questions';
  onToggleSearchTarget: (target: 'all' | 'questions') => void;
  selectedFilter: 'all' | '2-marks' | '4-marks' | '9-marks' | 'bookmarked' | 'mastered';
  onFilterChange: (filter: 'all' | '2-marks' | '4-marks' | '9-marks' | 'bookmarked' | 'mastered') => void;
  onOpen3DModal: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  totalNotes: number;
  filteredCount: number;
  bookmarkedCount: number;
  masteredCount: number;
  progressPercent: number;
  fontSize: 'normal' | 'large' | 'compact';
  onCycleFontSize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  searchTarget,
  onToggleSearchTarget,
  selectedFilter,
  onFilterChange,
  onOpen3DModal,
  onToggleSidebar,
  isSidebarOpen,
  totalNotes,
  filteredCount,
  bookmarkedCount,
  masteredCount,
  progressPercent,
  fontSize,
  onCycleFontSize
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#FFD6E8] shadow-sm">
      {/* Pink Reading Progress Bar */}
      <div className="h-1.5 w-full bg-[#FFF0F6] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#FF4FA3] via-[#FF1493] to-[#B69CFF] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Left Brand & Sidebar Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-2xl bg-[#FFF0F6] hover:bg-[#FFD6E8] text-[#70204F] border border-[#FFD6E8] transition-all lg:hidden"
              title="Toggle Navigation Menu"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF4FA3] via-[#FF1493] to-[#FF8DC7] text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                🦷
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-['Fredoka'] font-bold text-base md:text-lg text-[#4B244A] leading-tight">
                  <span>BDS Crash Notes</span>
                  <span className="text-sm">🎀</span>
                </div>
                <div className="text-[11px] font-['Caveat'] text-[#FF1493] font-bold tracking-wide">
                  Barbiecore Dental Materials Studio ✨
                </div>
              </div>
            </a>
          </div>

          {/* Search Bar with Dedicated "Questions Only" Search Button */}
          <div className="flex-1 max-w-lg mx-2 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#FF4FA3] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={
                  searchTarget === 'questions'
                    ? "Search questions only (e.g. Creep, Luting, GIC)..."
                    : "Search all 83 topics, formulas, specs, gypsum, amalgam..."
                }
                className={`w-full pl-10 pr-9 py-2 text-xs md:text-sm rounded-2xl border transition-all text-[#4B244A] placeholder:text-[#70204F]/50 focus:outline-none focus:ring-2 ${
                  searchTarget === 'questions'
                    ? 'bg-[#FFF0F6] border-[#FF4FA3] focus:bg-white focus:ring-[#FF4FA3]/30 ring-1 ring-[#FF4FA3]/20'
                    : 'bg-[#FFF0F6]/80 hover:bg-[#FFF0F6] focus:bg-white border-[#FFD6E8] focus:border-[#FF4FA3] focus:ring-[#FFD6E8]'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-[#FF1493]"
                >
                  ×
                </button>
              )}
            </div>

            {/* Dedicated Question-Only Search Button */}
            <button
              type="button"
              onClick={() => onToggleSearchTarget(searchTarget === 'questions' ? 'all' : 'questions')}
              className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-xs border ${
                searchTarget === 'questions'
                  ? 'bg-gradient-to-r from-[#FF1493] to-[#FF4FA3] text-white border-transparent shadow-[#FF1493]/30 scale-102 ring-2 ring-[#FFD6E8]'
                  : 'bg-white hover:bg-[#FFF0F6] text-[#70204F] border-[#FFD6E8]'
              }`}
              title="Click to search only in Questions/Titles (answers will not be searched)"
            >
              <span className="text-xs">❓</span>
              <span className="hidden md:inline">Questions Only</span>
              <span className="md:hidden">Questions</span>
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* 3D Materials Studio Trigger */}
            <button
              onClick={onOpen3DModal}
              className="px-3 py-2 rounded-2xl bg-gradient-to-r from-[#FF4FA3] via-[#FF1493] to-[#B69CFF] text-white text-xs font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-1.5 active:scale-95"
              title="Open Interactive 3D Dental Materials Studio"
            >
              <Box className="w-4 h-4 animate-bounce" />
              <span className="hidden sm:inline">3D Studio</span>
            </button>

            {/* Font Size Toggle */}
            <button
              onClick={onCycleFontSize}
              className="p-2 rounded-2xl bg-[#FFF0F6] hover:bg-[#FFD6E8] text-[#70204F] border border-[#FFD6E8] transition-all hidden sm:flex items-center justify-center text-xs font-bold"
              title={`Change Text Size (Current: ${fontSize})`}
            >
              {fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A-'}
            </button>

            {/* Print Friendly Trigger */}
            <button
              onClick={() => window.print()}
              className="p-2 rounded-2xl bg-[#FFF0F6] hover:bg-[#FFD6E8] text-[#70204F] border border-[#FFD6E8] transition-all hidden md:flex items-center justify-center"
              title="Print Notes"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center justify-between gap-2 pt-2.5 overflow-x-auto scrollbar-none text-xs">
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onFilterChange('all')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#FF4FA3] text-white shadow-sm'
                  : 'bg-[#FFF0F6] text-[#70204F] hover:bg-[#FFD6E8]'
              }`}
            >
              All Topics ({totalNotes})
            </button>

            <button
              onClick={() => onFilterChange('2-marks')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                selectedFilter === '2-marks'
                  ? 'bg-[#FF4FA3] text-white shadow-sm'
                  : 'bg-[#FFF0F6] text-[#70204F] hover:bg-[#FFD6E8]'
              }`}
            >
              2 Marks (Recall)
            </button>

            <button
              onClick={() => onFilterChange('4-marks')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                selectedFilter === '4-marks'
                  ? 'bg-[#FF4FA3] text-white shadow-sm'
                  : 'bg-[#FFF0F6] text-[#70204F] hover:bg-[#FFD6E8]'
              }`}
            >
              4 Marks (Short Notes)
            </button>

            <button
              onClick={() => onFilterChange('9-marks')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                selectedFilter === '9-marks'
                  ? 'bg-[#FF1493] text-white shadow-sm'
                  : 'bg-[#FFF0F6] text-[#FF1493] hover:bg-[#FFD6E8]'
              }`}
            >
              9 Marks (Essays 🏆)
            </button>

            <button
              onClick={() => onFilterChange('bookmarked')}
              className={`px-2.5 py-1 rounded-xl font-bold transition-all flex items-center gap-1 ${
                selectedFilter === 'bookmarked'
                  ? 'bg-[#FF4FA3] text-white shadow-sm'
                  : 'bg-[#FFF0F6] text-[#70204F] hover:bg-[#FFD6E8]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Starred ({bookmarkedCount})</span>
            </button>

            <button
              onClick={() => onFilterChange('mastered')}
              className={`px-2.5 py-1 rounded-xl font-bold transition-all flex items-center gap-1 ${
                selectedFilter === 'mastered'
                  ? 'bg-[#10B981] text-white shadow-sm'
                  : 'bg-[#FFF0F6] text-[#10B981] hover:bg-[#D8F5E5]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mastered ({masteredCount})</span>
            </button>
          </div>

          <div className="text-[11px] font-bold text-[#FF1493] whitespace-nowrap hidden lg:block font-['Caveat'] text-sm">
            💖 {masteredCount} of {totalNotes} topics revised
          </div>
        </div>
      </div>
    </header>
  );
};
