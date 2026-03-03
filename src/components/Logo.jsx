export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group" aria-label="Retail Edge — Home">
      {/* Icon mark */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="34" height="34" rx="7" fill="#00c96e" />
        {/* R letter */}
        <text
          x="17"
          y="24"
          fontFamily="Georgia, serif"
          fontSize="20"
          fontWeight="900"
          textAnchor="middle"
          fill="white"
        >
          R
        </text>
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-sans font-extrabold text-[15px] tracking-widest text-ink uppercase">
          Retail Edge
        </span>
        <span className="font-sans font-medium text-[9px] tracking-[0.18em] text-ink-muted uppercase">
          Consulting
        </span>
      </span>
    </a>
  )
}
