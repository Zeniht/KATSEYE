import { useState } from 'react';

interface StickyNoteProps {
  content: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green';
  rotate?: number;
  className?: string;
  editable?: boolean;
  onContentChange?: (content: string) => void;
}

export default function StickyNote({ 
  content, 
  color = 'yellow',
  rotate = 0,
  className = '',
  editable = false,
  onContentChange
}: StickyNoteProps) {
  const [text, setText] = useState(content);
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    yellow: 'sticky-note',
    pink: 'sticky-note sticky-note-pink',
    blue: 'sticky-note sticky-note-blue',
    green: 'sticky-note sticky-note-green',
  };

  const handleChange = (newText: string) => {
    setText(newText);
    onContentChange?.(newText);
  };

  return (
    <div
      className={`
        ${colorClasses[color]}
        p-4 rounded-sm transition-all duration-300 w-40 min-h-32
        ${isHovered ? 'scale-105 z-50' : ''}
        ${className}
      `}
      style={{ transform: `rotate(${isHovered ? 0 : rotate}deg)` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="sticky-note"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/50 rounded-b-sm shadow-sm" />
      {editable ? (
        <textarea
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full h-full min-h-20 bg-transparent font-handwriting text-sm text-gray-700 resize-none focus:outline-none"
          data-testid="sticky-note-input"
        />
      ) : (
        <p className="font-handwriting text-sm text-gray-700 leading-relaxed">
          {text}
        </p>
      )}
      <div className="absolute bottom-1 right-2 font-marker text-xs text-gray-400">
        xoxo
      </div>
    </div>
  );
}
