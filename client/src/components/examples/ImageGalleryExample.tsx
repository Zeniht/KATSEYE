import ImageGallery from '../ImageGallery';

export default function ImageGalleryExample() {
  // todo: remove mock functionality
  const mockImages = [
    { id: '1', url: 'https://placehold.co/200x200/ff6b9d/ffffff?text=Photo+1', caption: 'debut era', rotate: -2 },
    { id: '2', url: 'https://placehold.co/200x200/c44cff/ffffff?text=Photo+2', caption: 'concert moment', rotate: 1 },
    { id: '3', url: 'https://placehold.co/200x200/6b9fff/ffffff?text=Photo+3', caption: 'iconic look', rotate: -1 },
    { id: '4', url: 'https://placehold.co/200x200/4cffb5/333333?text=Photo+4', caption: 'behind scenes', rotate: 2 },
  ];

  return (
    <ImageGallery 
      title="KATSEYE Pics"
      images={mockImages}
      variant="pink"
      rotate={-1}
    />
  );
}
