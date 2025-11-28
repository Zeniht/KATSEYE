import { useState } from 'react';
import Widget from './Widget';
import { MessageCircle, Send, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

interface GuestbookWidgetProps {
  entries: GuestbookEntry[];
  rotate?: number;
  className?: string;
  onAddEntry?: (name: string, message: string) => void;
}

export default function GuestbookWidget({ 
  entries: initialEntries,
  rotate = 0,
  className = '',
  onAddEntry
}: GuestbookWidgetProps) {
  const [entries, setEntries] = useState(initialEntries);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleDateString(),
    };
    
    setEntries([newEntry, ...entries]);
    onAddEntry?.(name, message);
    setName('');
    setMessage('');
    console.log('Guestbook entry added:', newEntry);
  };

  return (
    <Widget 
      title="Sign My Guestbook" 
      variant="gradient" 
      rotate={rotate}
      headerIcon={<MessageCircle className="w-3 h-3" />}
      className={className}
    >
      <div className="space-y-4" data-testid="guestbook-widget">
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            placeholder="ur name~"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-md border-2 border-y2k-pink/30 bg-background font-comic text-sm focus:outline-none focus:border-y2k-pink"
            data-testid="guestbook-name-input"
          />
          <textarea
            placeholder="how do u see urself in KATSEYE?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 rounded-md border-2 border-y2k-pink/30 bg-background font-comic text-sm resize-none h-16 focus:outline-none focus:border-y2k-pink"
            data-testid="guestbook-message-input"
          />
          <Button 
            type="submit" 
            size="sm" 
            className="w-full bg-gradient-to-r from-y2k-pink to-y2k-purple hover:opacity-90"
            data-testid="guestbook-submit"
          >
            <Send className="w-3 h-3 mr-1" />
            sign!
          </Button>
        </form>
        
        <div className="border-t-2 border-dashed border-y2k-pink/30 pt-3 space-y-3 max-h-48 overflow-y-auto scrollbar-y2k">
          {entries.map((entry) => (
            <div 
              key={entry.id}
              className="p-2 rounded-md bg-y2k-pink/10 border border-y2k-pink/20"
              data-testid={`guestbook-entry-${entry.id}`}
            >
              <div className="flex items-center gap-1 mb-1">
                <Heart className="w-3 h-3 text-y2k-pink fill-y2k-pink" />
                <span className="font-marker text-sm text-y2k-pink">{entry.name}</span>
                <span className="text-xs text-muted-foreground ml-auto">{entry.timestamp}</span>
              </div>
              <p className="font-handwriting text-sm text-foreground">{entry.message}</p>
            </div>
          ))}
        </div>
      </div>
    </Widget>
  );
}
