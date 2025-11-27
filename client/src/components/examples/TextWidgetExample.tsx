import TextWidget from '../TextWidget';

export default function TextWidgetExample() {
  const sampleContent = `KATSEYE represents a new era in global pop music, bringing together diverse talents from around the world.

Their debut has captured hearts with innovative choreography and powerful vocals that transcend cultural boundaries.

The group's formation through the reality competition "Dream Academy" showcased their dedication and artistic growth.`;

  return (
    <TextWidget 
      title="Paper Analysis Section"
      content={sampleContent}
      variant="pink"
      rotate={1}
    />
  );
}
