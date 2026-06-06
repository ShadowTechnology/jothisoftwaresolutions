export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  serviceProvided: string;
  excerpt: string;
  challenge: string[];
  solution: string[];
  results: {
    metric: string;
    value: string;
    label: string;
  }[];
  imageUrl: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "local-hospital-seo-growth",
    title: "300% Organic Lead Increase for Top Ambur Hospital",
    client: "Confidential Healthcare Provider",
    industry: "Healthcare",
    serviceProvided: "Local SEO & Website Revamp",
    excerpt: "How we helped a leading multi-specialty hospital in Ambur triple their online appointment bookings in 6 months.",
    challenge: [
      "The hospital had a highly experienced medical team but virtually zero online visibility. When patients searched for 'best hospital in Ambur' or specific doctors, competitors with inferior facilities were outranking them.",
      "Their existing website was outdated, took 8 seconds to load, and had no clear call-to-action for online appointment booking. They relied heavily on traditional word-of-mouth."
    ],
    solution: [
      "We rebuilt their entire website using Next.js to ensure lightning-fast load times (under 1 second). We implemented a modern, trustworthy design highlighting their doctors and facilities.",
      "We executed a comprehensive Local SEO strategy. This included optimizing their Google Business Profile, managing patient reviews, building high-authority local citations, and creating dedicated service pages for each medical specialty they offered."
    ],
    results: [
      { metric: "+", value: "312%", label: "Organic Traffic" },
      { metric: "+", value: "185%", label: "Appointment Leads" },
      { metric: "#", value: "1", label: "Ranking for Core Keywords" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  },
  {
    slug: "ecommerce-meta-ads-scaling",
    title: "Scaling a Footwear Brand to ₹10L/Month via Meta Ads",
    client: "Leather Goods Manufacturer",
    industry: "E-Commerce",
    serviceProvided: "Meta Ads Management",
    excerpt: "Executing a data-driven Facebook and Instagram ad strategy to scale a local leather footwear brand globally.",
    challenge: [
      "Ambur is famous for its leather industry. Our client manufactured premium leather shoes but struggled to sell directly to consumers (D2C) online. They were highly dependent on B2B wholesale buyers.",
      "Previous attempts at Facebook advertising yielded a terrible Return on Ad Spend (ROAS) of 0.8x, meaning they were losing money on every sale."
    ],
    solution: [
      "We completely restructured their Meta Ads account. We implemented the Facebook Pixel with Conversions API to track user behavior accurately despite iOS14 restrictions.",
      "We moved away from static image ads and focused heavily on high-quality video creatives showing the craftsmanship of the shoes. We built a lookalike audience based on their best past customers and set up a dynamic retargeting funnel."
    ],
    results: [
      { metric: "", value: "4.5x", label: "Return on Ad Spend (ROAS)" },
      { metric: "+", value: "400%", label: "D2C Revenue Growth" },
      { metric: "-", value: "62%", label: "Cost Per Acquisition" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop",
  },
  {
    slug: "b2b-saas-sem-campaign",
    title: "Slashing CPA by 40% for a B2B SaaS Startup",
    client: "Tech Solutions Inc",
    industry: "Software as a Service",
    serviceProvided: "Search Engine Marketing (PPC)",
    excerpt: "Restructuring a bloated Google Ads account to dramatically lower acquisition costs while increasing lead quality.",
    challenge: [
      "A fast-growing B2B software company was burning through their marketing budget on Google Ads. They were generating leads, but the Cost Per Acquisition (CPA) was too high to be profitable.",
      "Their account was riddled with broad-match keywords, resulting in their ads showing up for irrelevant searches by students and non-buyers."
    ],
    solution: [
      "We performed a massive negative keyword audit, eliminating thousands of wasted clicks. We restructured the account using the SKAG (Single Keyword Ad Group) methodology for absolute relevance.",
      "We also designed and A/B tested new landing pages using Unbounce, ensuring that the message on the ad perfectly matched the message on the landing page."
    ],
    results: [
      { metric: "-", value: "42%", label: "Cost Per Acquisition (CPA)" },
      { metric: "+", value: "85%", label: "Conversion Rate" },
      { metric: "+", value: "120%", label: "Qualified Leads" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
