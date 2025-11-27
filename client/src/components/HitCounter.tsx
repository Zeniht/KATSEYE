import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface HitCounterProps {
  initialCount?: number;
  className?: string;
}

export default function HitCounter({ initialCount = 12847, className = '' }: HitCounterProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // todo: remove mock functionality - simulate increasing count
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const digits = count.toString().padStart(6, '0').split('');

  return (
    <div className={`inline-flex items-center gap-2 ${className}`} data-testid="hit-counter">
      <Eye className="w-4 h-4 text-y2k-pink" />
      <div className="flex gap-0.5">
        {digits.map((digit, idx) => (
          <span 
            key={idx}
            className="w-5 h-6 bg-black text-y2k-lime font-retro text-sm flex items-center justify-center border border-y2k-lime/30"
          >
            {digit}
          </span>
        ))}
      </div>
      <span className="font-pixel text-[8px] text-muted-foreground">visitors</span>
    </div>
  );
}
