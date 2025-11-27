import { useState } from 'react';

interface WidgetProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  variant?: 'default' | 'pink' | 'purple' | 'blue' | 'gradient';
  showHeader?: boolean;
  headerIcon?: React.ReactNode;
}

export default function Widget({ 
  title, 
  children, 
  className = '', 
  rotate = 0,
  variant = 'default',
  showHeader = true,
  headerIcon
}: WidgetProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const variantStyles = {
    default: 'border-y2k-pink/50 bg-card',
    pink: 'border-y2k-pink bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-950/50 dark:to-pink-900/30',
    purple: 'border-y2k-purple bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950/50 dark:to-purple-900/30',
    blue: 'border-y2k-blue bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/50 dark:to-blue-900/30',
    gradient: 'border-gradient-rainbow bg-card',
  };
  
  const headerStyles = {
    default: 'bg-y2k-pink',
    pink: 'bg-gradient-to-r from-y2k-pink to-pink-400',
    purple: 'bg-gradient-to-r from-y2k-purple to-purple-400',
    blue: 'bg-gradient-to-r from-y2k-blue to-blue-400',
    gradient: 'bg-gradient-to-r from-y2k-pink via-y2k-purple to-y2k-blue',
  };

  return (
    <div
      className={`
        relative rounded-md border-2 shadow-lg transition-all duration-300
        ${variantStyles[variant]}
        ${isHovered ? 'scale-[1.02] shadow-xl z-50' : ''}
        ${className}
      `}
      style={{ transform: `rotate(${isHovered ? 0 : rotate}deg)` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="widget-container"
    >
      {showHeader && title && (
        <div 
          className={`
            flex items-center gap-2 px-3 py-2 rounded-t-sm
            ${headerStyles[variant]}
          `}
          data-testid="widget-header"
        >
          {headerIcon && <span className="text-white">{headerIcon}</span>}
          <h3 className="font-pixel text-[10px] text-white truncate">{title}</h3>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>
      )}
      <div className="p-3 scrollbar-y2k overflow-auto">
        {children}
      </div>
    </div>
  );
}
