import React from 'react';
import { NoteItem } from '../data/notesData';
import { Bookmark, CheckCircle2, Copy, Check, Box, Pin, Zap, ArrowRight } from 'lucide-react';
import { ModelType } from './ThreeScene';

interface NoteCardProps {
  note: NoteItem;
  searchQuery?: string;
  searchTarget?: 'all' | 'questions';
  isBookmarked: boolean;
  isMastered: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleMastered: (id: string) => void;
  onOpen3D: (modelId: ModelType) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({
  note,
  searchQuery = '',
  searchTarget = 'all',
  isBookmarked,
  isMastered,
  onToggleBookmark,
  onToggleMastered,
  onOpen3D
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${note.topicNumber}. ${note.topicTitle} (${note.marks || ''})\n\n${note.rawText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe search highlight without altering stored text
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-[#FF4FA3]/30 text-[#70204F] font-bold px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Only highlight answers/body text when search is in 'all' mode, not when searching questions only
  const highlightAnswer = (text: string) => {
    if (searchTarget === 'questions') return text;
    return highlightText(text);
  };

  // Get marks badge style
  const getMarkBadge = () => {
    if (!note.marks) return null;
    if (note.marks.includes('9 Marks')) {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-[#FF1493] to-[#FF4FA3] text-white shadow-sm">
          🏆 {note.marks}
        </span>
      );
    }
    if (note.marks.includes('4 Marks')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E9DDFB] text-[#4B244A] border border-[#DCCBFF]">
          💗 {note.marks}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFF0F6] text-[#FF4FA3] border border-[#FFD6E8]">
        ✨ {note.marks}
      </span>
    );
  };

  return (
    <article
      id={`topic-${note.id}`}
      className={`scroll-mt-24 rounded-3xl border-2 transition-all duration-300 p-5 md:p-7 relative bg-white/95 shadow-sm hover:shadow-md ${
        isMastered
          ? 'border-[#A7F3D0] bg-[#F0FDF4]/30'
          : isBookmarked
          ? 'border-[#FF4FA3] shadow-[#FFD6E8]/50'
          : 'border-[#FFD6E8] hover:border-[#FF4FA3]/40'
      }`}
    >
      {/* Decorative top ribbon badge on 9 marks */}
      {note.marks?.includes('9 Marks') && (
        <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-[#FF1493] via-[#FF4FA3] to-[#B69CFF] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
          <span>🎀 HIGH-YIELD ESSAY MASTERPIECE 🎀</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-[#FFD6E8]/70">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-xs font-bold font-['Caveat'] text-[#FF1493] px-2 py-0.5 rounded-lg bg-[#FFF0F6]">
              Section {note.sectionNumber}: {note.sectionTitle}
            </span>
            {getMarkBadge()}
          </div>
          <h3 className="font-['Fredoka'] text-xl md:text-2xl font-bold text-[#4B244A] tracking-tight leading-snug">
            <span className="text-[#FF4FA3] mr-2">{note.topicNumber}.</span>
            {highlightText(note.topicTitle)}
          </h3>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* 3D Model Launcher if available */}
          {note.has3DModel && (
            <button
              onClick={() => onOpen3D(note.has3DModel as ModelType)}
              className="px-3 py-1.5 rounded-2xl bg-gradient-to-r from-[#FF4FA3] to-[#FF1493] text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center gap-1.5 active:scale-95"
              title="Inspect 3D Anatomical / Materials Model"
            >
              <Box className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inspect in 3D</span>
              <span className="sm:hidden">3D</span>
            </button>
          )}

          {/* Mastered Checkmark */}
          <button
            onClick={() => onToggleMastered(note.id)}
            className={`p-2 rounded-2xl transition-all border ${
              isMastered
                ? 'bg-[#10B981] text-white border-transparent shadow-sm'
                : 'bg-white hover:bg-[#FFF0F6] text-gray-400 border-[#FFD6E8]'
            }`}
            title={isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}
          >
            <CheckCircle2 className="w-4 h-4" />
          </button>

          {/* Bookmark Toggle */}
          <button
            onClick={() => onToggleBookmark(note.id)}
            className={`p-2 rounded-2xl transition-all border ${
              isBookmarked
                ? 'bg-[#FF4FA3] text-white border-transparent shadow-sm'
                : 'bg-white hover:bg-[#FFF0F6] text-gray-400 border-[#FFD6E8]'
            }`}
            title={isBookmarked ? 'Bookmarked' : 'Add to Bookmarks'}
          >
            <Bookmark className="w-4 h-4" />
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-2 rounded-2xl bg-white hover:bg-[#FFF0F6] text-gray-400 hover:text-[#70204F] border border-[#FFD6E8] transition-all"
            title="Copy Note Content"
          >
            {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Verbatim Educational Body */}
      <div className="text-[#70204F] leading-relaxed font-normal text-sm md:text-base space-y-3 whitespace-pre-line selection:bg-[#FFD6E8]">
        {highlightAnswer(note.rawText)}
      </div>

      {/* Educational Table if present */}
      {note.table && (
        <div className="mt-5 overflow-hidden rounded-2xl border-2 border-[#FFD6E8] shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#FFD6E8] via-[#FFF0F6] to-[#E9DDFB] text-[#4B244A] border-b border-[#FFD6E8]">
                  {note.table.headers.map((h, idx) => (
                    <th key={idx} className="py-3 px-4 font-['Fredoka'] font-semibold tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FFD6E8]/40">
                {note.table.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`transition-colors hover:bg-[#FFF0F6] ${
                      rIdx % 2 === 0 ? 'bg-white' : 'bg-[#FFF9F2]/50'
                    }`}
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-2.5 px-4 text-[#70204F] align-top">
                        {highlightAnswer(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Flowchart Schematic if present */}
      {note.flowchart && (
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-[#FFF0F6] via-white to-[#E9DDFB]/40 border-2 border-[#DCCBFF] shadow-sm">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#70204F] mb-3">
            <Pin className="w-3.5 h-3.5 text-[#FF1493]" />
            <span>FLOWCHART / SCHEMATIC</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs md:text-sm text-[#4B244A] bg-white/80 p-3 rounded-xl border border-[#DCCBFF]/60 overflow-x-auto">
            {note.flowchart.map((step, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2 py-0.5">
                {sIdx > 0 && <span className="text-[#FF4FA3] font-bold">➔</span>}
                <span className="font-semibold text-[#70204F]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exam Callout Box if present */}
      {note.examCallout && note.examCallout.length > 0 && (
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-[#FFF0F6] to-[#FFD6E8]/40 border-l-4 border-l-[#FF1493] border-y border-r border-[#FFD6E8] shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-2 font-['Fredoka']">
            <Pin className="w-4 h-4 fill-[#FF1493]" />
            <span>Exam Callout / High-Yield Summary</span>
          </div>
          <ul className="space-y-1 text-xs md:text-sm text-[#4B244A]">
            {note.examCallout.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#FF4FA3] mt-0.5">•</span>
                <span>{highlightAnswer(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Last-Minute Revision Box if present */}
      {note.lastMinuteRevision && note.lastMinuteRevision.length > 0 && (
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-[#FFF9F2] to-[#FFE0D2]/40 border-l-4 border-l-[#F59E0B] border-y border-r border-[#FFE0D2] shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-2 font-['Fredoka']">
            <Zap className="w-4 h-4 fill-[#F59E0B]" />
            <span>Last-Minute Revision</span>
          </div>
          <ul className="space-y-1 text-xs md:text-sm text-[#4B244A]">
            {note.lastMinuteRevision.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#F59E0B] mt-0.5">⚡</span>
                <span>{highlightAnswer(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};
