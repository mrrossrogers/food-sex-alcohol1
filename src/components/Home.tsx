"use client";

import { useEffect, useState } from "react";

type Story = {
  no: string;
  category: "FOOD" | "SEX" | "ALCOHOL";
  title: string;
  deck: string;
  moment: string;
  image: string;
  tone: string;
  verdict: string;
  emotion: string;
  outcome: string;
};

const storyFoundations: Record<string, { emotion: string; outcome: string }> = {
  FOOD: { emotion: "Belonging", outcome: "Leave more connected than you arrived" },
  SEX: { emotion: "Intimacy", outcome: "Feel seen, wanted and closer" },
  ALCOHOL: { emotion: "Celebration", outcome: "Turn a passing moment into an occasion" },
};

const rawStories = [
  { no: "01", category: "FOOD", title: "The Dinner That Makes Time Disappear", deck: "Six restaurants for the night when the table matters more than the reservation.", moment: "For two people with something worth saying", image: "/images/food.png", tone: "gold", verdict: "YES, when the company is the occasion." },
  { no: "02", category: "FOOD", title: "Coffee Worth Waking Up Early For", deck: "The rare rooms where the first hour of the day feels entirely your own.", moment: "For reclaiming a quiet morning", image: "/images/hero.png", tone: "cream", verdict: "YES, if you arrive before the city does." },
  { no: "03", category: "FOOD", title: "Cook One Impossibly Good Thing", deck: "A roast chicken, a sharp knife and the confidence to stop overcomplicating dinner.", moment: "For becoming the host you remember", image: "/images/food.png", tone: "rust", verdict: "YES. Mastery is more memorable than variety." },
  { no: "04", category: "FOOD", title: "The Long Lunch Is Not Dead", deck: "Where to let noon become four and conversation outrun the check.", moment: "For friendships that deserve more than an hour", image: "/images/food.png", tone: "olive", verdict: "YES, and put the phone away." },
  { no: "05", category: "FOOD", title: "A Table Set for Coming Home", deck: "The objects, rituals and generous imperfections that make people want to stay.", moment: "For gathering your people again", image: "/images/hero.png", tone: "ink", verdict: "YES. The feeling is the luxury." },
  { no: "06", category: "SEX", title: "Luxury Sheets Worth Every Dollar", deck: "Not thread-count theater. Bedding that changes the way a room, and a night, feels.", moment: "For making the ordinary intimate", image: "/images/romance.png", tone: "rose", verdict: "YES, if you buy for feel, not status." },
  { no: "07", category: "SEX", title: "The Hotel Room Built for Reconnection", deck: "Privacy, light, sound and the small design decisions that help two people return to each other.", moment: "For the weekend you stop postponing", image: "/images/romance.png", tone: "wine", verdict: "ONLY FOR THE RIGHT PERSON. A room cannot do the honest part for you." },
  { no: "08", category: "SEX", title: "Desire Begins Before the Bedroom", deck: "The lost art of anticipation, and why attention is still the most seductive gesture.", moment: "For restoring electricity to familiarity", image: "/images/hero.png", tone: "plum", verdict: "YES. Attention compounds." },
  { no: "09", category: "SEX", title: "How to Ask for What You Want", deck: "A mature guide to replacing performance, guessing and silence with a better conversation.", moment: "For choosing courage over assumption", image: "/images/romance.png", tone: "sand", verdict: "YES, when curiosity replaces demand." },
  { no: "10", category: "SEX", title: "The Bedroom Should Feel Like an Invitation", deck: "Lighting, texture, temperature and the quiet removal of everything that kills the mood.", moment: "For making space for closeness", image: "/images/romance.png", tone: "clay", verdict: "YES. Design the feeling, not the photograph." },
  { no: "11", category: "ALCOHOL", title: "Champagne Worth Saving for Life's Biggest Moments", deck: "Five bottles with enough character to become part of the story you tell later.", moment: "For marking the day properly", image: "/images/hero.png", tone: "champagne", verdict: "YES. The memory deserves a ritual." },
  { no: "12", category: "ALCOHOL", title: "The One-Bottle Home Bar", deck: "A beautiful bottle, cold ice and one drink you can make without looking anything up.", moment: "For welcoming someone well", image: "/images/hero.png", tone: "amber", verdict: "YES. Hospitality beats inventory." },
  { no: "13", category: "ALCOHOL", title: "A Beer Garden at Golden Hour", deck: "The places that understand cold beer tastes better with open sky and nowhere else to be.", moment: "For ending the week among friends", image: "/images/food.png", tone: "moss", verdict: "YES, before the sun disappears." },
  { no: "14", category: "ALCOHOL", title: "Whiskey for the Night You Need to Think", deck: "Not escape. A measured pour, a quiet chair and enough room to hear yourself clearly.", moment: "For sitting with the truth", image: "/images/hero.png", tone: "oak", verdict: "ONLY FOR THE RIGHT PERSON. Reflection must remain the point." },
  { no: "15", category: "ALCOHOL", title: "The Cocktail That Starts a Celebration", deck: "How to make the first ten minutes feel like everyone came to the right place.", moment: "For turning arrival into occasion", image: "/images/food.png", tone: "red", verdict: "YES. The welcome becomes the memory." },
] satisfies Array<Omit<Story, "emotion" | "outcome">>;

