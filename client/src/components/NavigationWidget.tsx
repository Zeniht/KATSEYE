import { useState } from 'react';
import Widget from './Widget';
import { Home, FileText, Image, Video, Link2, MessageCircle, Menu } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: 'home' | 'text' | 'image' | 'video' | 'link' | 'message';
  onClick?: () => void;
}

interface NavigationWidgetProps {
  items: NavItem[];
  activeId?: string;
  rotate?: number;
  className?: string;
}

const iconMap = {
  home: Home,
  text: FileText,
  image: Image,
  video: Video,
  link: Link2,
  message: MessageCircle,
};

export default function NavigationWidget({ 
  items,
  activeId,
  rotate = 0,
  className = ''
}: NavigationWidgetProps) {
  const [active, setActive] = useState(activeId || items[0]?.id);

  const handleClick = (item: NavItem) => {
    setActive(item.id);
    item.onClick?.();
    console.log(`Navigation: ${item.label}`);
  };

  return (
    <Widget 
      title="Navigation" 
      variant="pink" 
      rotate={rotate}
      headerIcon={<Menu className="w-3 h-3" />}
      className={className}
    >
      <nav className="space-y-1" data-testid="navigation-widget">
        {items.map((item) => {
          const IconComponent = iconMap[item.icon];
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`
                w-full flex items-center gap-2 px-3 py-2 rounded-md
                font-comic text-sm transition-all
                ${isActive 
                  ? 'bg-y2k-pink text-white' 
                  : 'hover:bg-y2k-pink/20 text-foreground hover:text-y2k-pink'}
              `}
              data-testid={`nav-item-${item.id}`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{item.label}</span>
              {isActive && (
                <span className="ml-auto text-xs animate-blink">{'<3'}</span>
              )}
            </button>
          );
        })}
      </nav>
    </Widget>
  );
}
