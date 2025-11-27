import { useState } from 'react';
import MarqueeBanner from '@/components/MarqueeBanner';
import Widget from '@/components/Widget';
import TextWidget from '@/components/TextWidget';
import ImageGallery from '@/components/ImageGallery';
import VideoLinks from '@/components/VideoLinks';
import HyperlinkWidget from '@/components/HyperlinkWidget';
import StickyNote from '@/components/StickyNote';
import SparkleDecoration from '@/components/SparkleDecoration';
import ProfileWidget from '@/components/ProfileWidget';
import NavigationWidget from '@/components/NavigationWidget';
import GuestbookWidget from '@/components/GuestbookWidget';
import BlinkingText from '@/components/BlinkingText';
import FloatingButton from '@/components/FloatingButton';
import MusicPlayer from '@/components/MusicPlayer';
import HitCounter from '@/components/HitCounter';
import { Star, Heart, Sparkles, Moon, Sun } from 'lucide-react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // todo: remove mock functionality - paper analysis content
  const analysisIntro = `Welcome to my KATSEYE paper analysis! This is my deep dive into the cultural phenomenon that is KATSEYE - the global girl group formed through the groundbreaking Dream Academy series.

In this analysis, I explore their musical identity, choreography patterns, and the unprecedented approach to forming an international pop group. KATSEYE represents a new paradigm in how K-pop influenced groups can transcend regional boundaries.

Their debut single "Touch" showcased a fresh sound that blends Western pop sensibilities with K-pop precision in performance and production. The choreography analysis reveals sophisticated movement vocabulary that prioritizes synchronization while allowing individual expression.`;

  const analysisSection2 = `The formation of KATSEYE through Dream Academy created a unique narrative arc that audiences could follow. Unlike traditional audition shows, the transparency of the training process allowed fans to develop deeper connections with the members.

Key findings from my research indicate that KATSEYE's success lies in their authentic representation of diverse backgrounds while maintaining a cohesive group identity. Each member brings unique strengths that complement the group's overall sound and performance style.

The production quality of their music videos demonstrates HYBE's commitment to establishing KATSEYE as a top-tier act. Camera work, editing, and styling all contribute to a visually distinct aesthetic that sets them apart from other groups.`;

  const analysisConclusion = `My paper concludes that KATSEYE is pioneering a new model for global pop groups. Their approach differs from previous attempts by major labels in several key ways:

1. Genuine cultural diversity in member selection
2. Training methodology that preserves individual artistry
3. Marketing that doesn't rely on exoticizing any particular culture
4. Music production that creates a unique sound rather than copying existing formulas

The future of KATSEYE looks promising as they continue to release new music and build their fanbase. This analysis will be updated as more data becomes available from their subsequent releases and performances.`;

  // todo: remove mock functionality
  const galleryImages = [
    { id: '1', url: 'https://placehold.co/200x200/ff6b9d/ffffff?text=KATSEYE', caption: 'debut era', rotate: -2 },
    { id: '2', url: 'https://placehold.co/200x200/c44cff/ffffff?text=Touch+MV', caption: 'touch era', rotate: 1 },
    { id: '3', url: 'https://placehold.co/200x200/6b9fff/ffffff?text=Performance', caption: 'live stage', rotate: -1 },
    { id: '4', url: 'https://placehold.co/200x200/4cffb5/333333?text=BTS', caption: 'behind the scenes', rotate: 2 },
    { id: '5', url: 'https://placehold.co/200x200/ffeb4c/333333?text=Concept', caption: 'concept photo', rotate: -3 },
    { id: '6', url: 'https://placehold.co/200x200/ff6bcd/ffffff?text=Dance', caption: 'dance practice', rotate: 1 },
  ];

  // todo: remove mock functionality
  const videoLinks = [
    { id: '1', title: 'Touch Official MV', url: 'https://www.youtube.com/watch?v=touch' },
    { id: '2', title: 'Dance Practice', url: 'https://www.youtube.com/watch?v=dance' },
    { id: '3', title: 'Dream Academy EP1', url: 'https://www.youtube.com/watch?v=ep1' },
    { id: '4', title: 'Behind The Scenes', url: 'https://www.youtube.com/watch?v=bts' },
    { id: '5', title: 'Fan Meeting Clips', url: 'https://www.youtube.com/watch?v=fanmeeting' },
    { id: '6', title: 'Interview Compilation', url: 'https://www.youtube.com/watch?v=interview' },
  ];

  // todo: remove mock functionality
  const resourceLinks = [
    { id: '1', text: 'Official KATSEYE Twitter/X', url: 'https://twitter.com/katseye', icon: 'heart' as const },
    { id: '2', text: 'YouTube Channel', url: 'https://youtube.com', icon: 'star' as const },
    { id: '3', text: 'Instagram Official', url: 'https://instagram.com', icon: 'sparkle' as const },
    { id: '4', text: 'TikTok Clips', url: 'https://tiktok.com', icon: 'arrow' as const },
    { id: '5', text: 'Spotify Profile', url: 'https://spotify.com', icon: 'heart' as const },
    { id: '6', text: 'Fan Wiki Page', url: 'https://wiki.com', icon: 'star' as const },
  ];

  // todo: remove mock functionality
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' as const },
    { id: 'analysis', label: 'Paper Analysis', icon: 'text' as const },
    { id: 'gallery', label: 'Photo Gallery', icon: 'image' as const },
    { id: 'videos', label: 'Video Links', icon: 'video' as const },
    { id: 'links', label: 'Resources', icon: 'link' as const },
    { id: 'guestbook', label: 'Guestbook', icon: 'message' as const },
  ];

  // todo: remove mock functionality
  const guestbookEntries = [
    { id: '1', name: 'katseye4eva', message: 'OMG ur analysis is SO good!! helped me with my own research paper', timestamp: '11/27/2025' },
    { id: '2', name: 'dreamacademyfan', message: 'this site is adorable, giving early 2000s vibes', timestamp: '11/26/2025' },
    { id: '3', name: 'popculture101', message: 'love the detail about choreography patterns!', timestamp: '11/25/2025' },
  ];

  // todo: remove mock functionality
  const musicTracks = [
    { id: '1', title: 'Touch', artist: 'KATSEYE' },
    { id: '2', title: 'Debut (We Are Here)', artist: 'KATSEYE' },
    { id: '3', title: 'My Way', artist: 'KATSEYE' },
    { id: '4', title: 'See U Later', artist: 'KATSEYE' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden" data-testid="home-page">
      <SparkleDecoration count={40} />
      
      <MarqueeBanner text="KATSEYE PAPER ANALYSIS ♡ welcome 2 my tumblr ♡ stream TOUCH ♡" />
      
      <header className="sticky top-0 z-40 bg-gradient-to-r from-y2k-pink/90 via-y2k-purple/90 to-y2k-blue/90 backdrop-blur-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-white animate-spin-slow" />
            <h1 className="font-pixel text-sm md:text-base text-white">
              katseye paper analysis
            </h1>
            <Star className="w-5 h-5 text-white animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
          
          <div className="flex items-center gap-3">
            <BlinkingText text="NEW!" className="text-y2k-yellow text-[8px]" />
            <HitCounter />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              data-testid="theme-toggle"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-white" />
              ) : (
                <Moon className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="relative sparkle-bg min-h-screen">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            <div className="md:col-span-3 space-y-4">
              <ProfileWidget 
                name="katseye enthusiast"
                bio="just a girl analyzing global pop culture one paper at a time ★"
                interests={['kpop', 'research', 'music theory', 'dance analysis', 'KATSEYE']}
                rotate={-1}
              />
              
              <NavigationWidget 
                items={navItems}
                activeId="home"
                rotate={1}
              />
              
              <MusicPlayer 
                tracks={musicTracks}
                rotate={-2}
              />

              <StickyNote 
                content="reminder: add more concert pics!!"
                color="yellow"
                rotate={3}
                className="hidden md:block"
              />
            </div>

            <div className="md:col-span-6 space-y-4">
              <Widget 
                title="Welcome to My Analysis Board" 
                variant="gradient"
                rotate={0}
                headerIcon={<Sparkles className="w-3 h-3" />}
              >
                <div className="text-center space-y-3">
                  <h2 className="font-marker text-2xl text-gradient-rainbow">
                    KATSEYE Paper Analysis
                  </h2>
                  <p className="font-handwriting text-sm text-muted-foreground">
                    a comprehensive look at the newest global pop sensation
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-y2k-pink animate-pulse" />
                    <span className="font-comic text-xs">scroll down 4 more!</span>
                    <Heart className="w-4 h-4 text-y2k-pink animate-pulse" />
                  </div>
                </div>
              </Widget>

              <TextWidget 
                title="Introduction & Thesis"
                content={analysisIntro}
                variant="pink"
                rotate={1}
                maxHeight="250px"
              />

              <div className="grid grid-cols-2 gap-4">
                <StickyNote 
                  content="The formation through Dream Academy = unique fan connection!!"
                  color="pink"
                  rotate={-2}
                />
                <StickyNote 
                  content="Check choreo at 2:34 in Touch MV - innovative!!"
                  color="blue"
                  rotate={1}
                />
              </div>

              <ImageGallery 
                title="Photo Evidence Collection"
                images={galleryImages}
                variant="gradient"
                rotate={-1}
              />

              <TextWidget 
                title="Analysis: Formation & Identity"
                content={analysisSection2}
                variant="purple"
                rotate={-1}
                maxHeight="280px"
              />

              <div className="relative">
                <StickyNote 
                  content="need to compare with other global groups for context"
                  color="green"
                  rotate={2}
                  className="absolute -top-2 -right-2 z-10 hidden lg:block"
                />
                <VideoLinks 
                  title="Video References"
                  videos={videoLinks}
                  variant="blue"
                  rotate={1}
                />
              </div>

              <TextWidget 
                title="Conclusion & Future Research"
                content={analysisConclusion}
                variant="gradient"
                rotate={0}
                maxHeight="300px"
              />

              <Widget 
                title="Paper Stats" 
                variant="pink"
                rotate={-1}
                headerIcon={<Star className="w-3 h-3" />}
              >
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 rounded-md bg-y2k-pink/20">
                    <p className="font-retro text-2xl text-y2k-pink">2,847</p>
                    <p className="font-comic text-xs text-muted-foreground">words</p>
                  </div>
                  <div className="p-2 rounded-md bg-y2k-purple/20">
                    <p className="font-retro text-2xl text-y2k-purple">15</p>
                    <p className="font-comic text-xs text-muted-foreground">sources</p>
                  </div>
                  <div className="p-2 rounded-md bg-y2k-blue/20">
                    <p className="font-retro text-2xl text-y2k-blue">3</p>
                    <p className="font-comic text-xs text-muted-foreground">sections</p>
                  </div>
                </div>
              </Widget>
            </div>

            <div className="md:col-span-3 space-y-4">
              <HyperlinkWidget 
                title="Official Links"
                links={resourceLinks}
                variant="blue"
                rotate={2}
              />

              <GuestbookWidget 
                entries={guestbookEntries}
                rotate={-1}
              />

              <Widget 
                title="Updates" 
                variant="purple"
                rotate={1}
                headerIcon={<Sparkles className="w-3 h-3" />}
              >
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <BlinkingText text="NEW" className="text-y2k-lime text-[8px]" />
                    <p className="font-comic text-xs">Added new photos from recent comeback!</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-pixel text-[8px] text-muted-foreground">11/25</span>
                    <p className="font-comic text-xs">Updated analysis with fan meeting data</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-pixel text-[8px] text-muted-foreground">11/20</span>
                    <p className="font-comic text-xs">First draft complete!</p>
                  </div>
                </div>
              </Widget>

              <StickyNote 
                content="don't forget to cite Dream Academy episodes properly!!"
                color="yellow"
                rotate={-3}
              />

              <Widget 
                title="Credits" 
                variant="default"
                rotate={2}
                showHeader={false}
              >
                <div className="text-center space-y-2">
                  <p className="font-handwriting text-sm">made with</p>
                  <Heart className="w-6 h-6 text-y2k-pink mx-auto animate-bounce" />
                  <p className="font-handwriting text-sm">by a katseye stan</p>
                  <p className="font-pixel text-[8px] text-muted-foreground mt-3">
                    est. 2024
                  </p>
                </div>
              </Widget>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-y2k-purple via-y2k-pink to-y2k-blue py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-3 h-3 text-white animate-spin-slow" />
            <span className="font-pixel text-[10px] text-white">thanks 4 visiting!</span>
            <Star className="w-3 h-3 text-white animate-spin-slow" />
          </div>
          <p className="font-comic text-xs text-white/80">
            best viewed on desktop
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {['pink', 'purple', 'blue', 'cyan', 'lime'].map((color, idx) => (
              <div 
                key={idx}
                className={`w-2 h-2 rounded-full bg-y2k-${color} animate-pulse`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </footer>

      <FloatingButton icon="top" position="bottom-right" />
    </div>
  );
}
