import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does Jothi Software Solutions do?",
    answer:
      "Jothi Software Solutions is a digital marketing agency in Ambur, Tamil Nadu. We help businesses with SEO, social media marketing, Google Ads, website development, Meta Ads, and content creation.",
  },
  {
    question: "Do you provide SEO services for local businesses in Ambur?",
    answer:
      "Yes. We support local SEO, keyword planning, technical checks, content improvements, Google visibility, and monthly search performance reviews for businesses in Ambur and nearby areas.",
  },
  {
    question: "Can you build a business website and manage marketing too?",
    answer:
      "Yes. We can create an SEO-friendly website and connect it with marketing campaigns such as Google Ads, Meta Ads, social media content, and enquiry tracking.",
  },
  {
    question: "How can I contact Jothi Software Solutions?",
    answer:
      "You can call +91 89253 50147, email jssolution247@gmail.com, or visit No.10, Bethesda Hospital Road, Ambur, Tamil Nadu 635802.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden" aria-label="Frequently asked questions">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
            Questions Business Owners <span className="text-gradient">Ask First</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-white/5 bg-glass p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading text-lg font-bold text-foreground">
                <span>{faq.question}</span>
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
