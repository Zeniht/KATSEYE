import StickyNote from '../StickyNote';

export default function StickyNoteExample() {
  return (
    <div className="flex gap-4 flex-wrap">
      <StickyNote 
        content="OMG their vocals are unreal!!! Must analyze in paper."
        color="pink"
        rotate={-3}
      />
      <StickyNote 
        content="Check out the choreography at 2:34 - iconic!!"
        color="yellow"
        rotate={2}
      />
      <StickyNote 
        content="Global pop domination incoming~"
        color="blue"
        rotate={-1}
      />
    </div>
  );
}
