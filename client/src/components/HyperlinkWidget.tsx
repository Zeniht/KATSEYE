import Widget from './Widget';
import { Link2, Star, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface HyperlinkItem {
  id: string;
  text: string;
  url: string;
  icon?: 'star' | 'heart' | 'sparkle' | 'arrow';
}

interface HyperlinkWidgetProps {
  title: string;
  links: HyperlinkItem[];
  variant?: 'default' | 'pink' | 'purple' | 'blue' | 'gradient';
  rotate?: number;
  className?: string;
}

const iconMap = {
  star: Star,
  heart: Heart,
  sparkle: Sparkles,
  arrow: ArrowRight,
};

export default function HyperlinkWidget({ 
  title, 
  links, 
  variant = 'blue',
  rotate = 0,
  className = ''
}: HyperlinkWidgetProps) {
  return (
    <Widget 
      title={title} 
      variant={variant} 
      rotate={rotate}
      headerIcon={<Link2 className="w-3 h-3" />}
      className={className}
    >
      <ul className="space-y-2" data-testid="hyperlink-list">
        {links.map((link, index) => {
          const IconComponent = iconMap[link.icon || 'star'];
          const colors = ['text-y2k-pink', 'text-y2k-purple', 'text-y2k-blue', 'text-y2k-cyan'];
          const color = colors[index % colors.length];
          
          return (
            <li key={link.id} className="group" data-testid={`hyperlink-${link.id}`}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-comic text-sm hover:underline decoration-wavy decoration-2 underline-offset-4 transition-all hover:translate-x-1"
                onClick={() => console.log(`Link clicked: ${link.text}`)}
              >
                <IconComponent className={`w-3 h-3 ${color} animate-sparkle flex-shrink-0`} style={{ animationDelay: `${index * 0.2}s` }} />
                <span className="group-hover:text-y2k-pink transition-colors">{link.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Widget>
  );
}
