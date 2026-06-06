import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Digital Marketing Insights | Jothi Software Solutions",
  description: "Read the latest tips, strategies, and insights on SEO, social media marketing, Google Ads, and web development from the experts at Jothi Software Solutions.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-dark px-4 pb-20 pt-36 md:px-8 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Blog</span>
          </div>

          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
              Insights & Strategies
            </span>
            <h1 className="mt-5 text-4xl font-heading font-bold md:text-6xl">
              Digital Marketing <span className="text-gradient">Blog</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Actionable advice, industry trends, and deep dives into what's working right now in SEO, paid ads, and digital growth.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-glass rounded-2xl border border-white/5 overflow-hidden hover:border-primary/20 hover:shadow-card transition-all duration-300"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
