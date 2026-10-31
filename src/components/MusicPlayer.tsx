import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { musicSynth } from '../utils/audioSynth.ts';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      const playing = musicSynth.toggle();
      setIsPlaying(playing);
    }
  }, [autoPlayTrigger]);

  const handleToggle = () => {
    const nextState = musicSynth.toggle();
    setIsPlaying(nextState);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMuted) {
      musicSynth.setVolume(0.55);
      setIsMuted(false);
    } else {
      musicSynth.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <aside aria-label="Music Player" className="fixed bottom-6 right-6 z-40">
      <div 
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-[#C9A875]/60 bg-[#FFFBF9]/95 px-3.5 py-2 text-[#5C3843] shadow-[0_8px_25px_rgba(184,125,137,0.18)] backdrop-blur-md transition-all duration-300 hover:border-[#C9A875] hover:scale-105 hover:shadow-[0_10px_30px_rgba(201,168,117,0.3)] active:scale-95"
      >
        {/* Play/Pause Icon Button */}
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#C9A875] to-[#E6D3B3] text-white shadow-sm">
          {isPlaying ? (
            <Pause className="h-3 w-3 fill-current text-[#5C3843]" />
          ) : (
            <Play className="h-3 w-3 fill-current text-[#5C3843] translate-x-0.5" />
          )}
        </div>

        {/* Rose Gold Waveform Bars */}
        <div className="flex items-center gap-1 h-5 px-0.5">
          {isPlaying ? (
            <>
              <span className="w-1 bg-[#C9A875] rounded-full animate-waveform-1" />
              <span className="w-1 bg-[#C9A875] rounded-full animate-waveform-2" />
              <span className="w-1 bg-[#C9A875] rounded-full animate-waveform-3" />
              <span className="w-1 bg-[#C9A875] rounded-full animate-waveform-4" />
              <span className="w-1 bg-[#C9A875] rounded-full animate-waveform-5" />
            </>
          ) : (
            <>
              <span className="w-1 h-1.5 bg-[#C9A875]/40 rounded-full" />
              <span className="w-1 h-2 bg-[#C9A875]/40 rounded-full" />
              <span className="w-1 h-3 bg-[#C9A875]/40 rounded-full" />
              <span className="w-1 h-2 bg-[#C9A875]/40 rounded-full" />
              <span className="w-1 h-1.5 bg-[#C9A875]/40 rounded-full" />
            </>
          )}
        </div>

        {/* Melody Info */}
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B87D89]">
            {isPlaying ? 'Now Playing' : 'Wedding Melody'}
          </span>
          <span className="text-xs font-serif italic text-[#5C3843] max-w-[130px] truncate">
            Acoustic Harp & Strings
          </span>
        </div>

        {/* Mute button */}
        <button
          onClick={handleMuteToggle}
          className="ml-1 text-[#5C3843]/60 transition-colors hover:text-[#B87D89]"
          title={isMuted ? 'Unmute' : 'Mute'}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="h-3.5 w-3.5 text-rose-500" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Floating Tooltip info on hover */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg border border-[#F3E3DF] bg-[#FFFBF9] px-3 py-1.5 text-xs text-[#5C3843] shadow-lg backdrop-blur-sm transition-all animate-fadeIn">
          <p className="font-serif italic text-[11px] text-[#B87D89]">Romantic Acoustic Serenade for Sofia & Akhil</p>
        </div>
      )}
    </aside>
  );
};
