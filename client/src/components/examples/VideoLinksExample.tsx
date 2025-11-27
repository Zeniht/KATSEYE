import VideoLinks from '../VideoLinks';

export default function VideoLinksExample() {
  // todo: remove mock functionality
  const mockVideos = [
    { id: '1', title: 'Touch MV', url: 'https://www.youtube.com' },
    { id: '2', title: 'Dance Practice', url: 'https://www.youtube.com' },
    { id: '3', title: 'Dream Academy EP1', url: 'https://www.youtube.com' },
    { id: '4', title: 'Fan Meeting', url: 'https://www.youtube.com' },
  ];

  return (
    <VideoLinks 
      title="Video Links"
      videos={mockVideos}
      variant="purple"
      rotate={2}
    />
  );
}
