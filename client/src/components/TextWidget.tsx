import Widget from './Widget';
import { FileText, Sparkles } from 'lucide-react';

interface TextWidgetProps {
  title: string;
  content: string;
  variant?: 'default' | 'pink' | 'purple' | 'blue' | 'gradient';
  rotate?: number;
  className?: string;
  maxHeight?: string;
}

export default function TextWidget({ 
  title, 
  content, 
  variant = 'default',
  rotate = 0,
  className = '',
  maxHeight = '300px'
}: TextWidgetProps) {
  return (
    <Widget 
      title={title} 
      variant={variant} 
      rotate={rotate}
      headerIcon={<FileText className="w-3 h-3" />}
      className={className}
    >
      <div 
        className="font-comic text-sm leading-relaxed text-foreground overflow-y-auto scrollbar-y2k"
        style={{ maxHeight }}
        data-testid="text-widget-content"
      >
        <div className="flex items-center gap-1 mb-2">
          <Sparkles className="w-3 h-3 text-y2k-pink animate-sparkle" />
          <Sparkles className="w-3 h-3 text-y2k-purple animate-sparkle" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="w-3 h-3 text-y2k-blue animate-sparkle" style={{ animationDelay: '1s' }} />
        </div>
        {content.split('\n').map((paragraph, idx) => (
          <p key={idx} className="mb-3 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </Widget>
  );
}
