import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

interface SparkleDecorationProps {
  count?: number;
  className?: string;
}

const colors = ['#ff6b9d', '#c44cff', '#6b9fff', '#4cffb5', '#ffeb4c'];

export default function SparkleDecoration({ count = 30, className = '' }: SparkleDecorationProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 12 + 4,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setSparkles(newSparkles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} data-testid="sparkle-decoration">
      {sparkles.map((sparkle) => (
        <svg
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
          viewBox="0 0 24 24"
          fill={sparkle.color}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
