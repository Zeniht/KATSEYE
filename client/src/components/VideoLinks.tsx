import Widget from './Widget';
import { Play, ExternalLink, Video } from 'lucide-react';

interface VideoLink {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

interface VideoLinksProps {
  title: string;
  videos: VideoLink[];
  variant?: 'default' | 'pink' | 'purple' | 'blue' | 'gradient';
  rotate?: number;
  className?: string;
}

export default function VideoLinks({ 
  title, 
  videos, 
  variant = 'purple',
  rotate = 0,
  className = ''
}: VideoLinksProps) {
  const handleVideoClick = (url: string, videoTitle: string) => {
    console.log(`Opening video: ${videoTitle}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Widget 
      title={title} 
      variant={variant} 
      rotate={rotate}
      headerIcon={<Video className="w-3 h-3" />}
      className={className}
    >
      <div className="grid grid-cols-2 gap-2" data-testid="video-links">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => handleVideoClick(video.url, video.title)}
            className="group relative rounded-md overflow-hidden border-2 border-y2k-purple/30 transition-all hover:border-y2k-purple hover:scale-105"
            data-testid={`video-link-${video.id}`}
          >
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 relative">
              {video.thumbnail ? (
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Video className="w-8 h-8 text-y2k-purple/50" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-y2k-pink flex items-center justify-center animate-pulse">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-2 bg-card/90 flex items-center gap-1">
              <p className="font-comic text-xs truncate flex-1 text-left">{video.title}</p>
              <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </Widget>
  );
}
