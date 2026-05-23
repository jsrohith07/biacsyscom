import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { GradeSnapshot } from "./AuditSection";

const LOCATIONS = ["Peenya", "Hosur", "Bommasandra", "Other / Global"] as const;
const SETUPS = [
  "Fully Manual / Paper Logs",
  "Partial Automation (Standalone PLCs)",
  "Advanced (Networked SCADA)",
] as const;

export function ContactSection({ grade }: { grade?: GradeSnapshot }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState<string>("");
  const [setup, setSetup] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !location || !setup) {
      toast.error("Please complete every field so our experts can prepare your audit.");
      return;
    }
    toast.success("Thank you — our automation team will reach out within 24 hours.");
    setName("");
    setLocation("");
    setSetup("");
  };

  const showGrade = grade && grade.score > 0;

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Lead Generation
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Contact the Experts
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tell us where you are. We&apos;ll respond with a tailored roadmap to take you
            toward Certified Grade A.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-background p-8 md:p-10"
        >
          {showGrade && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm">
              <span className="font-semibold text-primary">Your computed grade:</span>
              <span className="text-foreground">
                {grade!.letter} ({grade!.score}/{grade!.total})
              </span>
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Factory Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" className="h-11">
                  <SelectValue placeholder="Select your factory location" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATIONS.map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="setup">Current Automation Setup</Label>
              <Select value={setup} onValueChange={setSetup}>
                <SelectTrigger id="setup" className="h-11">
                  <SelectValue placeholder="Where is your plant today?" />
                </SelectTrigger>
                <SelectContent>
                  {SETUPS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              type="submit"
              className="btn-cta inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold"
            >
              Submit for expert review
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}