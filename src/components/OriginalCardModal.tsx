import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, Sparkles, RefreshCw } from 'lucide-react';

interface OriginalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalCardModal: React.FC<OriginalCardModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((z) => Math.min(2.2, z + 0.25));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(0.75, z - 0.25));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="original-card-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#3B222A]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col max-h-[94vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-[#C9A875]/80 bg-[#FFFBF9] shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#F3E3DF] bg-[#FAF0EE] px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFBF9] border border-[#C9A875]">
              <Sparkles className="h-4 w-4 text-[#C9A875]" />
            </div>
            <div>
              <h3 id="original-card-title" className="font-serif-royal text-lg font-bold text-[#5C3843]">
                Traditional Wedding Invitation Card
              </h3>
              <p className="font-serif italic text-xs text-[#B87D89]">
                Sofia S Nair &amp; Akhil RV &bull; Authentic Printed Stationery
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close original card modal"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#5C3843]/80 transition-colors hover:bg-rose-100 hover:text-[#5C3843]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Card Viewport Container with Archival Museum Frame & Antique Gold Corner Brackets */}
        <div className="relative flex-1 overflow-auto p-5 sm:p-8 flex items-center justify-center bg-[#FDF8F7] min-h-[380px]">
          <div
            className="relative transition-transform duration-200 ease-out origin-center select-none"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Antique Gold Photo Corner Brackets */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#C9A875] z-10 pointer-events-none" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#C9A875] z-10 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#C9A875] z-10 pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#C9A875] z-10 pointer-events-none" />

            <img
              src="/invitation_card.jpg"
              alt="Sofia & Akhil Traditional Wedding Card"
              className="max-h-[68vh] w-auto rounded-xl shadow-2xl border-2 border-[#F3E3DF] object-contain"
            />
          </div>
        </div>

        {/* Modal Controls Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#F3E3DF] bg-[#FAF0EE]/90 px-6 py-3.5">
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.75}
              className="flex items-center gap-1 rounded-lg border border-[#F3E3DF] bg-white px-2.5 py-1.5 text-xs text-[#5C3843] transition-colors hover:bg-[#FAF0EE] disabled:opacity-40"
              title="Zoom Out"
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={handleResetZoom}
              className="flex items-center gap-1 rounded-lg border border-[#F3E3DF] bg-white px-3 py-1.5 text-xs font-cinzel text-[#5C3843] transition-colors hover:bg-[#FAF0EE]"
              title="Reset Zoom"
            >
              <RefreshCw className="h-3 w-3 text-[#B87D89]" />
              <span>{Math.round(zoomLevel * 100)}%</span>
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.2}
              className="flex items-center gap-1 rounded-lg border border-[#F3E3DF] bg-white px-2.5 py-1.5 text-xs text-[#5C3843] transition-colors hover:bg-[#FAF0EE] disabled:opacity-40"
              title="Zoom In"
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </button>
          </div>

          <a
            href="/invitation_card.jpg"
            download="Sofia-Akhil-Wedding-Invitation.jpg"
            className="gold-shimmer-btn flex items-center gap-2 rounded-full border border-[#C9A875] bg-gradient-to-r from-[#C9A875] to-[#E6D3B3] px-5 py-2 text-xs font-semibold text-[#5C3843] shadow-sm transition-all hover:opacity-95 font-cinzel tracking-wider uppercase"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download High-Res Card</span>
          </a>
        </div>
      </div>
    </div>
  );
};
