const VeinLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 4L20 36L36 4"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="42" r="2.5" fill="hsl(var(--primary))" />
  </svg>
);

export default VeinLogo;
