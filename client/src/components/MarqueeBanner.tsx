interface MarqueeBannerProps {
  text: string;
  className?: string;
}

export default function MarqueeBanner({ text, className = '' }: MarqueeBannerProps) {
  const repeatedText = `${text} ★ `.repeat(10);
  
  return (
    <div 
      className={`w-full overflow-hidden bg-gradient-to-r from-y2k-pink via-y2k-purple to-y2k-blue py-2 ${className}`}
      data-testid="marquee-banner"
    >
      <div className="animate-marquee whitespace-nowrap font-pixel text-xs text-white">
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
}
