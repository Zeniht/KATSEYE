import GuestbookWidget from '../GuestbookWidget';

export default function GuestbookWidgetExample() {
  // todo: remove mock functionality
  const mockEntries = [
    { id: '1', name: 'katseye4ever', message: 'love ur analysis!! so detailed', timestamp: '11/27/2025' },
    { id: '2', name: 'popstan', message: 'this site is SO cute omg', timestamp: '11/26/2025' },
  ];

  return (
    <GuestbookWidget 
      entries={mockEntries}
      rotate={-1}
    />
  );
}
