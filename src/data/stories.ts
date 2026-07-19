export const categories = ["FOOD", "SEX", "ALCOHOL"] as const;

export type StoryCategory = (typeof categories)[number];
export type PublicationStatus = "published";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Story = {
  identifier: string;
  headline: string;
  slug: string;
  primaryCategory: StoryCategory;
  description: string;
  author: string;
  publicationDate: string;
  heroImage: string;
  heroImageDescription: string;
  moment: string;
  tone: string;
  emotion: string;
  outcome: string;
  articleIntroduction: string;
  articleSections: ArticleSection[];
  articleQuote: string;
  planningNotes: string[];
  editorialConclusion: string;
  relatedStorySlugs: string[];
  featured: boolean;
  publicationStatus: PublicationStatus;
};

export const categoryDetails: Record<StoryCategory, { number: string; emotion: string; outcome: string; description: string }> = {
  FOOD: { number: "01", emotion: "Belonging", outcome: "Leave more connected than you arrived", description: "Nourishment, hospitality and the tables that hold us." },
  SEX: { number: "02", emotion: "Intimacy", outcome: "Feel seen, wanted and closer", description: "Intimacy, confidence and the courage to be known." },
  ALCOHOL: { number: "03", emotion: "Celebration", outcome: "Turn a passing moment into an occasion", description: "Celebration, ritual and a better reason to raise a glass." },
};

const articleIntroduction = "There are experiences that fill time, and experiences that change its texture. This is about the second kind: the rare choice that makes an ordinary hour feel deliberate, generous and fully lived.";
const articleSections: ArticleSection[] = [
  { heading: "Why this matters", paragraphs: ["Because the life moment comes first. The setting, object or reservation only matters if it helps you become more present inside it. We look past status and novelty to the feeling that remains after the receipt is gone."] },
  { heading: "The experience", paragraphs: ["Choose the person before the place. Leave margin around the plan. Arrive without rushing, ask one better question, and notice what the room makes possible. The goal is not a perfect night. It is a night you were actually there for."] },
];
const articleQuote = "The best luxury is not excess. It is attention, beautifully placed.";
const planningNotes = ["Protect more time than you think you need.", "Let one considered detail carry the evening.", "Keep the phone out of reach, not face down."];

type StorySeed = Omit<Story, "author" | "publicationDate" | "heroImageDescription" | "emotion" | "outcome" | "articleIntroduction" | "articleSections" | "articleQuote" | "planningNotes" | "publicationStatus">;

