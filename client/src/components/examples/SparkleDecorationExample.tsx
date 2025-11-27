import SparkleDecoration from '../SparkleDecoration';

export default function SparkleDecorationExample() {
  return (
    <div className="relative h-48 bg-card rounded-md border">
      <SparkleDecoration count={20} />
      <div className="flex items-center justify-center h-full">
        <p className="font-pixel text-sm text-y2k-pink">Sparkly background!</p>
      </div>
    </div>
  );
}
