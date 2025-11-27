import MusicPlayer from '../MusicPlayer';

export default function MusicPlayerExample() {
  // todo: remove mock functionality
  const mockTracks = [
    { id: '1', title: 'Touch', artist: 'KATSEYE' },
    { id: '2', title: 'Debut (We Are Here)', artist: 'KATSEYE' },
    { id: '3', title: 'My Way', artist: 'KATSEYE' },
    { id: '4', title: 'See U Later', artist: 'KATSEYE' },
  ];

  return (
    <MusicPlayer 
      tracks={mockTracks}
      rotate={2}
    />
  );
}
