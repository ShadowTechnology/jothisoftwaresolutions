import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Jothi Software Solutions",
  description: "Terms of Service for Jothi Software Solutions.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <Navbar />
      <div className="container mx-auto px-4 max-w-4xl prose prose-invert">
        <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Terms</h2>
        <p>
          By accessing the website at jothisoftwaresolutions.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Jothi Software Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Jothi Software Solutions' website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by Jothi Software Solutions at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on Jothi Software Solutions' website are provided on an 'as is' basis. Jothi Software Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall Jothi Software Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Jothi Software Solutions' website, even if Jothi Software Solutions or a Jothi Software Solutions authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2>5. Revisions and Errata</h2>
        <p>
          The materials appearing on Jothi Software Solutions' website could include technical, typographical, or photographic errors. Jothi Software Solutions does not warrant that any of the materials on its website are accurate, complete or current. Jothi Software Solutions may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of Tamil Nadu, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
      <Footer />
    </main>
  );
}
