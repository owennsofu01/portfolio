import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaExternalLinkAlt, FaFeatherAlt } from "react-icons/fa";
import { PageHero, Section, Reveal, card } from "../ui/Section";

interface BlogPost {
  title?: string;
  link?: string;
  thumbnail?: string;
  contentSnippet?: string;
  pubDate?: string;
  author?: string;
  description?: string;
  content?: string;
  enclosure?: { link?: string };
}

// ── Feed loading ────────────────────────────────────────────────────────────
const SUBSTACK_FEED = "https://owennsofu.substack.com/feed";

const htmlToText = (html?: string) =>
  html ? new DOMParser().parseFromString(html, "text/html").body.textContent?.replace(/\s+/g, " ").trim() : undefined;

// Fill the fields the cards use from whatever the feed source provides.
const normalizePost = (post: BlogPost): BlogPost => ({
  ...post,
  contentSnippet: htmlToText(post.content) || htmlToText(post.description) || post.contentSnippet,
  thumbnail: post.thumbnail || post.enclosure?.link || undefined,
});

const fetchFromRss2Json = async (): Promise<BlogPost[]> => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${SUBSTACK_FEED}`
  );
  const data = await res.json();
  if (data.status !== "ok" || !data.items?.length) throw new Error("rss2json");
  return data.items.map((item: BlogPost) => normalizePost(item));
};

const fetchFromSavedFeed = async (): Promise<BlogPost[]> => {
  const res = await fetch("/blog-feed.xml");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const xml = new DOMParser().parseFromString(await res.text(), "text/xml");
  const items = Array.from(xml.querySelectorAll("item"));
  if (!items.length) throw new Error("empty feed");

  const text = (item: Element, tag: string) =>
    item.getElementsByTagName(tag)[0]?.textContent?.trim() || undefined;

  return items.map((item) => ({
    title: text(item, "title"),
    link: text(item, "link"),
    pubDate: text(item, "pubDate"),
    author: text(item, "dc:creator"),
    content: text(item, "content:encoded"),
    description: text(item, "description"),
    thumbnail: item.getElementsByTagName("enclosure")[0]?.getAttribute("url") || undefined,
  })).map(normalizePost);
};

// Post titles from Substack often carry emojis ("🌱 Life Lesson 🌱").
const stripEmoji = (text?: string) =>
  text?.replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, "").replace(/\s+/g, " ").trim();

const SUBSTACK_URL = "https://owennsofu.substack.com";

const formatDate = (d?: string) =>
  d ? new Date(d.replace(" ", "T")).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

const readingTime = (text?: string) =>
  `${Math.max(1, Math.ceil((text?.split(/\s+/).length || 0) / 200))} min read`;

// Posts without their own cover get Substack's publication logo; treat any
// image shared by several posts as "no cover" and show a branded tile instead.
const coverlessImages = (posts: BlogPost[]) => {
  const counts = new Map<string, number>();
  posts.forEach((p) => p.thumbnail && counts.set(p.thumbnail, (counts.get(p.thumbnail) ?? 0) + 1));
  return new Set([...counts].filter(([, n]) => n > 1).map(([src]) => src));
};

const Cover = ({ src }: { src?: string }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="aspect-[16/9] overflow-hidden bg-teal-950 bg-dots-dark flex items-center justify-center">
      {src && !failed ? (
        <img src={src} alt="" loading="lazy" onError={() => setFailed(true)}
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      ) : (
        <FaFeatherAlt className="text-teal-400/70" size={28} aria-hidden="true" />
      )}
    </div>
  );
};

const BlogCard = ({ post, hideCover }: { post: BlogPost; hideCover: boolean }) => (
  <a href={post.link} target="_blank" rel="noopener noreferrer"
     className={`${card} group h-full flex flex-col overflow-hidden hover:shadow-lg hover:shadow-gray-200/70`}>
    <Cover src={hideCover ? undefined : post.thumbnail} />
    <div className="flex-1 flex flex-col p-6">
      <p className="text-xs text-gray-500">
        {formatDate(post.pubDate)} · {readingTime(post.contentSnippet)}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors line-clamp-2">
        {stripEmoji(post.title)}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{stripEmoji(post.contentSnippet)}</p>
      <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
        Read on Substack <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </div>
  </a>
);

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setPosts(await fetchFromRss2Json());
      } catch {
        // rss2json is often blocked by a Cloudflare bot check; use the copy
        // of the feed saved at build time (see vite.config.ts).
        try {
          setPosts(await fetchFromSavedFeed());
        } catch {
          setError("Couldn't load posts right now.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeed();
  }, []);

  const generic = coverlessImages(posts);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Owen Nsofu's Blog",
            url: "https://owennsofu.com/blog",
            author: { "@type": "Person", name: "Owen Nsofu", url: "https://owennsofu.com" },
          })}
        </script>
      </Helmet>

      <PageHero
        eyebrow="Blog"
        title="Thoughts and notes"
        description="Short reflections on growth, faith, consistency and building things, published on Substack."
      >
        <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer"
           className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white">
          Subscribe on Substack <FaExternalLinkAlt size={11} aria-hidden="true" />
        </a>
      </PageHero>

      <Section>
        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading posts">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
                <div className="aspect-[16/9] bg-gray-100" />
                <div className="p-6 space-y-3">
                  <div className="h-3 w-24 bg-gray-100 rounded" />
                  <div className="h-5 w-3/4 bg-gray-100 rounded" />
                  <div className="h-3 w-full bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error || posts.length === 0 ? (
          <p className="text-gray-600">
            {error ?? "No posts yet."}{" "}
            <a href={SUBSTACK_URL} className="font-semibold text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
              Read on Substack
            </a>
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.link ?? i} delay={(i % 3) * 0.05}>
                <BlogCard post={post} hideCover={!!post.thumbnail && generic.has(post.thumbnail)} />
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
};

export default Blog;
