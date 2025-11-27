import Widget from './Widget';
import { User, Music, Heart, Star } from 'lucide-react';

interface ProfileWidgetProps {
  name: string;
  bio: string;
  imageUrl?: string;
  interests?: string[];
  rotate?: number;
  className?: string;
}

export default function ProfileWidget({ 
  name, 
  bio, 
  imageUrl,
  interests = [],
  rotate = 0,
  className = ''
}: ProfileWidgetProps) {
  return (
    <Widget 
      title="About Me" 
      variant="gradient" 
      rotate={rotate}
      headerIcon={<User className="w-3 h-3" />}
      className={className}
    >
      <div className="flex flex-col items-center text-center" data-testid="profile-widget">
        <div className="polaroid-frame mb-3 -rotate-2">
          <div className="w-20 h-20 rounded-sm overflow-hidden bg-gradient-to-br from-y2k-pink to-y2k-purple">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-10 h-10 text-white/70" />
              </div>
            )}
          </div>
        </div>
        
        <h4 className="font-marker text-lg text-gradient-rainbow mb-2">{name}</h4>
        
        <p className="font-handwriting text-sm text-muted-foreground mb-3">
          {bio}
        </p>
        
        {interests.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center">
            {interests.map((interest, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-comic bg-y2k-pink/20 text-y2k-pink border border-y2k-pink/30"
              >
                {idx % 3 === 0 && <Heart className="w-2 h-2" />}
                {idx % 3 === 1 && <Star className="w-2 h-2" />}
                {idx % 3 === 2 && <Music className="w-2 h-2" />}
                {interest}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-3 flex gap-2">
          <Star className="w-4 h-4 text-y2k-yellow animate-spin-slow" />
          <Heart className="w-4 h-4 text-y2k-pink animate-bounce" />
          <Star className="w-4 h-4 text-y2k-purple animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
      </div>
    </Widget>
  );
}
