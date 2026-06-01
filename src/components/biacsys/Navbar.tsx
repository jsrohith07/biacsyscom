import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#audit", label: "Audit System" },
  { href: "#audit", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#audit"
          className="hidden md:inline-flex btn-cta items-center justify-center rounded-md px-4 py-2 text-sm font-semibold"
        >
          Start Grading
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              className="btn-cta mt-2 inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-semibold"
            >
              Start Grading
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
