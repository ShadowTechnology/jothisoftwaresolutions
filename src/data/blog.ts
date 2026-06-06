export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode | string[];
  author: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  imageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-local-seo-strategies-2026",
    title: "Top 5 Local SEO Strategies for Businesses in Ambur",
    excerpt: "Learn how local businesses in Tamil Nadu can dominate Google Maps and local search results using proven 2026 SEO techniques.",
    content: [
      "Local SEO is no longer just about having a Google Business Profile. In 2026, Google is heavily prioritizing localized content, proximity-based relevance, and verified user reviews. For businesses in Ambur and surrounding areas, this presents a massive opportunity to capture high-intent local traffic before competitors do.",
      "First, ensure your NAP (Name, Address, Phone Number) consistency is perfect across all directories. Inconsistencies confuse search engines and hurt your local trust score.",
      "Second, generate hyper-local content. Don't just target 'best restaurant'—target 'best biryani in Ambur near the highway'. Long-tail, location-specific keywords convert at a much higher rate.",
      "Third, actively manage reviews. Replying to reviews—both positive and negative—signals to Google that you are an active, trustworthy business. Implementing Review Schema on your website is also crucial for standing out in search results with gold stars.",
      "Finally, ensure your website is mobile-first and lightning fast. Over 80% of local searches happen on mobile devices, often when users are on the go. A slow site will kill your local rankings instantly."
    ],
    author: "Jothi Software Solutions Team",
    date: "2026-05-15",
    readTime: "4 min read",
    category: "SEO",
    keywords: ["Local SEO", "Ambur Business", "Google Maps Ranking", "Tamil Nadu SEO"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    slug: "meta-ads-vs-google-ads",
    title: "Meta Ads vs Google Ads: Which is Better for Your Business?",
    excerpt: "A comprehensive breakdown of when to use Facebook/Instagram ads versus Google Search ads for maximum ROI.",
    content: [
      "The age-old debate: Meta Ads (Facebook & Instagram) or Google Ads? The truth is, the right platform entirely depends on your business goals, target audience, and the nature of your product or service.",
      "Google Ads are driven by intent. When someone searches for 'emergency plumber near me', they have a specific, immediate problem. Google Ads allow you to capture that high-intent traffic instantly. If you sell services or products that people actively search for, Google Ads are usually the best starting point.",
      "Meta Ads, on the other hand, are driven by interruption and visual appeal. Users aren't actively searching for your product; they are scrolling through their feeds. This makes Meta Ads incredible for brand awareness, visually engaging products (like fashion, food, or gadgets), and retargeting campaigns.",
      "At Jothi Software Solutions, we often recommend a hybrid approach. Use Google Ads to capture existing demand, and use Meta Ads to generate new demand and retarget visitors who didn't convert initially. This omni-channel strategy typically yields the highest return on ad spend (ROAS)."
    ],
    author: "Jothi Software Solutions Team",
    date: "2026-04-28",
    readTime: "5 min read",
    category: "Paid Advertising",
    keywords: ["Meta Ads", "Google Ads", "PPC", "Facebook Marketing", "Ad Strategy"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "importance-of-fast-website",
    title: "Why Website Speed is Critical for SEO and Conversions",
    excerpt: "Discover how a 1-second delay in page load time can destroy your conversion rates and sink your Google rankings.",
    content: [
      "In the digital age, patience is nonexistent. If your website takes longer than 3 seconds to load, over 50% of your visitors will abandon it before seeing a single word of your content. But it's not just users who hate slow websites—Google hates them too.",
      "Google’s Core Web Vitals update made website speed and performance a direct ranking factor. Metrics like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) are now critical SEO KPIs. If your site is slow, Google will actively demote it in search results, favoring faster competitors.",
      "Furthermore, speed directly impacts your bottom line. Amazon famously found that every 100ms of latency cost them 1% in sales. Whether you run an e-commerce store or a lead-generation site, a faster site equals more money.",
      "At Jothi Software Solutions, we build all our websites using modern frameworks like Next.js (the exact technology powering this site). This ensures static generation, intelligent image optimization, and near-instant load times, giving our clients a massive competitive advantage."
    ],
    author: "Jothi Software Solutions Team",
    date: "2026-04-10",
    readTime: "3 min read",
    category: "Web Development",
    keywords: ["Website Speed", "Core Web Vitals", "Next.js Development", "SEO Ranking Factors"],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
