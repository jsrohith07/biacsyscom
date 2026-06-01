import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center lg:px-8">
        <Logo />
        <p className="text-sm text-muted-foreground">
          Bharathi Industrial Automation & Consulting Systems. 
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BIACSYS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