const stories: Story[] = rawStories.map((story) => ({
  ...story,
  ...storyFoundations[story.category],
}));

const featured = [stories[0], stories[5], stories[10], stories[3], stories[1], stories[6]];

export default function Home() {
  const [openStory, setOpenStory] = useState<Story | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openStory || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openStory, menuOpen]);

  return (
    <main>
      <header className="masthead">
        <nav className="wordmark" aria-label="Publication sections">
          <a href="#food">FOOD</a><i>·</i><a href="#sex">SEX</a><i>·</i><a href="#alcohol">ALCOHOL</a>
        </nav>
        <div className="issue-label">FOUNDING EDITION <b>01</b></div>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><span/><span/></button>
      </header>

      <section className="hero" id="top">
        <img src="/images/hero.png" alt="An intimate candlelit dinner table" width="1586" height="992" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Founding Edition · Issue No. 1</p>
          <h1>Better Experiences<br/>Start Here.</h1>
          <div className="hero-bottom"><p>Life is short.<br/>Spend it well.</p><a href="#featured">Enter Issue <span>↓</span></a></div>
        </div>
      </section>

      <section className="ticker" aria-label="Editorial promise"><span>FOOD NOURISHES</span><i>✦</i><span>SEX CONNECTS</span><i>✦</i><span>ALCOHOL CELEBRATES</span><i>✦</i><span>EXPERIENCES REMAIN</span></section>

      <section className="featured section-pad" id="featured">
        <div className="featured-intro"><div><p className="eyebrow">Featured Stories</p><h2>Begin with a moment<br/>worth remembering.</h2></div><p>We do not review things for the sake of having an opinion. We ask whether they can improve a real hour in someone&apos;s life.</p></div>
        <div className="cover-grid">
          {featured.map((story, i) => (
            <button className={`cover cover-${i + 1}`} key={story.title} onClick={() => setOpenStory(story)}>
              <img src={story.image} alt="" width="1536" height="1024" loading={i < 2 ? "eager" : "lazy"} />
              <span className="cover-veil" />
              <span className="cover-category">{story.category} / {story.no}</span>
              <strong>{story.title}</strong>
              <span className="cover-moment">{story.moment}</span>
              <span className="cover-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="editor-letter" id="from-the-editor">
        <div className="editor-image"><img src="/images/romance.png" alt="Warm morning light across a quiet hotel room" width="1536" height="1024" loading="lazy" /></div>
        <article>
          <p className="eyebrow">From the Editor</p>
          <h2>We thought we were building another lifestyle website.</h2>
          <p className="letter-lead">We were wrong.</p>
          <p>Over the past few weeks, one question kept resurfacing:</p>
          <blockquote>“What experiences are truly worth our time?”</blockquote>
          <p>That question changed everything.</p>
          <p>It changed how we choose restaurants. How we review products. How we think about relationships. How we evaluate travel. Even how we define success.</p>
          <p>This publication exists because your weekends matter. Your anniversaries matter. Your vacations matter. Your conversations matter. Your celebrations matter.</p>
          <p className="letter-emphasis">Time is the only thing none of us get back.</p>
          <p>If this issue helps you create one unforgettable meal...<br/>One better conversation...<br/>One celebration you&apos;ll remember years from now...</p>
          <p>Then we&apos;ve done our job.</p>
          <p>Welcome to Food Sex Alcohol.<br/>Let&apos;s spend our time well.</p>
          <div className="editor-signoff"><strong>Ross Rogers</strong><span>Founder &amp; Editor</span></div>
        </article>
      </section>

      <section className="manifesto">
        <div className="manifesto-mark">FSA</div>
        <div className="manifesto-copy">
          <p className="eyebrow">The Editor&apos;s Manifesto</p>
          <h2>Time is the one thing<br/>you cannot order again.</h2>
          <div className="manifesto-cols"><p>Every recommendation asks you to spend a piece of your life. That makes recommendation an act of responsibility, not content.</p><p>We begin with the human moment. We look for what deepens it. And if an experience is not worth the time it takes, it does not belong here.</p></div>
          <blockquote>Was this experience worth your limited time on Earth?</blockquote>
        </div>
      </section>

      <section className="issue section-pad" id="issue">
        <div className="issue-intro"><div><p className="eyebrow">Founding Edition · Issue No. 1</p><h2>Better Experiences<br/>Start Here.</h2></div><p>Our founding collection moves from tables to bedrooms to raised glasses. Not products to acquire. Moments to improve.</p></div>
        {(["FOOD", "SEX", "ALCOHOL"] as const).map((category) => <div className="story-chapter" id={category.toLowerCase()} key={category}>
          <div className="chapter-title"><span>{category === "FOOD" ? "01" : category === "SEX" ? "02" : "03"}</span><h3>{category}</h3><p>{storyFoundations[category].emotion}<br/><small>{storyFoundations[category].outcome}</small></p></div>
          <div className="story-list">{stories.filter((story) => story.category === category).map((story) => <button className={`story-row tone-${story.tone}`} key={story.no} onClick={() => setOpenStory(story)}>
              <span className="story-no">{story.no}</span><span className="story-cat">{story.category}</span><span className="story-title">{story.title}</span><span className="story-deck">{story.deck}</span><span className="story-go">Read ↗</span>
            </button>)}</div>
        </div>)}
      </section>

      <section className="next-issues" aria-labelledby="next-issues-title">
        <div className="next-issues-heading"><p className="eyebrow">What comes next</p><h2 id="next-issues-title">The story<br/>continues.</h2><p>Every issue is carefully curated, not hurriedly published.</p></div>
        <div className="issue-teasers">
          {[{n:"02",t:"The Art of Celebration",s:"Coming next"},{n:"03",t:"Summer Nights",s:"In development"},{n:"04",t:"Escape",s:"On the horizon"}].map((issue) => <article key={issue.n}><span>Issue No. {issue.n}</span><h3>{issue.t}</h3><p>{issue.s}</p></article>)}
        </div>
      </section>

      <section className="universes">
        {(["FOOD", "SEX", "ALCOHOL"] as const).map((cat, i) => <a href="#issue" className={`universe universe-${i}`} key={cat}>
          <span>0{i+1}</span><strong>{cat}</strong><p>{i===0 ? "Nourishment, hospitality and the tables that hold us." : i===1 ? "Intimacy, confidence and the courage to be known." : "Celebration, ritual and a better reason to raise a glass."}</p><i>Explore the universe ↗</i>
        </a>)}
      </section>

      <section className="newsletter">
        <p className="eyebrow">Become a reader</p>
        <h2>Be First To Read<br/>The Next Issue.</h2>
        <p>Every issue is carefully curated, not hurriedly published.<br/>Join us and receive the next issue before everyone else.</p>
        {subscribed ? <div className="thanks">You&apos;re a reader now. We&apos;ll make the next issue worth the wait.</div> : <form onSubmit={(e) => {e.preventDefault(); setSubscribed(true)}}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" required/><button type="submit">Become a reader ↗</button></form>}
      </section>

      <footer><a className="footer-logo" href="#top">FOOD<br/>SEX<br/>ALCOHOL</a><div><p>Life is short.<br/>Spend it well.</p><p>Founding Edition · 2026</p></div><div><a href="#featured">Experiences</a><a href="#issue">Issue No. 1</a><a href="#top">About</a></div><small>© FSA. Human judgment leads.</small></footer>

      {menuOpen && <div className="menu-overlay"><button onClick={() => setMenuOpen(false)} aria-label="Close menu">Close ×</button><nav>{["FOOD", "SEX", "ALCOHOL"].map((x,i)=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenuOpen(false)}><sup>0{i+1}</sup>{x}</a>)}</nav><p>Life is short. Spend it well.</p></div>}

      {openStory && <div className="story-modal" role="dialog" aria-modal="true" aria-label={openStory.title}>
        <button className="modal-close" onClick={() => setOpenStory(null)} aria-label="Close article">Close ×</button>
        <div className="modal-hero"><img src={openStory.image} alt="" width="1536" height="1024"/><div><p>{openStory.category} · ISSUE 01 · {openStory.no}</p><h2>{openStory.title}</h2><span>{openStory.moment}</span></div></div>
        <article>
          <div className="emotion-brief"><span><small>Primary emotion</small>{openStory.emotion}</span><span><small>Life moment</small>{openStory.moment}</span><span><small>Desired outcome</small>{openStory.outcome}</span></div>
          <p className="dropcap">There are experiences that fill time, and experiences that change its texture. This is about the second kind: the rare choice that makes an ordinary hour feel deliberate, generous and fully lived.</p>
          <h3>Why this matters</h3><p>Because the life moment comes first. The setting, object or reservation only matters if it helps you become more present inside it. We look past status and novelty to the feeling that remains after the receipt is gone.</p>
          <blockquote>“The best luxury is not excess. It is attention, beautifully placed.”</blockquote>
          <h3>The experience</h3><p>Choose the person before the place. Leave margin around the plan. Arrive without rushing, ask one better question, and notice what the room makes possible. The goal is not a perfect night. It is a night you were actually there for.</p>
          <div className="planning"><span>Planning notes</span><ul><li>Protect more time than you think you need.</li><li>Let one considered detail carry the evening.</li><li>Keep the phone out of reach, not face down.</li></ul></div>
          <div className="verdict"><p>The FSA Verdict</p><h3>Was this experience worth your limited time on Earth?</h3><strong>{openStory.verdict}</strong><span>Editorial judgment. No stars. No scores.</span></div>
        </article>
      </div>}
    </main>
  );
}
