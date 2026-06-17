import { CaseStudies } from "@/components/sections/case-studies";
import { ContactCta } from "@/components/sections/contact-cta";
import { DodsDefinition } from "@/components/sections/dods-definition";
import { FounderNote } from "@/components/sections/founder-note";
import { Hero } from "@/components/sections/hero";
import { MethodTimeline } from "@/components/sections/method-timeline";
import { Reporting } from "@/components/sections/reporting";
import { SeedingSystem } from "@/components/sections/seeding-system";
import { ServiceDetails } from "@/components/sections/service-details";
import { ServiceOverview } from "@/components/sections/service-overview";
import { Statement } from "@/components/sections/statement";
import { TrustSection } from "@/components/sections/trust-section";
import { WhoNeedsThis } from "@/components/sections/who-needs-this";
import { WhyEgoric } from "@/components/sections/why-egoric";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <DodsDefinition />
      <ServiceOverview />
      <WhoNeedsThis />
      <MethodTimeline />
      <SeedingSystem />
      <ServiceDetails />
      <TrustSection />
      <CaseStudies />
      <Reporting />
      <WhyEgoric />
      <FounderNote />
      <ContactCta />
    </main>
  );
}
