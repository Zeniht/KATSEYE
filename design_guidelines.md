# Y2K Girly Pop Tumblr Board - Design Guidelines

## Design Approach
**Reference-Based**: Drawing from early 2000s Tumblr aesthetics, Y2K web design, and chaotic dashboard layouts. This intentionally breaks modern minimalism rules in favor of maximalist, nostalgic expression.

## Core Design Principles
- **Controlled Chaos**: Deliberately overlapping, scattered widgets create visual energy
- **Nostalgic Maximalism**: Every pixel filled with personality - no whitespace minimalism
- **Widget-Based Architecture**: Modular content boxes that can be positioned freely across the board
- **Playful Imperfection**: Slightly tilted elements, varied sizes, handwritten-style touches

## Typography System

**Headings**: Pixelated/bitmap fonts (Press Start 2P, VT323) for main titles
**Body Text**: Comic Sans MS, Courier New, or similar playful early-web fonts
**Accent Text**: Decorative script fonts for special callouts
**Scale**: Exaggerated size contrasts - tiny 10px text next to massive 48px headers

## Layout System

**Container Structure**:
- Full viewport canvas (no max-width constraints)
- Absolute/fixed positioning for widget placement
- Overlapping z-index layers creating depth
- Scattered rotation values (-3deg to 5deg) on widgets

**Spacing Primitives**: Inconsistent by design, but use multiples of 4px (4, 8, 12, 16, 20) within individual widgets

**Widget Grid**:
- Widgets sized in varied dimensions: 200x150px, 300x400px, 250x200px, etc.
- Position widgets across viewport using percentages (top: 10%, left: 25%, etc.)
- Create 3-4 depth layers using z-index (10, 20, 30, 40)

## Component Library

### Widget Types

**Text Analysis Box**:
- Bordered container with decorative frame patterns
- Scrollable content area within fixed widget dimensions
- Heading bar with draggable handle aesthetic
- 12-16px padding inside

**Image Gallery Widget**:
- Polaroid-style photo frames
- 3-6 images per widget in collage arrangement
- Slight rotation on individual photos (-2deg to 3deg)
- Caption text below each image

**Video Link Collection**:
- Embedded thumbnail grids (2x2 or 3x2 layouts)
- Play button overlays
- Link text/descriptions below thumbnails
- 8px gaps between video items

**Hyperlink Widget**:
- Bulleted or numbered lists of styled links
- Decorative bullet points (hearts, stars, arrows)
- Underline + bold styling on links
- 4px spacing between list items

**Sticky Note Widget**:
- Post-it style boxes for quick thoughts/annotations
- Handwritten-style font
- Slightly curled corner effect (CSS pseudo-element)
- 150x150px to 200x200px dimensions

**Header/Marquee Banner**:
- Full-width scrolling text at top
- 40-60px height
- Repeating pattern of text/decorative elements

### Navigation Elements

**Side Panel Widget**:
- Fixed position navigation (150-200px wide)
- Stacked link list
- Small icon/decoration next to each link
- 8px vertical spacing between links

**Floating Action Buttons**:
- Circular buttons scattered at page edges
- 50-60px diameter
- Drop shadow for depth
- Icons for actions (home, top, etc.)

## Decorative Elements

**Background Treatment**:
- Tiled pattern or gradient overlay
- Decorative corner flourishes
- Animated GIF-style elements (sparkles, stars) using CSS animations

**Widget Borders**:
- Double borders, dashed borders, gradient borders
- 2-4px border width
- Decorative corner elements (stars, hearts)

**Cursor Treatments**:
- Custom cursor throughout (star trail, heart, sparkle)
- Different cursor on hover states

## Animation Guidelines

**Subtle Movements** (use sparingly but present):
- Gentle float/bounce on widgets (2-3px vertical movement)
- Blink animation on accent text (2s interval)
- Slow rotation on decorative elements (360deg over 20s)
- Marquee scroll (smooth, continuous)

**Interaction Animations**:
- Widget wiggle on hover (slight rotation increase)
- Sparkle burst on click
- Scale up slightly on widget focus (1.02x)

## Images

### Placement Strategy
**No Hero Image**: This design doesn't use traditional hero sections. Instead, images are distributed across widgets.

**Image Types Needed**:
- **Katseye Photos**: 15-20 images of various sizes for gallery widgets
- **Screenshot Graphics**: 5-8 video thumbnail screenshots for link widgets
- **Decorative Elements**: Sparkles, stars, hearts as CSS background images or small inline decorations
- **Profile/About Image**: 1 polaroid-style photo in side panel widget

**Image Treatment**:
- All images in polaroid-style frames with 12-16px padding/border
- Slight rotation applied (-5deg to 5deg)
- Drop shadow for depth (4-6px blur)
- Captions in handwritten-style font below images

## Accessibility Adaptations

- Maintain text contrast despite busy backgrounds
- Provide toggle to reduce animations
- Ensure all interactive widgets have focus states
- Alt text on all images
- Keyboard navigation between widgets

## Responsive Behavior

**Desktop (1024px+)**: Full chaotic layout with overlapping widgets
**Tablet (768-1023px)**: Reduce overlap, stack some widgets vertically while maintaining tilt
**Mobile (< 768px)**: Linear vertical stack of widgets, remove rotation, maintain decorative borders and fonts

This design intentionally embraces early web chaos while ensuring content accessibility and nostalgic authenticity.