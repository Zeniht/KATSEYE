import HyperlinkWidget from '../HyperlinkWidget';

export default function HyperlinkWidgetExample() {
  // todo: remove mock functionality
  const mockLinks = [
    { id: '1', text: 'Official KATSEYE Twitter', url: 'https://twitter.com', icon: 'heart' as const },
    { id: '2', text: 'Dream Academy Episodes', url: 'https://youtube.com', icon: 'star' as const },
    { id: '3', text: 'HYBE Labels YouTube', url: 'https://youtube.com', icon: 'sparkle' as const },
    { id: '4', text: 'Fan Community Discord', url: 'https://discord.com', icon: 'arrow' as const },
  ];

  return (
    <HyperlinkWidget 
      title="Important Links"
      links={mockLinks}
      variant="blue"
      rotate={-1}
    />
  );
}
