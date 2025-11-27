import { ArrowUp, Home, Star } from 'lucide-react';

interface FloatingButtonProps {
  icon: 'top' | 'home' | 'star';
  onClick?: () => void;
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const iconMap = {
  top: ArrowUp,
  home: Home,
  star: Star,
};

const positionMap = {
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-right': 'top-20 right-4',
  'top-left': 'top-20 left-4',
};

export default function FloatingButton({ 
  icon, 
  onClick,
  className = '',
  position = 'bottom-right'
}: FloatingButtonProps) {
  const IconComponent = iconMap[icon];

  const handleClick = () => {
    if (icon === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClick?.();
    console.log(`Floating button clicked: ${icon}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed ${positionMap[position]} z-50
        w-12 h-12 rounded-full
        bg-gradient-to-br from-y2k-pink to-y2k-purple
        border-2 border-white/50
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all hover:scale-110 active:scale-95
        animate-float
        ${className}
      `}
      data-testid={`floating-button-${icon}`}
    >
      <IconComponent className="w-5 h-5 text-white" />
    </button>
  );
}
