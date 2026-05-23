import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Cable,
  Check,
  FileBarChart,
  Gauge,
  Lock,
  Monitor,
  Network,
  Radio,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Param = { id: string; name: string; desc: string; icon: LucideIcon };

const PARAMS: Param[] = [
  { id: "plc", name: "PLC Connectivity", desc: "Programmable controllers networked across lines.", icon: Cable },
  { id: "scada", name: "SCADA Integration", desc: "Unified supervisory control across the floor.", icon: Network },
  { id: "trace", name: "Data Traceability", desc: "Every batch and unit traceable end-to-end.", icon: FileBarChart },
  { id: "oee", name: "OEE Tracking", desc: "Live availability, performance and quality.", icon: BarChart3 },
  { id: "sensors", name: "Sensor Coverage", desc: "Critical assets instrumented and monitored.", icon: Radio },
  { id: "alarms", name: "Alarm Management", desc: "Prioritised, actionable, low-noise alarms.", icon: Bell },
  { id: "schedule", name: "Production Scheduling", desc: "Digital scheduling synced to actuals.", icon: Activity },
  { id: "quality", name: "Quality Control / SPC", desc: "Statistical process control in real time.", icon: ShieldCheck },
  { id: "predict", name: "Predictive Maintenance", desc: "Failures predicted before downtime occurs.", icon: Wrench },
  { id: "energy", name: "Energy Monitoring", desc: "Sub-metered consumption per asset.", icon: Zap },
  { id: "inventory", name: "Inventory Sync (ERP/MES)", desc: "Stock and WIP synced with ERP/MES.", icon: Boxes },
  { id: "hmi", name: "Operator HMI Standardization", desc: "Consistent operator screens across lines.", icon: Monitor },
  { id: "safety", name: "Safety Interlocks", desc: "Verified, audited safety logic in place.", icon: AlertTriangle },
  { id: "cyber", name: "Cybersecurity Posture", desc: "Segmented OT network with access control.", icon: Lock },
  { id: "reports", name: "Reporting Automation", desc: "Shift, daily and exec reports auto-generated.", icon: Gauge },
];

function gradeFor(score: number) {
  if (score <= 3) return { letter: "D", label: "Critical", caption: "Manual operations dominate — high risk, low visibility." };
  if (score <= 7) return { letter: "C", label: "Developing", caption: "Foundations in place — significant gaps remain." };
  if (score <= 11) return { letter: "B", label: "Operational", caption: "Solid automation — opportunities to certify." };
  return { letter: "A", label: "Certified", caption: "Certified Grade A — automation excellence." };
}

export type GradeSnapshot = { score: number; total: number; letter: string };

export function AuditSection({
  onGradeChange,
}: {
  onGradeChange?: (g: GradeSnapshot) => void;
}) {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const score = useMemo(() => Object.values(on).filter(Boolean).length, [on]);
  const total = PARAMS.length;
  const grade = gradeFor(score);
  const pct = (score / total) * 100;

  const toggle = (id: string) => {
    setOn((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      const newScore = Object.values(next).filter(Boolean).length;
      onGradeChange?.({ score: newScore, total, letter: gradeFor(newScore).letter });
      return next;
    });
  };

  return (
    <section id="audit" className="bg-surface-muted">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            The Audit
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            The 60-Second Plant Grading Tool
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Toggle each of the 15 parameters your factory has implemented. Your live grade
            updates instantly — from Grade D (Critical) to Certified Grade A.
          </p>
        </div>

        {/* Sticky live grade meter */}
        <div className="sticky top-20 z-30 mt-10">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-xl border border-border text-3xl font-bold"
                  style={{ color: score >= 12 ? "#059669" : "#1E293B" }}
                  aria-label={`Current grade ${grade.letter}`}
                >
                  {grade.letter}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Live grade — {grade.label}
                  </div>
                  <div className="mt-1 text-base text-foreground">{grade.caption}</div>
                </div>
              </div>
              <div className="md:w-80">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-semibold text-foreground">
                    {score} <span className="text-muted-foreground">/ {total}</span>
                  </span>
                  <span className="text-muted-foreground">parameters active</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PARAMS.map(({ id, name, desc, icon: Icon }) => {
            const active = !!on[id];
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(id)}
                className={[
                  "group relative flex w-full flex-col items-start rounded-xl border bg-background p-6 text-left transition-colors",
                  active
                    ? "border-primary ring-1 ring-primary"
                    : "border-border hover:border-foreground/30",
                ].join(" ")}
              >
                <div className="flex w-full items-start justify-between">
                  <span
                    className={[
                      "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                      active ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground",
                    ].join(" ")}
                  >
                    <Icon size={20} />
                  </span>
                  {active && (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check size={14} strokeWidth={3} />
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Your computed grade is shared with our experts to tailor your roadmap.
          </p>
          <a
            href="#contact"
            className="btn-cta inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold"
          >
            Discuss your grade with an expert
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}