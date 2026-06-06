import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ChevronLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getBlogPost, blogPosts } from "@/data/blog";

const siteUrl = "https://jothisoftwaresolutions.com";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Jothi Software Solutions Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Jothi Software Solutions",
      images: [post.imageUrl],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.imageUrl],
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Jothi Software Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/jsol.jpeg`,
      },
    },
    description: post.excerpt,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Header Section */}
        <header className="container mx-auto max-w-4xl px-4 md:px-8 mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to all articles
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.15] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-white/5 py-4 mt-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto max-w-5xl px-4 md:px-8 mb-16">
          <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/5 shadow-card relative">
            <Image 
              src={post.imageUrl} 
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {Array.isArray(post.content) ? (
              post.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.keywords.map(keyword => (
                <span key={keyword} className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  #{keyword}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>
      </article>

      <Footer />

      {/* Structured Data */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
