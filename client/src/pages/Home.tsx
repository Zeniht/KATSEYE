import { useState } from "react";
import MarqueeBanner from "@/components/MarqueeBanner";
import Widget from "@/components/Widget";
import TextWidget from "@/components/TextWidget";
import ImageGallery from "@/components/ImageGallery";
import VideoLinks from "@/components/VideoLinks";
import HyperlinkWidget from "@/components/HyperlinkWidget";
import StickyNote from "@/components/StickyNote";
import SparkleDecoration from "@/components/SparkleDecoration";
import ProfileWidget from "@/components/ProfileWidget";
import NavigationWidget from "@/components/NavigationWidget";
import GuestbookWidget from "@/components/GuestbookWidget";
import BlinkingText from "@/components/BlinkingText";
import FloatingButton from "@/components/FloatingButton";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import HitCounter from "@/components/HitCounter";
import { Star, Heart, Sparkles, Moon, Sun } from "lucide-react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // todo: remove mock functionality - paper analysis content
  const analysisIntro = `When KATSEYE debuted in June 2024, the industry didn’t know where to place them — K-pop? Western pop? Both?? The official label: a global girl group. Like literally global. They were formed through The Debut: Dream Academy (2023), aka HYBE + Geffen Records’ huge international music experiment. HYBE = K-pop giant behind BTS and NewJeans. Geffen = big-deal American label. Together? Chaos, ambition, and ✨transnational pop world domination✨.

Over 120,000 people around the world auditioned to become part of this new “borderless pop” fantasy. And from all that? We got six girls, six cultures, & one dream.`;

  const analysisSection2 = `KATSEYE basically lives in Homi Bhabha’s theory of cultural hybridity, where cultural encounters create a “third space of enunciation” that produces new, unstable identities instead of fixed, “pure” ones. Writing in the context of 1980s–1990s globalization, decolonization debates, and mass migration, and influenced by Frantz Fanon, Bhabha argues that colonial and post-colonial encounters generate ambivalent in-between positions shaped by mimicry, negotiation, and resistance rather than simple domination. Hybridity is exciting because it enables innovation, but also conflictual because it unfolds within histories of inequality and ongoing power imbalances. In this sense, hybridity is both a critique of essentialist ideas of culture and a tool for understanding how global identities are made. KATSEYE embodies this third space: musically, in their blending of K-pop choreography with hip-hop and R&B beats and Korean-style visual storytelling with Western lyrical themes; structurally, in how they are trained, marketed, and managed across Korean and American systems; and symbolically, in how they destabilize familiar East/West and local/global binaries by existing comfortably in-between.

KATSEYE’s significance becomes clear when we place them in the context of pop’s globalization, where streaming platforms, social media, and digital fandom have made music consumption increasingly borderless. K-pop’s global rise has been driven by strategic hybridity—mixing Western genres like hip-hop, EDM, and R&B with tight choreography, high-concept visuals, and multilingual lyrics to create a hybrid sound that is both distinctly Korean and globally accessible (Sim, Kim, & Lee, 2017). KATSEYE represents a new phase: a group designed as global from the outset rather than exported from Korea. The HYBE x Geffen partnership reflects this transnational logic, combining K-pop’s training discipline with Western industry infrastructure; as Glasby (2024) notes, KATSEYE merges K-pop’s precision with Western pop’s emphasis on individuality. At the same time, scholars like Ahn (2023) highlight how race and cultural hierarchies still shape the reception of K-pop and global pop, often positioning Asian performers as “other,” while Yoon and Garcia (2024) emphasize that hybridity can blur into cultural appropriation when non-Western aesthetics are borrowed without equal benefit. KATSEYE’s global model thus signals expanded diversity in pop, but it also operates within ongoing tensions of representation, racialization, and marketability.

KATSEYE’s music and image turn hybridity into both aesthetic language and branding. Their single “Touch” shows this clearly: it leans on a Western-style R&B groove, English lyrics, and vocal arrangements reminiscent of American pop, yet it is structured around synchronized choreography, color-coded member imagery, and tightly produced sound that align with K-pop norms. As Weverse Magazine (2025) suggests, this “puts a new spin on ‘K-’,” complicating what the “K” in K-pop means when both membership and management are transnational. English as the primary performance language anchors them in Western pop discourse, while their training, visuals, and group dynamics reflect Eastern (especially Korean) systems emphasizing discipline and cohesion. KATSEYE fuses this with Western ideals of individuality by giving each member a distinct persona within a cohesive whole. Their performances at the 2024 Mnet Asian Music Awards in Los Angeles and at Lollapalooza 2025 in Chicago—where they drew a record early-afternoon crowd with songs like “Gnarly,” “Gabriela,” and “Touch”—dramatize this fusion on major Eastern and Western stages. Marketing reinforces it: global auditions, multilingual content, the Gap “Better in Denim” campaign (400 million views in three days), and coverage like Korea JoongAng Daily (2024) and Sanghvi (2025) frame their diversity and Asian American representation (especially via leader Sophia Laforteza) as both selling point and emotional anchor for diasporic and underrepresented fans.

KATSEYE’s hybridity works as both artistic innovation and corporate strategy. Creatively, their mixing of styles, languages, and performance traditions pushes pop beyond neat national labels and models a more genuinely global aesthetic. Strategically, this hybridity is part of a deliberate project by HYBE, Geffen, and brand partners like Gap to access multiple markets and identities at once, aligning with The Korea Times’ (2025) claim that they exemplify a future of pop where diversity is both ethical ideal and marketable commodity. This double-edged quality reflects Bhabha’s own ambivalence about hybridity: it can destabilize dominant hierarchies by centering new faces and stories, but it can also be folded into the same global capitalist structures that sell “inclusion” as an image. KATSEYE’s diversity clearly fits industry logics of branding, yet to see it only as corporate would ignore its impact on listeners who rarely saw themselves in global pop before. Following Lee (2018), hybridity here does more than flatter markets—it helps “imagine the global otherwise,” creating space for new subjectivities and cultural arrangements in which difference is visible, valued, and performed rather than hidden or smoothed over.`;

  const analysisConclusion = `KATSEYE’s hybrid identity doesn’t just remix sound and visuals; it rewires what representation can look like in global pop, turning a girl group into a whole cultural event. Their multinational, multiethnic lineup stretches the idea of who can be “idol material,” giving fans who’ve felt sidelined in mainstream media a chance to finally see themselves onstage, across different nationalities, languages, races, and ethnicities. Scholars like Lee (2018) argue that hybrid cultural forms open a shared global media space where identity is more fluid, while Yoon and Garcia (2024) show how hybrid groups let fans confront and question old hierarchies in entertainment; in this light, KATSEYE’s lineup is less a casting choice and more a representational strategy. Drawing on Bhabha’s “third space,” their in-between identity disrupts rigid East/West ideas and resonates deeply with young people navigating diaspora, multilingualism, or multicultural upbringing, echoing Hall (1997) and hooks (1992) on how visibility can empower marginalized subjects and create a sense of belonging. Social media intensifies this effect: on TikTok, Instagram, and YouTube, KATSEYE appear not as distant icons but as global youth living online, aligning with Jenkins (2009) and Lim & Soriano (2016) on how digital platforms democratize identity-making and fan–idol interaction, making diversity feel normal in everyday scrolling. Their commercial work, like the Gap x KATSEYE “Better in Denim” campaign, uses their diverse looks as an aspirational visual language for global youth, supporting Notion’s (2025) claim that their appeal “goes beyond sound” by destabilizing old expectations of what girl groups should look like—even inside capitalist fashion and advertising systems that still privilege specific racialized beauty standards. Members like Lara Raj and Megan Skiendel also subtly widen what femininity and queerness can look like in idol culture, resonating with bisexual and queer youth in ways that echo McInroy & Craig’s (2017) point that even small gestures toward queer visibility in mainstream media can chip away at heteronormativity. On a personal level, representation feels like finally being told “you belong here”: Clark (2021) argues that representation builds belonging and self-esteem, and for fans negotiating gender, sexuality, diaspora, or mixed identity, KATSEYE becomes not just content but a symbolic home. Viewed through a Filipino lens, this hits even harder: local familiarity with hybridity via P-pop acts like SB19 and BINI—who, as Tolentino (2021) notes, indigenize the K-pop system while asserting Filipino specificity—means Filipino fans often read KATSEYE’s hybridity not as cultural loss but as joining the global conversation, especially when someone like Sophia Laforteza leads the group and shows that Filipina and hybrid identities can help define global pop rather than stand outside it.

Beyond representation, KATSEYE shows how hybridity itself is basically the default setting of contemporary life, especially in global pop, which functions as a tiny, sparkly microcosm of globalization. Global pop sits at the crossroads of transnational flows of music, capital, aesthetics, labor, and technology, echoing Appadurai’s (1996) idea that global media is where these flows become most visible, and where connection and inequality appear side by side; KATSEYE embodies this paradox as a group built through a global audition system and sold as the face of global youth culture. As a lens on cultural exchange, they illustrate what happens when cultures intersect: Bhabha’s (1994) “third space” is ambivalent, generating new forms while exposing structural tensions, and Lie and Oh (2020) argue that K-pop’s global reach reveals ongoing power hierarchies even as it celebrates cultural mixing. KATSEYE’s reception reflects these contradictions—they’re praised for diversity but questioned for authenticity; empowered by hybridity yet constrained by expectations about what a “global girl group” should represent. For global youth, whose identities are shaped by digital media and constant interconnection (Nilan & Feixa, 2006), hybridity feels normal: many already live between languages, cultures, and platforms, and KATSEYE both mirrors that reality and models how it can be lived. Their existence signals that identity today rarely fits into a single, tidy story; instead, it’s built through movement, negotiation, and multiplicity, showing how hybridity can simultaneously challenge the status quo and reveal just how deeply it is structured by global inequalities.

KATSEYE is basically the blueprint for what global pop looks like when it goes full girlypop and hybrid. Their mix of Western and Eastern sounds, diverse lineup, and glossy branding doesn’t just make them fun to stan—it opens real space for people who never saw themselves in pop before, while still reminding us that all this inclusivity is happening inside a very commercial, very unequal system. They’re both the cute, hopeful sign that pop is getting more diverse and proof that hybridity is always a little messy, a little complicated, and never completely free from tension. But in that chaotic “third space,” KATSEYE shows young people a version of the world where being mixed, diasporic, queer, or just different isn’t a problem to fix—it’s the whole point, the main character energy. And that’s beautiful chaos!!`;

  // todo: remove mock functionality
  const galleryImages = [
    {
      id: "1",
      url: "https://i.namu.wiki/i/qQPKh6WhsJ_7WNQUlqqi5E1CIrDW0-Or7zMXZEqMeGF4P2ji6WnbZHtksAq67ySVK0npFCQWzHxq7kUjTle8MMtGCYr8CXJaGVRA0STlr3CrLB81mZ42ZRUMRAp_yY0u0dGcvpRsyjTqJNZW-FBD3w.webp",
      caption: "Sophia Laforteza — Filipino",
      rotate: -2,
    },
    {
      id: "2",
      url: "https://i.pinimg.com/736x/b4/ae/22/b4ae22c901ff14b98020d2f75303358b.jpg",
      caption: "Yoonchae Jeung — South Korean",
      rotate: 1,
    },
    {
      id: "3",
      url: "https://i.namu.wiki/i/OQtvGelzrdsWJEsFwyUWX0W52BwSiFpxabwiJUIraM1U-czKW8wx4OoFZLM3GyoPunskgRJsj9wK3ainiKSktQ.webp",
      caption: "Manon Bannerman — Swiss–Italian–Ghanaian",
      rotate: -1,
    },
    {
      id: "4",
      url: "https://preview.redd.it/250805-daniela-ig-update-v0-odyvt3muc8hf1.jpg?width=640&crop=smart&auto=webp&s=a2bdf9a89c528eb5a82032ecbcb276efc4a3607e",
      caption: "Daniela Llorente — Venezuelan–Cuban–Italian",
      rotate: 2,
    },
    {
      id: "5",
      url: "https://images.genius.com/6b2fdfe1e28324a257e0bc6fb7a133ca.543x543x1.png",
      caption: "Lara Rajagopalan — Indian–Sri Lankan",
      rotate: -3,
    },
    {
      id: "6",
      url: "https://aphrodite.gmanetwork.com/entertainment/gallery/900_675_Megan-katseye_-20250606222028.jpg",
      caption: "Megan Skiendiel — Singaporean–Chinese–Swedish–American",
      rotate: 1,
    },
  ];

  // todo: remove mock functionality
  const videoLinks = [
    {
      id: "1",
      title: "TOUCH Official MV 💫",
      url: "https://www.youtube.com/watch?v=l9CZykYZkOQ",
      thumbnail: "https://img.youtube.com/vi/l9CZykYZkOQ/maxresdefault.jpg",
    },
    {
      id: "2",
      title: "GNARLY Dance Practice 💃",
      url: "https://www.youtube.com/watch?v=xrm7PP1mbtI",
      thumbnail: "https://img.youtube.com/vi/xrm7PP1mbtI/maxresdefault.jpg",
    },
    {
      id: "3",
      title: "Dream Academy TRAILER ✨",
      url: "https://www.youtube.com/watch?v=9ap0iUUtkIE",
      thumbnail: "https://img.youtube.com/vi/9ap0iUUtkIE/maxresdefault.jpg",
    },
    {
      id: "4",
      title: "JOLLIBEE PINOY REPRESENT! 🫡",
      url: "https://www.youtube.com/watch?v=aQNrrdZzW5k",
      thumbnail: "https://img.youtube.com/vi/aQNrrdZzW5k/maxresdefault.jpg",
    },
    {
      id: "5",
      title: "KATSEYE 💖 EYEKONS",
      url: "https://www.youtube.com/watch?v=vrGHZvKR0B0",
      thumbnail: "https://img.youtube.com/vi/vrGHZvKR0B0/maxresdefault.jpg",
    },
    {
      id: "6",
      title: "BAKLA KA PUT- 😳😳😳",
      url: "https://www.youtube.com/watch?v=Hf3wQSMp7-w",
      thumbnail: "https://img.youtube.com/vi/Hf3wQSMp7-w/maxresdefault.jpg",
    },
  ];

  // todo: remove mock functionality
  const resourceLinks = [
    {
      id: "1",
      text: "Twitter/X",
      url: "https://twitter.com/katseye",
      icon: "heart" as const,
    },
    {
      id: "2",
      text: "YouTube Channel",
      url: "https://www.youtube.com/channel/UCA61H4fWOMHikLcUFKyQUog",
      icon: "star" as const,
    },
    {
      id: "3",
      text: "Instagram",
      url: "https://www.instagram.com/katseyeworld/",
      icon: "sparkle" as const,
    },
    {
      id: "4",
      text: "TikTok",
      url: "https://www.tiktok.com/@katseyeworld?lang=en",
      icon: "arrow" as const,
    },
    {
      id: "5",
      text: "Spotify Profile",
      url: "https://open.spotify.com/artist/3c0gDdb9lhnHGFtP4prQpn",
      icon: "heart" as const,
    },
    {
      id: "6",
      text: "Ling's Final Paper!",
      url: "https://docs.google.com/document/d/1HauUp6D-A__pbspAeO9Q0C_YSO4qkGvZ/edit?usp=sharing&ouid=105853597808120075318&rtpof=true&sd=true",
      icon: "star" as const,
    },
  ];

  // todo: remove mock functionality
  const navItems = [
    { id: "home", label: "Home", icon: "home" as const },
    { id: "analysis", label: "Paper Analysis", icon: "text" as const },
    { id: "gallery", label: "Photo Gallery", icon: "image" as const },
    { id: "videos", label: "Video Links", icon: "video" as const },
    { id: "links", label: "Resources", icon: "link" as const },
    { id: "guestbook", label: "Guestbook", icon: "message" as const },
  ];

  // todo: remove mock functionality
  const guestbookEntries = [
    {
      id: "1",
      name: "katseye4eva",
      message:
        "OMG ur analysis is SO good!! helped me with my own research paper",
      timestamp: "11/28/2025",
    },
    {
      id: "2",
      name: "dreamacademyfan",
      message: "this site is adorable, giving early y2k vibes",
      timestamp: "11/28/2025",
    },
    {
      id: "3",
      name: "LARARAJ_BAD3NG",
      message: "love the smol cutesy details! (⸝⸝> ω <⸝⸝)",
      timestamp: "11/28/2025",
    },
  ];


  return (
    <div
      className="min-h-screen bg-background relative overflow-x-hidden"
      data-testid="home-page"
    >
      <SparkleDecoration count={40} />

      <MarqueeBanner text="MULTI-GENRE PROJECT ♡ welcome 2 my blog ♡ stream GABRIELA ♡" />

      <header className="sticky top-0 z-40 bg-gradient-to-r from-y2k-pink/90 via-y2k-purple/90 to-y2k-blue/90 backdrop-blur-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-white animate-spin-slow" />
            <h1 className="font-pixel text-sm md:text-base text-white">
              beautiful chaos
            </h1>
            <Star
              className="w-5 h-5 text-white animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            />
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
                name="eyekon ling"
                bio="just a girl analyzing global pop culture one paper at a time ★"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb80CTaZEz8mDWcRh1nnhN1tkJr9qKotTHQ&s"
                interests={[
                  "research",
                  "pop culture",
                  "cultural hybridity theory",
                  "media analysis",
                  "KATSEYE",
                ]}
                rotate={-1}
              />

              <NavigationWidget items={navItems} activeId="home" rotate={1} />

              <SpotifyEmbed 
                spotifyUri="https://open.spotify.com/artist/7wYLyFcRT2lNXFdDHHfHmd"
                title="Stream KATSEYE!"
                rotate={-2}
              />

              <StickyNote
                content="uno? uno??? UNO!!!!!"
                color="purple"
                rotate={3}
                className="hidden md:block"
              />
            </div>

            <div className="md:col-span-6 space-y-4">
              <Widget
                title="KATSEYE Paper Analysis"
                variant="gradient"
                rotate={0}
                headerIcon={<Sparkles className="w-3 h-3" />}
              >
                <div className="text-center space-y-3">
                  <h2 className="font-marker text-2xl text-gradient-rainbow">
                    Beautiful Chaos: KATSEYE’s Cultural Hybridity, Representation, and the Price of Diversity
                  </h2>
                  <p className="font-handwriting text-sm text-muted-foreground">
                    KATSEYE exemplifies how cultural hybridity in global pop
                    creates space for representation and diversity in today’s
                    music industry
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-y2k-pink animate-pulse" />
                    <span className="font-comic text-xs">
                      scroll down 4 more!
                    </span>
                    <Heart className="w-4 h-4 text-y2k-pink animate-pulse" />
                  </div>
                </div>
              </Widget>

              <TextWidget
                title="Who is KATSEYE?"
                content={analysisIntro}
                variant="pink"
                rotate={1}
                maxHeight="250px"
              />

              <div className="grid grid-cols-2 gap-4">
                <StickyNote
                  content="Basically: a cast that looks like the world Gen Z actually lives in."
                  color="pink"
                  rotate={-2}
                />
                <StickyNote
                  content="As of Sept. 2025:
                  30M+ monthly Spotify listeners and 2.8B YT views!!!"
                  color="blue"
                  rotate={1}
                />
              </div>

              <ImageGallery
                title="Member Photo Gallery"
                images={galleryImages}
                variant="gradient"
                rotate={-1}
              />

              <TextWidget
                title="Cultural Hybridity in KATSEYE's Pop Identity"
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
                title="KATSEYE's Cultural Hybridity as a Reflection of Today’s World"
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
                    <p className="font-retro text-2xl text-y2k-pink">3,067</p>
                    <p className="font-comic text-xs text-muted-foreground">
                      words
                    </p>
                  </div>
                  <div className="p-2 rounded-md bg-y2k-purple/20">
                    <p className="font-retro text-2xl text-y2k-purple">36</p>
                    <p className="font-comic text-xs text-muted-foreground">
                      sources
                    </p>
                  </div>
                  <div className="p-2 rounded-md bg-y2k-blue/20">
                    <p className="font-retro text-2xl text-y2k-blue">5</p>
                    <p className="font-comic text-xs text-muted-foreground">
                      sections
                    </p>
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

              <GuestbookWidget entries={guestbookEntries} rotate={-1} />

              <Widget
                title="Updates"
                variant="purple"
                rotate={1}
                headerIcon={<Sparkles className="w-3 h-3" />}
              >
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <BlinkingText
                      text="NEW"
                      className="text-y2k-lime text-[8px]"
                    />
                    <p className="font-comic text-xs">
                      Multi-Genre Project Presentation!
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-pixel text-[8px] text-muted-foreground">
                      11/17
                    </span>
                    <p className="font-comic text-xs">
                      SUBMITTED: They Say-I Say Paper!
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-pixel text-[8px] text-muted-foreground">
                      10/22
                    </span>
                    <p className="font-comic text-xs">
                      SUBMITTED: I Say Paper!
                    </p>
                  </div>
                </div>
              </Widget>

              <StickyNote
                content="sana all kasama sa The Beautiful Chaos Tour :(("
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
                  <p className="font-handwriting text-sm">by ling bartolome</p>
                  <p className="font-pixel text-[8px] text-muted-foreground mt-3">
                    est. 2025
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
            <span className="font-pixel text-[10px] text-white">
              thanks 4 visiting!
            </span>
            <Star className="w-3 h-3 text-white animate-spin-slow" />
          </div>
          <p className="font-comic text-xs text-white/80">stan katseye 6ever</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {["pink", "purple", "blue", "cyan", "lime"].map((color, idx) => (
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
