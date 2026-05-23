import { ArrowRight } from "lucide-react";
import { HeroGraphic } from "./HeroGraphic";

export function Hero() {
  return (
    <section id="home" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Welcome to BIACSYS
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Stop Guessing.
            <br />
            Start Grading.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The era of manual plant management is over. Standardize your operations and
            transition your factory from Grade D to a Certified Grade A.
          </p>
          <div className="mt-10">
            <a
              href="#audit"
              className="btn-cta inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 text-base font-semibold"
            >
              Grade your plant in 60 sec now
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">15</div>
              <div>Audit parameters</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">60s</div>
              <div>Time to grade</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">A → D</div>
              <div>Certification scale</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}