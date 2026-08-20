import Link from "next/link";

export function Logo({ className = "h-9 md:h-10 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 40" className={className} role="img" aria-label="Skillora">
      <defs>
        <linearGradient id="skillora-tri" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B2C9F" />
          <stop offset="55%" stopColor="#8B7CF6" />
          <stop offset="100%" stopColor="#00C3FF" />
        </linearGradient>
      </defs>
      <path d="M20 3 L36 32 H4 Z" fill="url(#skillora-tri)" />
      <path d="M20 10 L20 32 M20 10 L8.5 32 M20 10 L31.5 32" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <text x="46" y="28" fontFamily="Georgia, 'Times New Roman', serif" fontSize="22">
        <tspan fill="#111">skill</tspan>
        <tspan fill="#6B3AD4" fontWeight="700">ORA</tspan>
      </text>
    </svg>
  );
}
