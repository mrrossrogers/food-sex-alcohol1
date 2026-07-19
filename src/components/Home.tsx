"use client";

import { useEffect, useState } from "react";
import { categories, categoryDetails, stories, storyPath } from "../data/stories";

const featuredStorySlugs = [
  "the-dinner-that-makes-time-disappear",
  "luxury-sheets-worth-every-dollar",
  "champagne-worth-saving-for-lifes-biggest-moments",
  "the-long-lunch-is-not-dead",
  "coffee-worth-waking-up-early-for",
  "the-hotel-room-built-for-reconnection",
];

const featured = featuredStorySlugs.map((slug) => stories.find((story) => story.slug === slug)!);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main>
      <header className="masthead">
        <nav className="wordmark" aria-label="Publication sections">
          <a href="/food">FOOD</a><i>·</i><a href="/sex">SEX</a><i>·</i><a href="/alcohol">ALCOHOL</a>
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
            <a className={`cover cover-${i + 1}`} key={story.headline} href={storyPath(story)}>
              <img src={story.heroImage} alt="" width="1536" height="1024" loading={i < 2 ? "eager" : "lazy"} />
              <span className="cover-veil" />
              <span className="cover-category">{story.primaryCategory} / {story.identifier}</span>
              <strong>{story.headline}</strong>
              <span className="cover-moment">{story.moment}</span>
            </a>
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
        {categories.map((category) => <div className="story-chapter" id={category.toLowerCase()} key={category}>
          <div className="chapter-title"><span>{categoryDetails[category].number}</span><h3>{category}</h3><p>{categoryDetails[category].emotion}<br/><small>{categoryDetails[category].outcome}</small></p></div>
          <div className="story-list">{stories.filter((story) => story.primaryCategory === category).map((story) => <a className={`story-row tone-${story.tone}`} key={story.identifier} href={storyPath(story)}>
              <span className="story-no">{story.identifier}</span><span className="story-cat">{story.primaryCategory}</span><span className="story-title">{story.headline}</span><span className="story-deck">{story.description}</span><span className="story-go">Read</span>
            </a>)}</div>
        </div>)}
      </section>

      <section className="next-issues" aria-labelledby="next-issues-title">
        <div className="next-issues-heading"><p className="eyebrow">What comes next</p><h2 id="next-issues-title">The story<br/>continues.</h2><p>Every issue is carefully curated, not hurriedly published.</p></div>
        <div className="issue-teasers">
          {[{n:"02",t:"The Art of Celebration",s:"Coming next"},{n:"03",t:"Summer Nights",s:"In development"},{n:"04",t:"Escape",s:"On the horizon"}].map((issue) => <article key={issue.n}><span>Issue No. {issue.n}</span><h3>{issue.t}</h3><p>{issue.s}</p></article>)}
        </div>
      </section>

      <section className="universes">
        {categories.map((cat, i) => <a href={`/${cat.toLowerCase()}`} className={`universe universe-${i}`} key={cat}>
          <span>0{i+1}</span><strong>{cat}</strong><p>{i===0 ? "Nourishment, hospitality and the tables that hold us." : i===1 ? "Intimacy, confidence and the courage to be known." : "Celebration, ritual and a better reason to raise a glass."}</p><i>Explore the universe</i>
        </a>)}
      </section>

      <section className="newsletter">
        <p className="eyebrow">Become a reader</p>
        <h2>Be First To Read<br/>The Next Issue.</h2>
        <p>Every issue is carefully curated, not hurriedly published.<br/>Join us and receive the next issue before everyone else.</p>
        {subscribed ? <div className="thanks">You&apos;re a reader now. We&apos;ll make the next issue worth the wait.</div> : <form onSubmit={(e) => {e.preventDefault(); setSubscribed(true)}}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" required/><button type="submit">Become a reader ↗</button></form>}
      </section>

      <footer><a className="footer-logo" href="#top">FOOD<br/>SEX<br/>ALCOHOL</a><div><p>Life is short.<br/>Spend it well.</p><p>Founding Edition · 2026</p></div><div><a href="#featured">Experiences</a><a href="#issue">Issue No. 1</a><a href="#top">About</a></div><small>© FSA. Human judgment leads.</small></footer>

      {menuOpen && <div className="menu-overlay"><button onClick={() => setMenuOpen(false)} aria-label="Close menu">Close ×</button><nav>{categories.map((x,i)=><a key={x} href={`/${x.toLowerCase()}`}><sup>0{i+1}</sup>{x}</a>)}</nav><p>Life is short. Spend it well.</p></div>}
    </main>
  );
}
