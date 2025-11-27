interface BlinkingTextProps {
  text: string;
  className?: string;
}

export default function BlinkingText({ text, className = '' }: BlinkingTextProps) {
  return (
    <span 
      className={`animate-blink font-pixel ${className}`}
      data-testid="blinking-text"
    >
      {text}
    </span>
  );
}
