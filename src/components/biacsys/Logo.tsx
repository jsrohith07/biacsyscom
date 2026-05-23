export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`} aria-label="BIACSYS home">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* 3 ascending charcoal bars + emerald dot above the tallest */}
        <rect x="3" y="20" width="5" height="8" rx="1" fill="#1E293B" />
        <rect x="12" y="14" width="5" height="14" rx="1" fill="#1E293B" />
        <rect x="21" y="8" width="5" height="20" rx="1" fill="#1E293B" />
        <circle cx="23.5" cy="3.8" r="2.2" fill="#10B981" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-foreground">BIACSYS</span>
    </a>
  );
}