import { useState } from 'react';
import Widget from './Widget';
import { Music, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
}

interface MusicPlayerProps {
  tracks: Track[];
  rotate?: number;
  className?: string;
}

export default function MusicPlayer({ 
  tracks,
  rotate = 0,
  className = ''
}: MusicPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? 'Paused' : 'Playing', tracks[currentTrack]?.title);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    console.log('Next track:', tracks[(currentTrack + 1) % tracks.length]?.title);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    console.log('Previous track:', tracks[(currentTrack - 1 + tracks.length) % tracks.length]?.title);
  };

  const current = tracks[currentTrack];

  return (
    <Widget 
      title="Now Playing" 
      variant="purple" 
      rotate={rotate}
      headerIcon={<Music className="w-3 h-3" />}
      className={className}
    >
      <div className="space-y-3" data-testid="music-player">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-md bg-gradient-to-br from-y2k-pink to-y2k-purple flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <Music className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-comic text-sm font-bold truncate">{current?.title || 'No track'}</p>
            <p className="font-handwriting text-xs text-muted-foreground truncate">{current?.artist || 'Unknown'}</p>
          </div>
        </div>

        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-y2k-pink to-y2k-purple transition-all"
            style={{ width: isPlaying ? '45%' : '0%' }}
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <button 
            onClick={prevTrack}
            className="p-2 rounded-full hover:bg-y2k-pink/20 transition-colors"
            data-testid="prev-track"
          >
            <SkipBack className="w-4 h-4 text-y2k-purple" />
          </button>
          <button 
            onClick={togglePlay}
            className="p-3 rounded-full bg-gradient-to-r from-y2k-pink to-y2k-purple hover:opacity-90 transition-opacity"
            data-testid="play-pause"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>
          <button 
            onClick={nextTrack}
            className="p-2 rounded-full hover:bg-y2k-pink/20 transition-colors"
            data-testid="next-track"
          >
            <SkipForward className="w-4 h-4 text-y2k-purple" />
          </button>
          <button className="p-2 rounded-full hover:bg-y2k-pink/20 transition-colors ml-2">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <div className="space-y-1 max-h-24 overflow-y-auto scrollbar-y2k">
          {tracks.map((track, idx) => (
            <button
              key={track.id}
              onClick={() => setCurrentTrack(idx)}
              className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left transition-colors ${
                idx === currentTrack ? 'bg-y2k-pink/20 text-y2k-pink' : 'hover:bg-muted'
              }`}
              data-testid={`track-${track.id}`}
            >
              <span className="font-retro text-xs w-4">{idx + 1}.</span>
              <span className="font-comic text-xs truncate">{track.title}</span>
            </button>
          ))}
        </div>
      </div>
    </Widget>
  );
}
