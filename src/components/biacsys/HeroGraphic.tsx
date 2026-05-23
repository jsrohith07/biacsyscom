export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 520 460"
      className="h-auto w-full max-w-[560px]"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer panel */}
      <rect x="20" y="40" width="480" height="380" rx="16" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Minimalist factory outline */}
      <path
        d="M70 320 L70 220 L130 260 L130 200 L200 240 L200 180 L280 220 L280 320 Z"
        stroke="#1E293B"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="70" y1="320" x2="290" y2="320" stroke="#1E293B" strokeWidth="1.6" />
      {/* chimney */}
      <rect x="240" y="160" width="14" height="60" stroke="#1E293B" strokeWidth="1.6" />
      {/* tiny windows */}
      <rect x="90" y="270" width="10" height="10" fill="#10B981" />
      <rect x="150" y="260" width="10" height="10" fill="#1E293B" />
      <rect x="220" y="260" width="10" height="10" fill="#1E293B" />

      {/* Precision gauge dial — top right */}
      <g transform="translate(370,140)">
        <circle r="60" stroke="#1E293B" strokeWidth="1.6" />
        <circle r="50" stroke="#E2E8F0" strokeWidth="1" />
        {/* tick marks */}
        {Array.from({ length: 11 }).map((_, i) => {
          const a = (-Math.PI * (i / 10)) - 0; // 0..-π
          const x1 = Math.cos(a) * 50;
          const y1 = Math.sin(a) * 50;
          const x2 = Math.cos(a) * 58;
          const y2 = Math.sin(a) * 58;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#1E293B"
              strokeWidth="1.2"
            />
          );
        })}
        {/* needle pointing to Grade A region */}
        <line x1="0" y1="0" x2="38" y2="-30" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        <circle r="5" fill="#1E293B" />
        <text y="28" textAnchor="middle" fontSize="11" fill="#1E293B" fontWeight="600">
          GRADE A
        </text>
      </g>

      {/* Interconnected nodes — bottom right */}
      <g transform="translate(330,300)">
        <line x1="0" y1="0" x2="60" y2="-20" stroke="#1E293B" strokeWidth="1.2" />
        <line x1="0" y1="0" x2="60" y2="40" stroke="#1E293B" strokeWidth="1.2" />
        <line x1="60" y1="-20" x2="130" y2="10" stroke="#1E293B" strokeWidth="1.2" />
        <line x1="60" y1="40" x2="130" y2="10" stroke="#10B981" strokeWidth="1.6" />
        <circle cx="0" cy="0" r="7" fill="#1E293B" />
        <circle cx="60" cy="-20" r="7" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
        <circle cx="60" cy="40" r="7" fill="#10B981" />
        <circle cx="130" cy="10" r="9" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
      </g>

      {/* Top-left data ticks */}
      <g transform="translate(60,80)">
        <line x1="0" y1="0" x2="120" y2="0" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="0" y1="14" x2="80" y2="14" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="0" y1="28" x2="100" y2="28" stroke="#10B981" strokeWidth="2" />
      </g>
    </svg>
  );
}