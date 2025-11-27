import { useState } from 'react';
import Widget from './Widget';
import { Image, Heart } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  rotate?: number;
}

interface ImageGalleryProps {
  title: string;
  images: GalleryImage[];
  variant?: 'default' | 'pink' | 'purple' | 'blue' | 'gradient';
  rotate?: number;
  className?: string;
}

export default function ImageGallery({ 
  title, 
  images, 
  variant = 'gradient',
  rotate = 0,
  className = ''
}: ImageGalleryProps) {
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <Widget 
      title={title} 
      variant={variant} 
      rotate={rotate}
      headerIcon={<Image className="w-3 h-3" />}
      className={className}
    >
      <div className="grid grid-cols-2 gap-3" data-testid="image-gallery">
        {images.map((image) => (
          <div 
            key={image.id}
            className="polaroid-frame relative group transition-transform duration-300 hover:scale-105 hover:z-10"
            style={{ transform: `rotate(${image.rotate || 0}deg)` }}
            data-testid={`gallery-image-${image.id}`}
          >
            <div className="aspect-square bg-muted rounded-sm overflow-hidden">
              <img 
                src={image.url} 
                alt={image.caption || 'Gallery image'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/200x200/ff6b9d/ffffff?text=${encodeURIComponent(image.caption || 'IMG')}`;
                }}
              />
            </div>
            <button
              onClick={() => toggleLike(image.id)}
              className="absolute top-2 right-2 p-1 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
              data-testid={`like-button-${image.id}`}
            >
              <Heart 
                className={`w-4 h-4 transition-colors ${likedImages.has(image.id) ? 'fill-y2k-pink text-y2k-pink' : 'text-gray-400'}`}
              />
            </button>
            {image.caption && (
              <p className="mt-2 font-handwriting text-xs text-center text-gray-600 dark:text-gray-300">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </Widget>
  );
}
