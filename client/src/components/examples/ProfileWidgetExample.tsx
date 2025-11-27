import ProfileWidget from '../ProfileWidget';

export default function ProfileWidgetExample() {
  return (
    <ProfileWidget 
      name="katseye enthusiast"
      bio="just a girl analyzing global pop culture one paper at a time"
      interests={['kpop', 'research', 'music theory', 'dance']}
      rotate={-2}
    />
  );
}
