import BlinkingText from '../BlinkingText';

export default function BlinkingTextExample() {
  return (
    <div className="flex gap-4 items-center">
      <BlinkingText text="NEW!" className="text-y2k-pink text-xs" />
      <BlinkingText text="HOT!" className="text-y2k-purple text-sm" />
      <BlinkingText text="UPDATED" className="text-y2k-blue text-xs" />
    </div>
  );
}