const seeds: StorySeed[] = [
  { identifier: "01", primaryCategory: "FOOD", headline: "The Dinner That Makes Time Disappear", slug: "the-dinner-that-makes-time-disappear", description: "Six restaurants for the night when the table matters more than the reservation.", moment: "For two people with something worth saying", heroImage: "/images/food.png", tone: "gold", editorialConclusion: "YES, when the company is the occasion.", relatedStorySlugs: ["coffee-worth-waking-up-early-for", "cook-one-impossibly-good-thing", "the-long-lunch-is-not-dead"], featured: true },
  { identifier: "02", primaryCategory: "FOOD", headline: "Coffee Worth Waking Up Early For", slug: "coffee-worth-waking-up-early-for", description: "The rare rooms where the first hour of the day feels entirely your own.", moment: "For reclaiming a quiet morning", heroImage: "/images/hero.png", tone: "cream", editorialConclusion: "YES, if you arrive before the city does.", relatedStorySlugs: ["the-dinner-that-makes-time-disappear", "cook-one-impossibly-good-thing", "a-table-set-for-coming-home"], featured: true },
  { identifier: "03", primaryCategory: "FOOD", headline: "Cook One Impossibly Good Thing", slug: "cook-one-impossibly-good-thing", description: "A roast chicken, a sharp knife and the confidence to stop overcomplicating dinner.", moment: "For becoming the host you remember", heroImage: "/images/food.png", tone: "rust", editorialConclusion: "YES. Mastery is more memorable than variety.", relatedStorySlugs: ["the-dinner-that-makes-time-disappear", "coffee-worth-waking-up-early-for", "a-table-set-for-coming-home"], featured: false },
  { identifier: "04", primaryCategory: "FOOD", headline: "The Long Lunch Is Not Dead", slug: "the-long-lunch-is-not-dead", description: "Where to let noon become four and conversation outrun the check.", moment: "For friendships that deserve more than an hour", heroImage: "/images/food.png", tone: "olive", editorialConclusion: "YES, and put the phone away.", relatedStorySlugs: ["the-dinner-that-makes-time-disappear", "coffee-worth-waking-up-early-for", "a-table-set-for-coming-home"], featured: true },
  { identifier: "05", primaryCategory: "FOOD", headline: "A Table Set for Coming Home", slug: "a-table-set-for-coming-home", description: "The objects, rituals and generous imperfections that make people want to stay.", moment: "For gathering your people again", heroImage: "/images/hero.png", tone: "ink", editorialConclusion: "YES. The feeling is the luxury.", relatedStorySlugs: ["the-dinner-that-makes-time-disappear", "cook-one-impossibly-good-thing", "the-long-lunch-is-not-dead"], featured: false },
  { identifier: "06", primaryCategory: "SEX", headline: "Luxury Sheets Worth Every Dollar", slug: "luxury-sheets-worth-every-dollar", description: "Not thread-count theater. Bedding that changes the way a room, and a night, feels.", moment: "For making the ordinary intimate", heroImage: "/images/romance.png", tone: "rose", editorialConclusion: "YES, if you buy for feel, not status.", relatedStorySlugs: ["the-hotel-room-built-for-reconnection", "desire-begins-before-the-bedroom", "the-bedroom-should-feel-like-an-invitation"], featured: true },
  { identifier: "07", primaryCategory: "SEX", headline: "The Hotel Room Built for Reconnection", slug: "the-hotel-room-built-for-reconnection", description: "Privacy, light, sound and the small design decisions that help two people return to each other.", moment: "For the weekend you stop postponing", heroImage: "/images/romance.png", tone: "wine", editorialConclusion: "ONLY FOR THE RIGHT PERSON. A room cannot do the honest part for you.", relatedStorySlugs: ["luxury-sheets-worth-every-dollar", "desire-begins-before-the-bedroom", "how-to-ask-for-what-you-want"], featured: true },
  { identifier: "08", primaryCategory: "SEX", headline: "Desire Begins Before the Bedroom", slug: "desire-begins-before-the-bedroom", description: "The lost art of anticipation, and why attention is still the most seductive gesture.", moment: "For restoring electricity to familiarity", heroImage: "/images/hero.png", tone: "plum", editorialConclusion: "YES. Attention compounds.", relatedStorySlugs: ["luxury-sheets-worth-every-dollar", "the-hotel-room-built-for-reconnection", "how-to-ask-for-what-you-want"], featured: false },
  { identifier: "09", primaryCategory: "SEX", headline: "How to Ask for What You Want", slug: "how-to-ask-for-what-you-want", description: "A mature guide to replacing performance, guessing and silence with a better conversation.", moment: "For choosing courage over assumption", heroImage: "/images/romance.png", tone: "sand", editorialConclusion: "YES, when curiosity replaces demand.", relatedStorySlugs: ["the-hotel-room-built-for-reconnection", "desire-begins-before-the-bedroom", "the-bedroom-should-feel-like-an-invitation"], featured: false },
  { identifier: "10", primaryCategory: "SEX", headline: "The Bedroom Should Feel Like an Invitation", slug: "the-bedroom-should-feel-like-an-invitation", description: "Lighting, texture, temperature and the quiet removal of everything that kills the mood.", moment: "For making space for closeness", heroImage: "/images/romance.png", tone: "clay", editorialConclusion: "YES. Design the feeling, not the photograph.", relatedStorySlugs: ["luxury-sheets-worth-every-dollar", "desire-begins-before-the-bedroom", "how-to-ask-for-what-you-want"], featured: false },
  { identifier: "11", primaryCategory: "ALCOHOL", headline: "Champagne Worth Saving for Life's Biggest Moments", slug: "champagne-worth-saving-for-lifes-biggest-moments", description: "Five bottles with enough character to become part of the story you tell later.", moment: "For marking the day properly", heroImage: "/images/hero.png", tone: "champagne", editorialConclusion: "YES. The memory deserves a ritual.", relatedStorySlugs: ["the-one-bottle-home-bar", "a-beer-garden-at-golden-hour", "the-cocktail-that-starts-a-celebration"], featured: true },
  { identifier: "12", primaryCategory: "ALCOHOL", headline: "The One-Bottle Home Bar", slug: "the-one-bottle-home-bar", description: "A beautiful bottle, cold ice and one drink you can make without looking anything up.", moment: "For welcoming someone well", heroImage: "/images/hero.png", tone: "amber", editorialConclusion: "YES. Hospitality beats inventory.", relatedStorySlugs: ["champagne-worth-saving-for-lifes-biggest-moments", "a-beer-garden-at-golden-hour", "the-cocktail-that-starts-a-celebration"], featured: false },
  { identifier: "13", primaryCategory: "ALCOHOL", headline: "A Beer Garden at Golden Hour", slug: "a-beer-garden-at-golden-hour", description: "The places that understand cold beer tastes better with open sky and nowhere else to be.", moment: "For ending the week among friends", heroImage: "/images/food.png", tone: "moss", editorialConclusion: "YES, before the sun disappears.", relatedStorySlugs: ["champagne-worth-saving-for-lifes-biggest-moments", "the-one-bottle-home-bar", "the-cocktail-that-starts-a-celebration"], featured: false },
  { identifier: "14", primaryCategory: "ALCOHOL", headline: "Whiskey for the Night You Need to Think", slug: "whiskey-for-the-night-you-need-to-think", description: "Not escape. A measured pour, a quiet chair and enough room to hear yourself clearly.", moment: "For sitting with the truth", heroImage: "/images/hero.png", tone: "oak", editorialConclusion: "ONLY FOR THE RIGHT PERSON. Reflection must remain the point.", relatedStorySlugs: ["the-one-bottle-home-bar", "a-beer-garden-at-golden-hour", "the-cocktail-that-starts-a-celebration"], featured: false },
  { identifier: "15", primaryCategory: "ALCOHOL", headline: "The Cocktail That Starts a Celebration", slug: "the-cocktail-that-starts-a-celebration", description: "How to make the first ten minutes feel like everyone came to the right place.", moment: "For turning arrival into occasion", heroImage: "/images/food.png", tone: "red", editorialConclusion: "YES. The welcome becomes the memory.", relatedStorySlugs: ["champagne-worth-saving-for-lifes-biggest-moments", "the-one-bottle-home-bar", "a-beer-garden-at-golden-hour"], featured: false },
];

export const stories: Story[] = seeds.map((story) => ({
  ...story,
  author: "Ross Rogers",
  publicationDate: "2026-07-17",
  heroImageDescription: story.primaryCategory === "SEX" ? "Warm light across an intimate hotel room" : story.primaryCategory === "FOOD" ? "A warmly lit table prepared for a memorable gathering" : "A warmly lit setting for a considered drink and celebration",
  emotion: categoryDetails[story.primaryCategory].emotion,
  outcome: categoryDetails[story.primaryCategory].outcome,
  articleIntroduction,
  articleSections,
  articleQuote,
  planningNotes,
  publicationStatus: "published",
}));

export const storyPath = (story: Story) => `/${story.primaryCategory.toLowerCase()}/${story.slug}`;
export const storiesForCategory = (category: StoryCategory) => stories.filter((story) => story.primaryCategory === category && story.publicationStatus === "published");
export const relatedStoriesFor = (story: Story) => story.relatedStorySlugs
  .map((slug) => stories.find((candidate) => candidate.slug === slug))
  .filter((candidate): candidate is Story => candidate !== undefined)
  .filter((candidate) => candidate.slug !== story.slug)
  .slice(0, 3);
