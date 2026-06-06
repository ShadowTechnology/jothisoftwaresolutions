import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  TrendingUp,
  Users,
  MapPin,
  Target,
  BarChart3,
  FileText,
  Eye,
  PhoneCall,
  Palette,
  Zap,
  Sparkles,
  Smartphone,
  Search,
  Shield,
  Clock,
  Layers,
  Heart,
  Crosshair,
  Image,
  RefreshCw,
  Wallet,
  Trophy,
  Rocket,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getService, services } from "@/data/services";
import type { LucideIcon } from "lucide-react";

const siteUrl = "https://jothisoftwaresolutions.com";

const iconMap: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  users: Users,
  "map-pin": MapPin,
  target: Target,
  "bar-chart": BarChart3,
  "file-text": FileText,
  eye: Eye,
  "phone-call": PhoneCall,
  palette: Palette,
  zap: Zap,
  sparkles: Sparkles,
  smartphone: Smartphone,
  search: Search,
  shield: Shield,
  clock: Clock,
  layers: Layers,
  heart: Heart,
  crosshair: Crosshair,
  image: Image,
  "refresh-cw": RefreshCw,
  wallet: Wallet,
  trophy: Trophy,
  rocket: Rocket,
};

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.pageTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.pageTitle,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      siteName: "Jothi Software Solutions",
      images: [`${siteUrl}/og-image.jpg`],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      site: "@JothiSoftware",
      creator: "@JothiSoftware",
      title: service.pageTitle,
      description: service.metaDescription,
      images: [`${siteUrl}/og-image.jpg`],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((rs) => services.find((s) => s.slug === rs))
    .filter(Boolean);

  // --- Structured Data ---

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Jothi Software Solutions",
      url: siteUrl,
    },
    areaServed: [
      { "@type": "City", name: "Ambur" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.highlights.map((h) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: h },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "Services",
        item: `${siteUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/services/${service.slug}#webpage`,
    name: service.pageTitle,
    description: service.metaDescription,
    url: `${siteUrl}/services/${service.slug}`,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/services/${service.slug}#service`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".service-description"],
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-dark px-4 pb-20 pt-36 md:px-8 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
                {service.shortTitle} in Ambur
              </span>
              <h1 className="mt-5 text-4xl font-heading font-bold leading-tight md:text-6xl">
                {service.title} for Businesses in{" "}
                <span className="text-gradient">Ambur</span>
              </h1>
              <p className="service-description mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+918925350147"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  Call for Consultation
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/50"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>

            {/* Highlights Sidebar */}
            <aside className="rounded-xl border border-white/5 bg-glass p-6 shadow-card">
              <h2 className="font-heading text-2xl font-bold">What We Focus On</h2>
              <ul className="mt-6 space-y-4">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Expected Outcomes</h3>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2 text-sm text-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== LONG-FORM CONTENT SECTION ===== */}
      <section className="px-4 py-20 md:px-8" aria-label={`About ${service.title}`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold md:text-4xl mb-10">
            Why <span className="text-gradient">{service.shortTitle}</span> Matter for Your Business
          </h2>
          <div className="space-y-6">
            {service.longDescription.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="px-4 py-20 md:px-8 bg-gradient-dark relative overflow-hidden" aria-label={`${service.title} process`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
              OUR PROCESS
            </span>
            <h2 className="text-3xl font-heading font-bold md:text-4xl mt-4">
              How We Deliver <span className="text-gradient">{service.shortTitle}</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              A systematic, transparent approach that ensures quality results at every stage.
            </p>
          </div>

          <div className="space-y-6">
            {service.process.map((step, index) => (
              <div
                key={step.step}
                className="group flex gap-6 md:gap-8 items-start p-6 rounded-2xl border border-white/5 bg-glass hover:border-primary/20 transition-all duration-500"
              >
                {/* Step Number */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-heading font-bold text-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {String(step.step).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute left-[3.2rem] mt-[4.5rem] w-px h-6 bg-gradient-to-b from-primary/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="px-4 py-20 md:px-8" aria-label={`Benefits of ${service.title}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
              KEY BENEFITS
            </span>
            <h2 className="text-3xl font-heading font-bold md:text-4xl mt-4">
              What You <span className="text-gradient">Gain</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.iconKey] || CheckCircle2;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-white/5 bg-glass hover:border-primary/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="px-4 py-20 md:px-8 bg-gradient-dark relative overflow-hidden" aria-label={`${service.title} frequently asked questions`}>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
              FAQ
            </span>
            <h2 className="text-3xl font-heading font-bold md:text-4xl mt-4">
              Common Questions About <span className="text-gradient">{service.shortTitle}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/5 bg-glass p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading text-lg font-bold text-foreground">
                  <span>{faq.question}</span>
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES SECTION ===== */}
      {relatedServices.length > 0 && (
        <section className="px-4 py-20 md:px-8" aria-label="Related services">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
                EXPLORE MORE
              </span>
              <h2 className="text-3xl font-heading font-bold md:text-4xl mt-4">
                Related <span className="text-gradient">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((related) => {
                if (!related) return null;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group p-6 rounded-2xl border border-white/5 bg-glass hover:border-primary/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all duration-500"
                  >
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {related.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA BANNER ===== */}
      <section className="px-4 py-16 md:px-8 bg-gradient-dark" aria-label="Contact call to action">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-3xl border border-primary/20 bg-glass p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold md:text-4xl">
                Ready to Grow with <span className="text-gradient">{service.shortTitle}</span>?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Let&apos;s discuss how {service.title.toLowerCase()} can help your business in Ambur achieve its goals.
                Get a free consultation today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918925350147"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  Call +91 89253 50147
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 px-8 py-3.5 text-sm font-bold text-foreground transition hover:border-primary/50"
                >
                  Send Enquiry Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data for SEO */}
      {[serviceSchema, faqSchema, breadcrumbSchema, webPageSchema].map(
        (schema, index) => (
          <Script
            key={index}
            id={`service-schema-${index}`}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}
    </main>
  );
}
