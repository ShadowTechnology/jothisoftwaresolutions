import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ChevronLeft, Target, Lightbulb, TrendingUp, Building2, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getCaseStudy, caseStudies } from "@/data/portfolio";

const siteUrl = "https://jothisoftwaresolutions.com";

type PortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | Case Study by Jothi Software Solutions`,
    description: study.excerpt,
    alternates: {
      canonical: `/portfolio/${study.slug}`,
    },
    openGraph: {
      title: study.title,
      description: study.excerpt,
      url: `${siteUrl}/portfolio/${study.slug}`,
      siteName: "Jothi Software Solutions",
      images: [study.imageUrl],
      type: "article",
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

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
        name: "Portfolio",
        item: `${siteUrl}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `${siteUrl}/portfolio/${study.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Header Section */}
        <header className="container mx-auto max-w-5xl px-4 md:px-8 mb-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.15] mb-8 max-w-4xl mx-auto">
            {study.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base border-y border-white/5 py-6 mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-1">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Client</span>
              <span className="font-medium text-foreground flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /> {study.client}</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Industry</span>
              <span className="font-medium text-foreground flex items-center gap-2"><Tag className="w-4 h-4 text-primary" /> {study.industry}</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Services</span>
              <span className="font-medium text-foreground">{study.serviceProvided}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto max-w-5xl px-4 md:px-8 mb-16">
          <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/5 shadow-card relative">
            <Image 
              src={study.imageUrl} 
              alt={study.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          
          {/* Big Results Highlight */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {study.results.map((result, idx) => (
              <div key={idx} className="bg-glass border border-white/5 rounded-2xl p-6 text-center shadow-glow">
                <div className="text-3xl md:text-5xl font-heading font-bold text-gradient mb-2">
                  {result.metric}{result.value}
                </div>
                <div className="text-sm font-bold tracking-wider text-foreground uppercase">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            {/* Challenge */}
            <section className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-accent/20">
                <Target className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 pl-10 md:pl-12">The Challenge</h2>
              <div className="prose prose-invert prose-lg max-w-none pl-10 md:pl-12">
                {study.challenge.map((para, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-primary/20">
                <Lightbulb className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 pl-10 md:pl-12">Our Solution</h2>
              <div className="prose prose-invert prose-lg max-w-none pl-10 md:pl-12">
                {study.solution.map((para, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </section>
          </div>

          {/* Call to action */}
          <div className="mt-20 p-8 md:p-12 bg-gradient-dark rounded-3xl border border-primary/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 relative z-10">
              Want similar results for your business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
              Let's discuss how our data-driven digital marketing strategies can scale your revenue.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow transition hover:bg-primary/90 relative z-10"
            >
              Get a Free Consultation <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />

      {/* Structured Data */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
