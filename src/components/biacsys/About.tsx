import { Target, Lightbulb, Factory, BarChart, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        
        {/* Top Section: Story & Core Identity */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              About BIACSYS
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:leading-tight">
              Defining the Standard for Manufacturing Excellence.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The manufacturing landscape is fragmented by legacy systems and isolated data. 
                We exist to bridge the gap between traditional operations and future-ready, 
                connected ecosystems. 
              </p>
              <p>
                Created by industrial engineers for industrial leaders, BIACSYS replaces subjective 
                opinions with objective, empirical grading. We provide Plant Heads and Managing 
                Directors with the clarity required to drive profitable transformation.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card/50 p-8 shadow-sm backdrop-blur-sm transition-colors hover:bg-card">
              <div>
                <Target className="mb-6 h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To elevate global manufacturing by establishing a universal, data-driven 
                  standard for operational and digital maturity.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card/50 p-8 shadow-sm backdrop-blur-sm transition-colors hover:bg-card lg:translate-y-8">
              <div>
                <Lightbulb className="mb-6 h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To be the definitive authority and most trusted partner in guiding industrial 
                  facilities through Industry 4.0 transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: The Advantage Grid */}
        <div className="mt-32 border-t border-border pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Why Choose Us
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The BIACSYS Advantage
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We do not deliver theoretical whitepapers. We deliver CAPEX-aware, step-by-step 
              blueprints designed for immediate factory-floor implementation.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ShieldCheck size={24} />,
                title: "Structured Methodology",
                desc: "Our proprietary 15-parameter framework ensures standardized, rigorous assessments."
              },
              {
                icon: <BarChart size={24} />,
                title: "Data-Driven",
                desc: "Relying on empirical shop-floor realities to identify the root causes of margin erosion."
              },
              {
                icon: <Target size={24} />,
                title: "Practical Execution",
                desc: "Prioritized, ROI-justified technical solutions ready for implementation."
              },
              {
                icon: <Factory size={24} />,
                title: "Manufacturing-Focused",
                desc: "We speak the language of PLCs, SCADA, OEE, and throughput."
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h4 className="mb-3 text-lg font-semibold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
