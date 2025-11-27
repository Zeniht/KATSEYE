import Widget from '../Widget';
import { Star } from 'lucide-react';

export default function WidgetExample() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Widget title="Pink Widget" variant="pink" headerIcon={<Star className="w-3 h-3" />}>
        <p className="font-comic text-sm">This is a pink themed widget!</p>
      </Widget>
      <Widget title="Purple Widget" variant="purple" rotate={-2}>
        <p className="font-comic text-sm">Slightly tilted purple widget~</p>
      </Widget>
    </div>
  );
}
