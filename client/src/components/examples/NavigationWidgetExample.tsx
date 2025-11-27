import NavigationWidget from '../NavigationWidget';

export default function NavigationWidgetExample() {
  // todo: remove mock functionality
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' as const },
    { id: 'analysis', label: 'Paper Analysis', icon: 'text' as const },
    { id: 'gallery', label: 'Photo Gallery', icon: 'image' as const },
    { id: 'videos', label: 'Video Links', icon: 'video' as const },
    { id: 'links', label: 'Resources', icon: 'link' as const },
    { id: 'guestbook', label: 'Guestbook', icon: 'message' as const },
  ];

  return (
    <NavigationWidget 
      items={navItems}
      activeId="home"
      rotate={1}
    />
  );
}
