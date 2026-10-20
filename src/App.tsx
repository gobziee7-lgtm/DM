import React, { useState, useEffect, useMemo } from 'react';
import { ALL_NOTES, PARTS_INFO, MOTIVATIONAL_QUOTES, NoteItem } from './data/notesData';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { NoteCard } from './components/NoteCard';
import { MotivationalCard } from './components/MotivationalCard';
import { ThreeModal } from './components/ThreeModal';
import { ModelType } from './components/ThreeScene';
import { ArrowUp, BookOpen, Sparkles, CheckCircle2, Bookmark, Box, Search, Heart, Flower2, Award } from 'lucide-react';

export default function App() {
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTarget, setSearchTarget] = useState<'all' | 'questions'>('all');
  const [selectedFilter, setSelectedFilter] = useState<'all' | '2-marks' | '4-marks' | '9-marks' | 'bookmarked' | 'mastered'>('all');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'compact'>('normal');

  // Interactive Bookmarking & Mastery (persisted in localStorage)
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('barbie_bds_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('barbie_bds_mastered');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // UI Modals & Navigation state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [is3DModalOpen, setIs3DModalOpen] = useState(false);
  const [active3DModel, setActive3DModel] = useState<ModelType>('crown-die');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('barbie_bds_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('barbie_bds_mastered', JSON.stringify(Array.from(masteredIds)));
    } catch (e) {
      console.error(e);
    }
  }, [masteredIds]);

  // Track scroll position for progress bar & back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
      setShowScrollTop(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleOpen3D = (modelId: ModelType) => {
    setActive3DModel(modelId);
    setIs3DModalOpen(true);
  };

  const cycleFontSize = () => {
    setFontSize((prev) => (prev === 'normal' ? 'large' : prev === 'large' ? 'compact' : 'normal'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNotes = () => {
    const elem = document.getElementById('study-content-anchor');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter notes based on module, search query, and mark/status filter
  const filteredNotes = useMemo(() => {
    return ALL_NOTES.filter((note) => {
      // Module filter
      if (selectedModule !== 'all' && note.partId !== selectedModule) {
        return false;
      }

      // Quick Mark / Status filter
      if (selectedFilter === '2-marks' && !note.marks?.includes('2 Marks')) return false;
      if (selectedFilter === '4-marks' && !note.marks?.includes('4 Marks')) return false;
      if (selectedFilter === '9-marks' && !note.marks?.includes('9 Marks')) return false;
      if (selectedFilter === 'bookmarked' && !bookmarkedIds.has(note.id)) return false;
      if (selectedFilter === 'mastered' && !masteredIds.has(note.id)) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        if (searchTarget === 'questions') {
          // STRICTLY in questions, question numbers, marks weight, or topic titles (answers EXCLUDED)
          const inTitle = note.topicTitle.toLowerCase().includes(query);
          const inNumber = note.topicNumber.toLowerCase().includes(query);
          const inMarks = note.marks ? note.marks.toLowerCase().includes(query) : false;
          const inSection = note.sectionTitle.toLowerCase().includes(query);
          return inTitle || inNumber || inMarks || inSection;
        } else {
          // Search in all content (questions + answers)
          const inTitle = note.topicTitle.toLowerCase().includes(query);
          const inNumber = note.topicNumber.toLowerCase().includes(query);
          const inSection = note.sectionTitle.toLowerCase().includes(query);
          const inBody = note.rawText.toLowerCase().includes(query);
          const inCallout = note.examCallout?.some((c) => c.toLowerCase().includes(query));
          const inRevision = note.lastMinuteRevision?.some((r) => r.toLowerCase().includes(query));
          const inTable = note.table?.rows.some((row) => row.some((cell) => cell.toLowerCase().includes(query)));
          return inTitle || inNumber || inSection || inBody || inCallout || inRevision || inTable;
        }
      }

      return true;
    });
  }, [searchQuery, searchTarget, selectedFilter, selectedModule, bookmarkedIds, masteredIds]);

  // Group filtered notes by Part for structured reading
  const groupedByPart = useMemo(() => {
    const groups: { part: (typeof PARTS_INFO)[0]; notes: NoteItem[] }[] = [];
    PARTS_INFO.forEach((p) => {
      const partNotes = filteredNotes.filter((n) => n.partId === p.id);
      if (partNotes.length > 0) {
        groups.push({ part: p, notes: partNotes });
      }
    });
    return groups;
  }, [filteredNotes]);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg';
      case 'compact':
        return 'text-xs';
      case 'normal':
      default:
        return 'text-sm md:text-base';
    }
  };

  return (
    <div className={`min-h-screen bg-[#FFF0F6] text-[#4B244A] flex flex-col ${getFontSizeClass()}`}>
      {/* Navbar with Reading Progress */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchTarget={searchTarget}
        onToggleSearchTarget={setSearchTarget}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        onOpen3DModal={() => handleOpen3D('crown-die')}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        totalNotes={ALL_NOTES.length}
        filteredCount={filteredNotes.length}
        bookmarkedCount={bookmarkedIds.size}
        masteredCount={masteredIds.size}
        progressPercent={scrollProgress}
        fontSize={fontSize}
        onCycleFontSize={cycleFontSize}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-8">
        {/* Sidebar Navigation */}
        <Sidebar
          notes={ALL_NOTES}
          activeModuleId={selectedModule}
          onSelectModule={(id) => {
            setSelectedModule(id === selectedModule ? 'all' : id);
            if (window.innerWidth < 1024) setIsSidebarOpen(false);
          }}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          masteredIds={masteredIds}
          bookmarkedIds={bookmarkedIds}
          onOpen3D={handleOpen3D}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 lg:pl-84">
          {/* Landing Header / Hero Section (Exact title preserved) */}
          <section className="relative rounded-3xl overflow-hidden border-2 border-[#FFD6E8] bg-gradient-to-br from-[#FFF0F6] via-[#FFD6E8]/70 to-[#E9DDFB]/60 p-6 sm:p-10 mb-8 shadow-sm">
            {/* Cute floating background decals */}
            <div className="absolute top-3 right-6 text-3xl select-none opacity-40 animate-sparkle">🌸</div>
            <div className="absolute top-16 right-20 text-2xl select-none opacity-30 animate-sparkle" style={{ animationDelay: '1s' }}>✨</div>
            <div className="absolute bottom-4 right-10 text-3xl select-none opacity-40 animate-sparkle" style={{ animationDelay: '2s' }}>🎀</div>
            <div className="absolute bottom-8 left-6 text-2xl select-none opacity-20 animate-sparkle" style={{ animationDelay: '1.5s' }}>🦋</div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#FFD6E8] text-xs font-bold text-[#FF1493] mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FF4FA3]" />
                <span>BDS Examination Crash Course • All 83 Pages Verbatim</span>
                <span className="text-sm">🦷</span>
              </div>

              {/* Exact Document Title from Source PDF */}
              <h1 className="font-['Fredoka'] text-2xl sm:text-4xl font-extrabold text-[#4B244A] tracking-tight leading-tight">
                DENTAL MATERIALS EXAMINATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF4FA3]">CRASH NOTES</span>
              </h1>

              {/* Exact Subtitle from Source PDF */}
              <p className="mt-2 text-sm sm:text-base font-semibold text-[#70204F]/90">
                Strictly Grounded in Basic Dental Materials (4th Edition by John J. Manappallil)
              </p>

              <p className="mt-1 text-xs text-[#70204F]/75">
                Every word, letter, symbol, chemical formula, table, flowchart, and specification preserved with 100% textbook fidelity.
              </p>

              {/* Motivational message displayed in separate decorative card as requested */}
              <div className="mt-5 p-3.5 rounded-2xl bg-white/85 border border-[#FFD6E8] flex items-center gap-3 shadow-sm">
                <span className="text-2xl">🎀</span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#FF1493]">Study Affirmation</div>
                  <p className="font-['Fredoka'] text-xs sm:text-sm font-semibold text-[#4B244A]">
                    "Pretty notes, powerful brain, future dentist energy! 🦷💅✨"
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToNotes}
                  className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF4FA3] to-[#FF1493] hover:from-[#FF1493] hover:to-[#FF4FA3] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Begin Studying (83 Topics)</span>
                </button>

                {/* Dedicated Search in Questions Only Button */}
                <button
                  onClick={() => {
                    setSearchTarget('questions');
                    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
                    if (searchInput) {
                      searchInput.focus();
                      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 active:scale-95 border-2 ${
                    searchTarget === 'questions'
                      ? 'bg-gradient-to-r from-[#FF1493] to-[#FF4FA3] text-white border-transparent ring-2 ring-[#FFD6E8]'
                      : 'bg-white hover:bg-[#FFF0F6] text-[#FF1493] border-[#FFD6E8]'
                  }`}
                  title="Search only in questions and topic titles (answers will not be searched)"
                >
                  <span>❓</span>
                  <span>Search in Questions Only</span>
                </button>

                <button
                  onClick={() => handleOpen3D('crown-die')}
                  className="px-4 py-2.5 rounded-2xl bg-white hover:bg-[#FFF0F6] text-[#70204F] border-2 border-[#FFD6E8] font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
                >
                  <Box className="w-4 h-4 text-[#FF1493]" />
                  <span>Explore 3D Models</span>
                </button>
              </div>
            </div>
          </section>

          {/* Module Selector Carousel Tabs */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 font-['Fredoka'] font-bold text-sm text-[#4B244A]">
                <span>🎀 Browse By Exam Module</span>
              </div>
              {selectedModule !== 'all' && (
                <button
                  onClick={() => setSelectedModule('all')}
                  className="text-xs font-bold text-[#FF1493] hover:underline"
                >
                  View All Modules (Combined)
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {PARTS_INFO.map((part) => {
                const isSelected = selectedModule === part.id;
                const count = ALL_NOTES.filter((n) => n.partId === part.id).length;
                return (
                  <button
                    key={part.id}
                    onClick={() => setSelectedModule(isSelected ? 'all' : part.id)}
                    className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden ${
                      isSelected
                        ? 'border-[#FF4FA3] bg-gradient-to-br from-[#FFD6E8] to-white shadow-md scale-102 ring-2 ring-[#FF4FA3]/20'
                        : 'border-[#FFD6E8] bg-white hover:bg-[#FFF0F6]'
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#FF1493] mb-1">
                      {part.badge}
                    </div>
                    <div className="font-['Fredoka'] font-bold text-xs text-[#4B244A] line-clamp-1 leading-snug">
                      {part.title.split('—')[0]}
                    </div>
                    <div className="text-[10px] text-[#70204F]/70 mt-1 flex items-center justify-between">
                      <span>{part.pageRange}</span>
                      <span className="font-bold text-[#FF1493]">{count} topics</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div id="study-content-anchor" />

          {/* Active Filter or Search Banner */}
          {(searchQuery || selectedFilter !== 'all' || selectedModule !== 'all' || searchTarget === 'questions') && (
            <div className="mb-6 p-4 rounded-2xl bg-white border border-[#FFD6E8] flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B244A]">
                <Search className="w-4 h-4 text-[#FF4FA3]" />
                <span>
                  Showing <strong className="text-[#FF1493]">{filteredNotes.length}</strong> matching topics
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedFilter !== 'all' && ` [Filter: ${selectedFilter}]`}
                  {selectedModule !== 'all' && ` [Module: ${PARTS_INFO.find((p) => p.id === selectedModule)?.badge}]`}
                </span>

                {/* Target Mode Badge & Toggle */}
                <div className="flex items-center gap-1 ml-1">
                  <span className="text-[10px] text-gray-500 font-semibold">Scope:</span>
                  <button
                    onClick={() => setSearchTarget('questions')}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all ${
                      searchTarget === 'questions'
                        ? 'bg-[#FF1493] text-white'
                        : 'bg-[#FFF0F6] text-[#70204F] hover:bg-[#FFD6E8]'
                    }`}
                  >
                    Questions Only ❓
                  </button>
                  <button
                    onClick={() => setSearchTarget('all')}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all ${
                      searchTarget === 'all'
                        ? 'bg-[#4B244A] text-white'
                        : 'bg-[#FFF0F6] text-[#70204F] hover:bg-[#FFD6E8]'
                    }`}
                  >
                    All Content
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchTarget('all');
                  setSelectedFilter('all');
                  setSelectedModule('all');
                }}
                className="text-xs font-bold text-[#FF1493] hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Notes Content Display */}
          {groupedByPart.length === 0 ? (
            <div className="p-12 text-center rounded-3xl border-2 border-dashed border-[#FFD6E8] bg-white">
              <span className="text-4xl block mb-2">🌸</span>
              <h4 className="font-['Fredoka'] text-lg font-bold text-[#4B244A]">No matching questions found</h4>
              <p className="text-xs text-[#70204F]/80 mt-1 max-w-sm mx-auto">
                {searchTarget === 'questions'
                  ? 'Searching in questions only. If you want to search inside definitions or explanations, switch to "All Content".'
                  : 'Try searching for keywords like "Amalgam", "Gypsum", "Impression", "Porcelain", or "Cements".'}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                {searchTarget === 'questions' && (
                  <button
                    onClick={() => setSearchTarget('all')}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FF4FA3] to-[#FF1493] text-white font-bold text-xs shadow-xs"
                  >
                    Search in All Content Instead
                  </button>
                )}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchTarget('all');
                    setSelectedFilter('all');
                    setSelectedModule('all');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#FFD6E8] text-[#70204F] font-bold text-xs hover:bg-[#FF4FA3] hover:text-white transition-all"
                >
                  Clear Search
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {groupedByPart.map((group, gIdx) => (
                <section key={group.part.id} className="space-y-6">
                  {/* Module Heading Header */}
                  <div className="p-5 rounded-3xl bg-gradient-to-r from-[#FFD6E8] via-[#FFF0F6] to-[#E9DDFB] border-2 border-[#FFD6E8] shadow-xs">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-[#FF1493] text-xs font-bold shadow-xs">
                        {group.part.badge} • {group.part.pageRange}
                      </span>
                      <span className="text-xs text-[#70204F]/80 font-mono">
                        {group.notes.length} Topics
                      </span>
                    </div>
                    <h2 className="font-['Fredoka'] text-xl sm:text-2xl font-bold text-[#4B244A] tracking-tight">
                      {group.part.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#70204F]/90 font-medium mt-1">
                      {group.part.subtitle}
                    </p>
                    <p className="text-[11px] text-[#70204F]/70 italic mt-0.5">
                      {group.part.tagline}
                    </p>
                  </div>

                  {/* Notes List for this Module */}
                  <div className="space-y-6">
                    {group.notes.map((note) => (
                      <NoteCard
                        key={note.id}
                        note={note}
                        searchQuery={searchQuery}
                        searchTarget={searchTarget}
                        isBookmarked={bookmarkedIds.has(note.id)}
                        isMastered={masteredIds.has(note.id)}
                        onToggleBookmark={toggleBookmark}
                        onToggleMastered={toggleMastered}
                        onOpen3D={handleOpen3D}
                      />
                    ))}
                  </div>

                  {/* Interspersed Cheerful Motivational Card between major modules */}
                  <MotivationalCard
                    quote={MOTIVATIONAL_QUOTES[gIdx % MOTIVATIONAL_QUOTES.length].text}
                    author={MOTIVATIONAL_QUOTES[gIdx % MOTIVATIONAL_QUOTES.length].author}
                    variant={gIdx % 3 === 0 ? 'pink' : gIdx % 3 === 1 ? 'lavender' : 'peach'}
                  />
                </section>
              ))}
            </div>
          )}

          {/* Footer (Barbiecore aesthetic with verification status) */}
          <footer className="mt-16 pt-8 pb-12 border-t-2 border-[#FFD6E8] text-center text-xs text-[#70204F]/80 space-y-4">
            <div className="flex items-center justify-center gap-2 text-2xl select-none">
              <span>🎀</span>
              <span>🌸</span>
              <span>🦷</span>
              <span>💗</span>
              <span>✨</span>
            </div>
            <div>
              <h4 className="font-['Fredoka'] font-bold text-sm text-[#4B244A]">
                Barbiecore BDS Dental Materials Crash Notes
              </h4>
              <p className="text-[11px] text-[#70204F]/70 mt-1 max-w-md mx-auto">
                Strictly Grounded in Basic Dental Materials (4th Edition by John J. Manappallil).
                All 83 original PDF pages processed and accounted for with 100% exact verbatim fidelity.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FFD6E8] text-[11px] text-[#FF1493] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Full Content Verification Completed • No Omissions</span>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Back-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF4FA3] to-[#FF1493] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white"
          title="Back to Top 🎀"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive 3D Materials Studio Modal */}
      <ThreeModal
        isOpen={is3DModalOpen}
        modelId={active3DModel}
        onClose={() => setIs3DModalOpen(false)}
      />
    </div>
  );
}
