import Widget from './Widget';
import { Music } from 'lucide-react';

interface SpotifyEmbedProps {
  spotifyUri: string;
  type?: 'track' | 'album' | 'playlist' | 'artist';
  title?: string;
  rotate?: number;
  className?: string;
  compact?: boolean;
}

export default function SpotifyEmbed({ 
  spotifyUri,
  type = 'track',
  title = "Now Playing",
  rotate = 0,
  className = '',
  compact = false
}: SpotifyEmbedProps) {
  const spotifyId = spotifyUri.includes('spotify.com') 
    ? spotifyUri.split('/').pop()?.split('?')[0] 
    : spotifyUri.replace('spotify:', '').split(':').pop();
  
  const embedType = spotifyUri.includes('artist') ? 'artist' 
    : spotifyUri.includes('album') ? 'album'
    : spotifyUri.includes('playlist') ? 'playlist'
    : type;

  const height = compact ? 152 : (embedType === 'artist' || embedType === 'playlist' || embedType === 'album') ? 352 : 152;

  return (
    <Widget 
      title={title}
      variant="purple" 
      rotate={rotate}
      headerIcon={<Music className="w-3 h-3" />}
      className={className}
    >
      <div className="space-y-2" data-testid="spotify-embed">
        <iframe
          src={`https://open.spotify.com/embed/${embedType}/${spotifyId}?utm_source=generator&theme=0`}
          width="100%"
          height={height}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
          title={title}
        />
        <p className="font-handwriting text-xs text-center text-muted-foreground">
          click 2 play on spotify!
        </p>
      </div>
    </Widget>
  );
}
