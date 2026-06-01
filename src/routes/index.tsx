import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/biacsys/Navbar";
import { Hero } from "@/components/biacsys/Hero";
import { AuditSection, type GradeSnapshot } from "@/components/biacsys/AuditSection";
import { ContactSection } from "@/components/biacsys/ContactSection";
import { Footer } from "@/components/biacsys/Footer";
import { About } from "@/components/biacsys/About";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIACSYS — 60-Second Plant Grading & Industrial Automation Consulting" },
      {
        name: "description",
        content:
          "Standardize your factory and transition from Grade D to Certified Grade A. BIACSYS grades plants across 15 automation parameters in 60 seconds.",
      },
      { property: "og:title", content: "BIACSYS — Industrial Plant Grading & Automation" },
      {
        property: "og:description",
        content:
          "Stop guessing. Start grading. The 60-second plant grading tool from BIACSYS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [grade, setGrade] = useState<GradeSnapshot>();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AuditSection onGradeChange={setGrade} />
        <About/>
        <ContactSection grade={grade} />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
