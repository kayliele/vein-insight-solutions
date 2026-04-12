const VeinLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left arm of V */}
    <path
      d="M10 8L44 88L50 72L22 8Z"
      fill="hsl(var(--primary))"
    />
    {/* Right arm of V */}
    <path
      d="M90 8L56 88L50 72L78 8Z"
      fill="hsl(var(--primary))"
    />
    {/* Inner shadow/depth on left */}
    <path
      d="M22 8L50 72L44 88L10 8Z"
      fill="hsl(var(--primary))"
      opacity="0.95"
    />
    {/* Inner shadow/depth - center overlap */}
    <path
      d="M44 50L50 72L56 50Z"
      fill="hsl(var(--primary))"
      opacity="0.7"
    />
    {/* Center line for depth */}
    <path
      d="M48 72L50 100L52 72Z"
      fill="hsl(var(--primary))"
      opacity="0.6"
    />
    {/* Dot */}
    <circle cx="50" cy="106" r="5.5" fill="hsl(var(--primary))" />
  </svg>
);

export default VeinLogo;